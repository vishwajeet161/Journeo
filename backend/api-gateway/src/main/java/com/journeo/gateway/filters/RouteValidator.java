package com.journeo.gateway.filters;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouteValidator {

    private static final AntPathMatcher matcher = new AntPathMatcher();

    public static final List<String> openApiEndpoints = List.of(
            "/api/auth/**",
            "/eureka/**",
            "/actuator/**"
    );

    public Predicate<ServerHttpRequest> isSecured =
            request -> openApiEndpoints
                    .stream()
                    .noneMatch(pattern ->
                            matcher.match(pattern, request.getURI().getPath()));
}
