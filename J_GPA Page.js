var courseData = [
    { code: 'ASUx48', name: 'Scientific Research', hours: 2 },
    { code: 'CSE121', name: 'Introduction to Logic Design', hours: 2 },
    { code: 'CSE141', name: 'Introduction to Computer Programming', hours: 3 },
    { code: 'PHM111', name: 'Mathematics (1)', hours: 3 },
    { code: 'PHM114', name: 'Introduction to Discrete Mathematics', hours: 2 },
    { code: 'PHM122', name: 'Electricity and Magnetism', hours: 3 },
    { code: 'PHM131', name: 'Statics', hours: 3 },
    { code: 'PHM112', name: 'Mathematics (2)', hours: 3 },
    { code: 'CSE142', name: 'Introduction to Software Engineering', hours: 2 },
    { code: 'PHM141', name: 'Engineering Chemistry', hours: 3 },
    { code: 'PHM132', name: 'Dynamics', hours: 3 },
    { code: 'PHM113', name: 'Probability and Statistics', hours: 2 },
    { code: 'PHM121', name: 'Vibration and Waves', hours: 3 },
    { code: 'PHM123', name: 'Introduction to Physical Electronics', hours: 2 },
    { code: 'PHM213', name: 'Differential Equations and Numerical Analysis', hours: 3 },
    { code: 'CSE221', name: 'Logic Design and Computer Organization', hours: 4 },
    { code: 'CSE241', name: 'Object-Oriented Computer Programming', hours: 3 },
    { code: 'CSE243', name: 'Data Structures and Problem solving', hours: 3 },
    { code: 'CSE281', name: 'Introduction to Artificial Intelligence', hours: 3 },
    { code: 'CSE242', name: 'Advanced Software Engineering', hours: 3 },
    { code: 'CSE244', name: 'Database Systems Design', hours: 3 },
    { code: 'CSE245', name: 'Advanced Algorithms and Complexity', hours: 3 },
    { code: 'CSE246', name: 'Design of Operating Systems', hours: 3 },
    { code: 'CSE247', name: 'Design of Compilers', hours: 3 },
    { code: 'ECE261', name: 'Signals and Systems Fundamentals', hours: 3 },
    { code: 'CSE322', name: 'Introduction to Embedded Systems', hours: 3 },
    { code: 'CSE341', name: 'Software Testing, Validation, and Verification', hours: 2 },
    { code: 'CSE342', name: 'Agile Software Development', hours: 2 },
    { code: 'CSE343', name: 'Web Development', hours: 3 },
    { code: 'CSE361', name: 'Computer Networking', hours: 3 },
    { code: 'EPM111', name: 'Engineering Economy and Investments', hours: 2 },
    { code: 'CSE323', name: 'Advanced Embedded Systems Design', hours: 3 },
    { code: 'CSE362', name: 'Distributed Computing', hours: 3 },
    { code: 'CSE381', name: 'Image Processing', hours: 2 },
    { code: 'CSE382', name: 'Introduction to Machine learning', hours: 3 },
    { code: 'CSE392', name: 'CAIE Graduation Project (1)', hours: 1 },
    { code: 'CSE442', name: 'Mobile Applications Development', hours: 2 },
    { code: 'CSE461', name: 'Cryptography and Security', hours: 3 },
    { code: 'CSE481', name: 'Control Systems', hours: 3 },
    { code: 'ASUx31', name: 'Graduation Thesis', hours: 2 },
    { code: 'CSE493', name: 'CAIE Graduation Project (2)', hours: 2 },
    { code: 'CSE421', name: 'High-Performance Computing', hours: 3 },
    { code: 'CSE441', name: 'Design Patterns', hours: 2 },
    { code: 'CSE443', name: 'Software Product Management', hours: 2 },
    { code: 'CSE494', name: 'CAIE Graduation Project (3)', hours: 3 }
];
var Grades = [
    { GradeN: 4, GradeL:"A"},
    { GradeN: 3.7, GradeL:"A-"},
    { GradeN: 3.3, GradeL:"B+"},
    { GradeN: 3, GradeL:"B"},
    { GradeN: 2.7, GradeL:"B-"},
    { GradeN: 2.3, GradeL:"C+"},
    { GradeN: 2, GradeL:"C"},
    { GradeN: 1.7, GradeL:"C-"},
    { GradeN: 1.3, GradeL:"D+"},
    { GradeN: 1, GradeL:"D"},
    { GradeN: 0, GradeL:"F"},
];
var Hours = [];
function calc() {
    var count4 = JSON.parse(localStorage.getItem("count3"));
    var ChosenGrades = JSON.parse(localStorage.getItem("Grades")).map(Number);
    var Index3 = JSON.parse(localStorage.getItem("selectedIndexes3"));
    var sum = 0;
    var hourtotal = 0;
    var pgpa = parseFloat(JSON.parse(localStorage.getItem("Sgpa")));
    var pch = parseFloat(JSON.parse(localStorage.getItem("Shours")));
    for (var i = 0; i < count4; i++) { 
        sum += parseFloat(Hours[i]) * parseFloat(ChosenGrades[i]); 
        hourtotal += parseFloat(Hours[i]); 
    }
    var gpa1 =  sum /hourtotal;
    var gpa2 = (sum + (Number(pch) * parseFloat(pgpa))) / (hourtotal + Number(pch)); 
    var emoji = document.getElementById("emoji")
    var box = document.getElementsByClassName('print')
    if(gpa1 == 4.00){
        emoji.textContent ="New GPA";
    }
    else
    if (gpa1 >= 3.00)
        emoji.textContent ="New GPA";
    else
      if (gpa1 >= 2.00)
        emoji.textContent ="New GPA";
      else
        if (gpa1 >= 1.00)
        emoji.textContent ="New GPA";
      else
        if (gpa1 >= 0.00)
        emoji.textContent ="New GPA";
        
    var ngpa = document.getElementById('NGPA');
    ngpa.textContent = isNaN(gpa1) ? "0.00" : gpa1.toFixed(2); 
    var cgpa = document.getElementById('CGPA');
    cgpa.textContent = isNaN(gpa2) ? "0.00" : gpa2.toFixed(2); 
}

