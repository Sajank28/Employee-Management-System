package com.java.ems.mapper;

import com.java.ems.dto.EmployeeDto;
import com.java.ems.entity.Employee;

public class EmployeeMapper {

   // Employee entity to employee DTO
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    //Employee DTO to employee entity
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
