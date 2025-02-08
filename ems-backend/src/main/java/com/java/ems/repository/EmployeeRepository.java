package com.java.ems.repository;

import com.java.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

//JPA repo extends CRUD REPO
//It already has @Repository/@Transactional annotation so no need to use it again here
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
