package ninja.jalexander.website;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class ApiController {

    @GetMapping("/api/str/time")
    public String timeStr() {
        return (new Date()).toString();
    }

}