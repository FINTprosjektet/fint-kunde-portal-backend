package no.fint.portal.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class SseOrg {
    private String orgId;
    private String path;
    private List<SseClient> clients = new ArrayList<>();

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class SseClient {
        private String client;
        private int events;
        private String id;
        private String registered;
    }
}