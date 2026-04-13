let employees = [];

// Add Employee
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;

    let employee = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };

    employees.push(employee);
    alert("Employee Added!");

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}

// Display All Employees
function displayEmployees() {
    let output = "";

    for (let emp of employees) {
        output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}, Dept: ${emp.department} <br>`;
    }

    document.getElementById("output").innerHTML = output;
}

// Filter Salary > 50000
function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "";
    filtered.forEach(emp => {
        output += `Name: ${emp.name}, Salary: ${emp.salary} <br>`;
    });

    document.getElementById("output").innerHTML = output;
}

// Total Salary
function totalSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML = "Total Salary: ₹" + total;
}

// Average Salary
function averageSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    let avg = employees.length > 0 ? total / employees.length : 0;

    document.getElementById("output").innerHTML = "Average Salary: ₹" + avg;
}

// Count by Department
function countDepartment() {
    let dept = prompt("Enter Department:");
    let count = 0;

    for (let emp of employees) {
        if (emp.department.toLowerCase() === dept.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("output").innerHTML = `Employees in ${dept}: ${count}`;
}