package vn.com.kodergang;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * vn.com.fis.KoderShopApplication
 * by anhvtn11
 */

@SpringBootApplication
@ComponentScan({"vn.com.kodergang.*"})
@EnableJpaRepositories("vn.com.kodergang.*")
//@EnableCaching
public class KoderShopApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(KoderShopApiApplication.class, args);
    }
}
