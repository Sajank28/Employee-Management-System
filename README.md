# Employee Management System (EMS)

## Overview
The **Employee Management System (EMS)** is a web application designed to manage employee records. It supports CRUD (Create, Read, Update, Delete) operations, allowing users to perform various tasks like adding, viewing, updating, and deleting employee data. This project is built using **Java Spring Boot** for the backend and **React.js** (with Vite.js as the build tool) for the frontend.

## Tools and Technologies
### Backend:
- **Core Java**
- **Spring Boot Framework**
- **PostgreSQL** for the database

### Frontend:
- **React.js**
- **Vite.js** as the build tool
- **Axios** for API connectivity

---

## Features

### Backend (Spring Boot):
1. **Create Employee**
2. **Get Employee By ID**
3. **Get All Employees**
4. **Update Employee**
5. **Delete Employee**

### Frontend (React.js):
1. **Add Employee**
2. **View List of Employees**
3. **Update Employee**
4. **Delete Employee**

---

## Project Structure

### Backend (Spring Boot):
- **Controller**: Handles HTTP requests and maps endpoints.
- **Service**: Implements business logic.
- **Repository**: Interfaces with the PostgreSQL database.
- **Entity**: Represents the Employee entity.

### Frontend (React.js):
- **Components**:
  - `ListEmployeeComponenet`: Displays the list of employees.
  - `AddEmployee`: Form for adding a new employee.
  - `UpdateEmployee`: Form for updating employee details.
  - `DeleteEmployee`: Button for deleting employee.
- **Services**:
  - `EmployeeService.js`: Handles API calls using Axios.
-**UI**
  - Header
  - Footer
---

## How to Run the Application

### Prerequisites
1. **Java JDK** (version 8 or above)
2. **Node.js** (version 16 or above)
3. **PostgreSQL** (version 12 or above)

### Backend (Spring Boot):
1. Clone the repository.
2. Navigate to the `backend` folder.
3. Configure the database connection in the `application.properties` file:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/ems_db
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```
4. Build and run the application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend (React.js):
1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm run dev
   ```

---

## API Endpoints
### Employee Endpoints:
- **POST** `/api/employees` - Add a new employee.
- **GET** `/api/employees/{id}` - Retrieve employee by ID.
- **GET** `/api/employees` - Retrieve all employees.
- **PUT** `/api/employees/{id}` - Update an employee.
- **DELETE** `/api/employees/{id}` - Delete an employee.

---

## Database Schema
### Employee Table:
| Column Name    | Data Type    | Constraints         |
|----------------|--------------|---------------------|
| `id`           | `SERIAL`     | Primary Key         |
| `first_name`   | `VARCHAR`    | Not Null            |
| `last_name`    | `VARCHAR`    | Not Null            |
| `email`        | `VARCHAR`    | Unique, Not Null    |

---

## Key Libraries
### Backend:
- Spring Boot Starter Web
- Spring Boot Starter Data JPA
- PostgreSQL Driver

### Frontend:
- React.js
- Vite.js
- Axios

---

## Future Enhancements
1. Implement authentication and role-based access control.
2. Add filtering and search functionality for employees.
3. Integrate unit and integration testing.
4. Enhance UI with advanced styling frameworks like Tailwind CSS or Material-UI.

---

## License
This project is open-source and available under the [MIT License](LICENSE).
