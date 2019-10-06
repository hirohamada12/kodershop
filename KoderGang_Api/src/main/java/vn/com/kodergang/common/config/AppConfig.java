package vn.com.kodergang.common.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import vn.com.kodergang.common.websocket.SocketServer;
@Configuration
public class AppConfig {
    @Autowired
    Environment env;

    @Bean(name = "socketServer", initMethod = "startSocket", destroyMethod = "stopSocket")
    public SocketServer getSocketServer() {
        return new SocketServer(env.getProperty("socket.port", Integer.class, 9000), env.getProperty("socket.enabled", Boolean.class, false));
    }
}
