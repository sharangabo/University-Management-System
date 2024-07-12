// Base class for residences
class Residence {
    #name;
    #address;
    #occupied;

    constructor(name, address, occupied = false) {
        this.#name = name;
        this.#address = address;
        this.#occupied = occupied;
    }

    get name() {
        return this.#name;
    }

    get address() {
        return this.#address;
    }

    get occupied() {
        return this.#occupied;
    }

    set occupied(status) {
        this.#occupied = status;
    }

    toString() {
        return `${this.#name}, Address: ${this.#address}, Occupied: ${this.#occupied}`;
    }
}

// DormRoom class extending Residence
class DormRoom extends Residence {
    #size;

    constructor(name, address, size, occupied = false) {
        super(name, address, occupied);
        this.#size = size;
    }

    get size() {
        return this.#size;
    }

    set size(size) {
        this.#size = size;
    }

    calculateRent() {
        return this.#size * 10; // Example rent calculation
    }

    toString() {
        return `${super.toString()}, Size: ${this.#size} sq ft, Rent: $${this.calculateRent()}`;
    }
}

// Apartment class extending Residence
class Apartment extends Residence {
    #bedrooms;

    constructor(name, address, bedrooms, occupied = false) {
        super(name, address, occupied);
        this.#bedrooms = bedrooms;
    }

    get bedrooms() {
        return this.#bedrooms;
    }

    set bedrooms(bedrooms) {
        this.#bedrooms = bedrooms;
    }

    calculateRent() {
        return this.#bedrooms * 300; // Example rent calculation
    }

    toString() {
        return `${super.toString()}, Bedrooms: ${this.#bedrooms}, Rent: $${this.calculateRent()}`;
    }
}

// Student class
class Student {
    #name;
    #studentId;
    #gender;
    #residence;

    constructor(name, studentId, gender, residence = null) {
        this.#name = name;
        this.#studentId = studentId;
        this.#gender = gender;
        this.#residence = residence;
    }

    get name() {
        return this.#name;
    }

    get studentId() {
        return this.#studentId;
    }

    get gender() {
        return this.#gender;
    }

    get residence() {
        return this.#residence;
    }

    set residence(residence) {
        this.#residence = residence;
    }

    toString() {
        return `${this.#name} (ID: ${this.#studentId}, Gender: ${this.#gender}), Residence: ${this.#residence ? this.#residence.name : "None"}`;
    }
}

// MaintenanceRequest class
class MaintenanceRequest {
    static STATUS = {
        SUBMITTED: "submitted",
        IN_PROGRESS: "in progress",
        COMPLETED: "completed"
    };

    #description;
    #status;
    #student;
    #assignedEmployee;

    constructor(description, student, status = MaintenanceRequest.STATUS.SUBMITTED, assignedEmployee = null) {
        this.#description = description;
        this.#status = status;
        this.#student = student;
        this.#assignedEmployee = assignedEmployee;
    }

    get description() {
        return this.#description;
    }

    get status() {
        return this.#status;
    }

    set status(status) {
        this.#status = status;
    }

    get student() {
        return this.#student;
    }

    get assignedEmployee() {
        return this.#assignedEmployee;
    }

    set assignedEmployee(employee) {
        this.#assignedEmployee = employee;
    }

    toString() {
        return `Request: ${this.#description}, Status: ${this.#status}, Student: ${this.#student.name}, Assigned Employee: ${this.#assignedEmployee ? this.#assignedEmployee : "None"}`;
    }
}

// Example usage
const dorm1 = new DormRoom("Dorm A", "123 University St", 200);
const apartment1 = new Apartment("Apartment B", "456 College Ave", 3);

const student1 = new Student("Alice Smith", "S123456", "Female", dorm1);
dorm1.occupied = true;

const request1 = new MaintenanceRequest("Leaky faucet", student1);

console.log(dorm1.toString());
console.log(apartment1.toString());
console.log(student1.toString());
console.log(request1.toString());