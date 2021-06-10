package no.fint.portal.model;

import lombok.Data;
import no.fint.event.model.health.Health;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class Asset {
    private String id;
    private List<Component> components = new ArrayList<>();

    @Data
    public static class Component {
        private String id;
        private ZonedDateTime lastUpdated;
        private List<SseOrg.SseClient> clients = new ArrayList<>();
        private List<Health> health = new ArrayList<>();
    }
}