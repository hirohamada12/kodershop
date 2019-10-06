package vn.com.kodergang.common.websocket;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;
import vn.com.kodergang.common.utils.StringUtil;

import java.net.InetSocketAddress;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class SocketServer extends WebSocketServer {
    private static Logger logger = LogManager.getLogger(SocketServer.class);
    private boolean isEnabled = false;
    private HashMap<WebSocket, Message.User> clients;
    private Set<WebSocket> conns;

    public SocketServer(int port, boolean isEnabled) {
        super(new InetSocketAddress(port));
        this.isEnabled = isEnabled;
        logger.info("Initializing Socket server on port " + port);
        conns = new HashSet<>();
        clients = new HashMap<>();
    }

    public void startSocket() {
        if (isEnabled) {
            this.start();
            logger.info("Socket server started");
        }else{
            logger.info("Socket server is disabled");
        }
    }

    public void stopSocket() {
        try {
            if (isEnabled) {
                this.stop();
                logger.info("Socket server stopped");
            }
        } catch (Exception e) {
            logger.error(e.toString(), e);
        }
    }

    @Override
    public void onOpen(WebSocket webSocket, ClientHandshake clientHandshake) {
        conns.add(webSocket);
        logger.info("Connection established from: " + webSocket.getRemoteSocketAddress().getHostString());
        logger.info("New connection from " + webSocket.getRemoteSocketAddress().getAddress().getHostAddress());
    }

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {
        conns.remove(conn);
        removeUser(conn);
        logger.info("Connection closed to: " + conn.getRemoteSocketAddress().getHostString());
        logger.info("Closed connection to " + conn.getRemoteSocketAddress().getAddress().getHostAddress());
    }

    @Override
    public void onMessage(WebSocket conn, String message) {
        try {
            Message msg = (Message) StringUtil.jsonToObject(message, Message.class);

            switch (msg.getType()) {
                case USER_JOINED:
                    addUser(msg.getUser(), conn);
                    break;
                case USER_LEFT:
                    removeUser(conn);
                    break;
                case TEXT_MESSAGE:
                    broadcastMessage(msg);
            }

            logger.info("Message from user: " + msg.getUser() + ", text: " + msg.getData() + ", type:" + msg.getType());
        } catch (Exception e) {
            logger.error("Wrong message format.", e);
        }
    }

    @Override
    public void onError(WebSocket conn, Exception ex) {
        if (conn != null) {
            conns.remove(conn);
        }
        assert conn != null;
        logger.error("ERROR from " + conn.getRemoteSocketAddress().getAddress().getHostAddress());
    }

    public void broadcastMessage(Message msg) {
        try {
            String messageJson = StringUtil.objectToJson(msg);
            logger.info(String.format("Broadcasting to %d client(s)", conns.size()));
            logger.info("Socket broadcast message: " + messageJson);
            for (WebSocket sock : conns) {
                sock.send(messageJson);
            }
        } catch (Exception e) {
            logger.error(e.toString(), e);
        }
    }

    private void addUser(Message.User user, WebSocket conn) {
        clients.put(conn, user);
        acknowledgeUserJoined(user, conn);
    }

    private void removeUser(WebSocket conn) {
        clients.remove(conn);
    }

    private void acknowledgeUserJoined(Message.User user, WebSocket conn) {
        Message message = new Message();
        message.setType(Message.MessageType.USER_JOINED_ACK);
        message.setUser(user);
        conn.send(StringUtil.objectToJson(message));
    }

}
