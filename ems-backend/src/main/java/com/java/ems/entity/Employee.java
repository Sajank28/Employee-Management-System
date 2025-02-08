package com.java.ems.entity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="first_name") //optional
    private String firstName;
    @Column(name="last_name")
    private String lastName;
    @Column(name="email_id",nullable = false,unique = true)  //not null and unique
    private String email;
}
