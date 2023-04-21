package ro.cognizant.coderun2023.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    private static final String HELLO = """
            <h1>Hello Code Runners!</h1>
            <p>Wish you good luck!</p>
            """;

    @GetMapping("/")
    public String helloWorld() {
        return HELLO;
    }
}
