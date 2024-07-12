# University-Management-System

This project is a web-based application designed to manage university residences. It leverages modern web technologies and Object-Oriented Programming (OOP) principles in JavaScript to create, read, update, and delete (CRUD) records of dorm rooms, apartments, students, and maintenance requests.

# 1. Residence (Base Class)

Represents a general residence with common properties.

Properties:
#name
#address
#occupied
Methods:
constructor(name, address, occupied)
getters and setters for the properties
toString(): Returns a string representation of the residence.

# 2. DormRoom (Subclass of Residence)

Represents a dorm room with additional specific properties.

Properties:
#size
Methods:
constructor(name, address, size, occupied)
calculateRent(): Calculates rent based on size.
Overrides toString() method.

# 3. Apartment (Subclass of Residence)

Represents an apartment with additional specific properties.

Properties:
#bedrooms
Methods:
constructor(name, address, bedrooms, occupied)
calculateRent(): Calculates rent based on number of bedrooms.
Overrides toString() method.

# 4. Student

Represents a student residing in a university residence.

Properties:
#name
#studentId
#gender
#residence
Methods:
constructor(name, studentId, gender, residence)
getters and setters for the properties
toString(): Returns a string representation of the student.
# 5. MaintenanceRequest
Represents a maintenance request submitted by a student.

Properties:
#description
#status
#student
#assignedEmployee
Methods:
constructor(description, student, status, assignedEmployee)
getters and setters for the properties
toString(): Returns a string representation of the request.

## File Overview
index.html: Contains the structure of the application.
styles.css: Contains the styling for the application.
residence_management.js: Contains the class definitions and their functionalities.
script.js: Contains the event handling and CRUD operations.
