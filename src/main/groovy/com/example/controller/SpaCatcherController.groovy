package com.example

import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Error;
import io.micronaut.http.hateoas.JsonError;
import io.micronaut.http.hateoas.Link;
import io.micronaut.core.io.ResourceResolver;
import io.micronaut.http.server.types.files.StreamedFile;
import io.micronaut.http.annotation.Produces
import io.micronaut.http.annotation.Consumes

import jakarta.inject.Inject;
import java.util.Collections;

@Controller("/notfound") 
public class SpaCatcherController {

    @Inject
    ResourceResolver resourceResolver;

    @Consumes(MediaType.TEXT_HTML)
    @Produces(MediaType.TEXT_HTML)
    @Error(status = HttpStatus.NOT_FOUND, global = true)  
    public HttpResponse reactServe(HttpRequest request) {
        return HttpResponse.ok(resourceResolver.getResource("classpath:public/index.html")
        .map(StreamedFile::new).get().getInputStream());
    }
}