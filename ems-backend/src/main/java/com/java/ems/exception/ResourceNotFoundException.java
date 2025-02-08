package com.java.ems.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

    //Custom exception - if employee with search id doesn't exist
    public ResourceNotFoundException(String message){
        super(message);
    }
}
