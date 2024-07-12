document.addEventListener("DOMContentLoaded", () => {
    const dormForm = document.getElementById("dormForm");
    const apartmentForm = document.getElementById("apartmentForm");
    const studentForm = document.getElementById("studentForm");
    const maintenanceForm = document.getElementById("maintenanceForm");

    const residencesDiv = document.getElementById("residences");
    const studentsDiv = document.getElementById("students");
    const requestsDiv = document.getElementById("requests");

    const studentResidenceSelect = document.getElementById("studentResidence");
    const requestStudentSelect = document.getElementById("requestStudent");

    let residences = [];
    let students = [];
    let requests = [];

    dormForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("dormName").value;
        const address = document.getElementById("dormAddress").value;
        const size = document.getElementById("dormSize").value;

        const dorm = new DormRoom(name, address, size);
        residences.push(dorm);

        updateResidenceOptions();
        displayResidences();
    });

    apartmentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("apartmentName").value;
        const address = document.getElementById("apartmentAddress").value;
        const bedrooms = document.getElementById("apartmentBedrooms").value;

        const apartment = new Apartment(name, address, bedrooms);
        residences.push(apartment);

        updateResidenceOptions();
        displayResidences();
    });

    studentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("studentName").value;
        const studentId = document.getElementById("studentId").value;
        const gender = document.getElementById("studentGender").value;
        const residenceIndex = document.getElementById("studentResidence").value;

        const student = new Student(name, studentId, gender, residences[residenceIndex]);
        residences[residenceIndex].occupied = true;
        students.push(student);

        updateStudentOptions();
        displayStudents();
        displayResidences();
    });

    maintenanceForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const description = document.getElementById("requestDescription").value;
        const studentIndex = document.getElementById("requestStudent").value;

        const request = new MaintenanceRequest(description, students[studentIndex]);
        requests.push(request);

        displayRequests();
    });

    function updateResidenceOptions() {
        studentResidenceSelect.innerHTML = "";
        residences.forEach((residence, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = residence.name;
            studentResidenceSelect.appendChild(option);
        });
    }

    function updateStudentOptions() {
        requestStudentSelect.innerHTML = "";
        students.forEach((student, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = student.name;
            requestStudentSelect.appendChild(option);
        });
    }

    function displayResidences() {
        residencesDiv.innerHTML = residences.map((res, index) => `
            <div class="record-item">
                ${res.toString()} 
                <button onclick="editResidence(${index})">Edit</button> 
                <button onclick="deleteResidence(${index})">Delete</button>
            </div>
        `).join("");
    }

    function displayStudents() {
        studentsDiv.innerHTML = students.map((student, index) => `
            <div class="record-item">
                ${student.toString()} 
                <button onclick="editStudent(${index})">Edit</button> 
                <button onclick="deleteStudent(${index})">Delete</button>
            </div>
        `).join("");
    }

    function displayRequests() {
        requestsDiv.innerHTML = requests.map((req, index) => `
            <div class="record-item">
                ${req.toString()} 
                <button onclick="editRequest(${index})">Edit</button> 
                <button onclick="deleteRequest(${index})">Delete</button>
            </div>
        `).join("");
    }

    window.editResidence = function(index) {
        const residence = residences[index];
        const name = prompt("Edit Residence Name:", residence.name);
        const address = prompt("Edit Address:", residence.address);
        if (name && address) {
            residence.name = name;
            residence.address = address;
            displayResidences();
        }
    }

    window.deleteResidence = function(index) {
        if (confirm("Are you sure you want to delete this residence?")) {
            residences.splice(index, 1);
            displayResidences();
        }
    }

    window.editStudent = function(index) {
        const student = students[index];
        const name = prompt("Edit Student Name:", student.name);
        const studentId = prompt("Edit Student ID:", student.studentId);
        if (name && studentId) {
            student.name = name;
            student.studentId = studentId;
            displayStudents();
        }
    }

    window.deleteStudent = function(index) {
        if (confirm("Are you sure you want to delete this student?")) {
            students.splice(index, 1);
            displayStudents();
        }
    }

    window.editRequest = function(index) {
        const request = requests[index];
        const description = prompt("Edit Description:", request.description);
        if (description) {
            request.description = description;
            displayRequests();
        }
    }

    window.deleteRequest = function(index) {
        if (confirm("Are you sure you want to delete this request?")) {
            requests.splice(index, 1);
            displayRequests();
        }
    }
});