function getSelectValue() {
    var ChosenGrades = [];
    var count3 = JSON.parse(localStorage.getItem("count3"));
    for (var x = 0; x < count3; x++) {
        var y = "ddl" + x;
        var selectElement = document.getElementById(y);
        ChosenGrades[x] = Number(selectElement.value);
    }
    var OLDgpa = document.getElementById('PGPA')
    var OLDhours = document.getElementById('PCH')
    localStorage.setItem("Sgpa", JSON.stringify(OLDgpa.value));
    localStorage.setItem("Shours", JSON.stringify(OLDhours.value));
    localStorage.setItem("Grades", JSON.stringify(ChosenGrades));
    calc();
}

function populateTable() {
    var OLDgpa = document.getElementById('PGPA');
    var OLDhours = document.getElementById('PCH');
    Sgpa = JSON.parse(localStorage.getItem("Sgpa"));
    Shours = JSON.parse(localStorage.getItem("Shours"));

    if (Sgpa !== null) {
        OLDgpa.value = Sgpa;
    }
    if (Shours !== null) {
        OLDhours.value = Shours;
    }

    var count3 = 0;
    var Index3 = JSON.parse(localStorage.getItem("selectedIndexes3"));
    var tableBody = document.getElementById('table4');
    
    for (var i = 0; i < 45; i++) {
        if (i == Index3[count3]) {
            var row = tableBody.insertRow();
            row.setAttribute("id",Index3[count3])
            row.classList.add("ttr")
            var cell = row.insertCell();
            cell.textContent = courseData[i].name;
            var cell = row.insertCell();
            cell.textContent = courseData[i].hours;
            Hours[count3] = courseData[i].hours;
            var cell = row.insertCell();
            var gselect = document.createElement("SELECT");
            row.classList.add("ttr")

            var y = "ddl" + count3; 
            gselect.setAttribute("id", y);
            var selectedGrade = JSON.parse(localStorage.getItem("Grades"));

            for (var j = 0; j < Grades.length; j++) {
                var option = document.createElement("OPTION");
                option.innerHTML = Grades[j].GradeL;
                option.value = Grades[j].GradeN;
                if (Grades[j].GradeN == selectedGrade[count3])
                    option.selected = "selected"
                gselect.options.add(option);
            }
            cell.appendChild(gselect);

            var cell = row.insertCell();
            var button = document.createElement("button");
            var z = "x" + count3; 
            button.innerHTML = "Delete";
            button.addEventListener("click", function () {
                if (confirm('Are you sure to remove the course ?')) {
                    var storedArray = JSON.parse(localStorage.getItem('selectedIndexes3'));
                    var count333 = JSON.parse(localStorage.getItem('count3'));
                    var CGrades = JSON.parse(localStorage.getItem("Grades"));
                    var rowIndex = this.parentNode.parentNode.rowIndex;
                    document.getElementById("table4").deleteRow(rowIndex - 1);
                    var nDelete = Number(event.target.closest("tr").id);
                    var indexDelete = storedArray.indexOf(nDelete);
                    if (indexDelete !== -1) {
                        storedArray.splice(indexDelete, 1);
                        CGrades.splice(indexDelete, 1); // Remove grade corresponding to deleted row
                        localStorage.setItem('selectedIndexes3', JSON.stringify(storedArray));
                        localStorage.setItem('Grades', JSON.stringify(CGrades));
                    }
                    count333--;
                    localStorage.setItem("count3", count333);
                    calc();
                }
            });
            button.setAttribute("id", "red");
            cell.appendChild(button);
            count3++;
        }
    }
    getSelectValue();
}
window.onload = function () {
    populateTable();
    document.querySelector('#table4').addEventListener('change', getSelectValue);
};








