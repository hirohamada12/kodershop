package vn.com.kodergang.common.websocket;

import java.io.Serializable;

/**
 * vn.com.fis.common.websocket.Message
 * TungHuynh
 * Created by sondt18@fpt.com.vn
 * Date 11/06/2019 4:39 PM
 */

public class Message implements Serializable {

    private User user;
    private MessageType type;
    private String data;

    public Message() {
    }

    public Message(MessageType type) {
        this.type = type;
    }

    public Message(MessageType type, String data) {
        this.type = type;
        this.data = data;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public MessageType getType() {
        return type;
    }

    public void setType(MessageType type) {
        this.type = type;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }

    public enum MessageType {
        USER_JOINED, TEXT_MESSAGE, USER_LEFT, USER_JOINED_ACK, CHANGE_BOOKING, CHANGE_TICKET
    }

    public class User {
        private String userId;
        private String sessionId;

        public String getUserId() {
            return userId;
        }

        public void setUserId(String userId) {
            this.userId = userId;
        }

        public String getSessionId() {
            return sessionId;
        }

        public void setSessionId(String sessionId) {
            this.sessionId = sessionId;
        }
    }
}
