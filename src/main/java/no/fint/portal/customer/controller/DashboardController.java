package no.fint.portal.customer.controller;

import lombok.extern.slf4j.Slf4j;
import no.fint.portal.model.Asset;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

@Slf4j
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final RestTemplate restTemplate;

    public DashboardController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/{orgId}")
    public ResponseEntity<Asset> getDashboardData(@PathVariable String orgId) {
        Asset componentConfigurationList = restTemplate
                .exchange(
                        "http://localhost:8099/assets/" + orgId,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<Asset>() {
                        }
                ).getBody();

        return ResponseEntity.ok(Objects.requireNonNull(componentConfigurationList));
    }
}
