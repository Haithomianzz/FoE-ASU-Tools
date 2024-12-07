var courseData = [
    { code: 'ASUx48', name: 'Scientific Research', hours: 2, date: '5/18/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE121', name: 'Introduction to Logic Design', hours: 2, date: '5/19/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'CSE141', name: 'Introduction to Computer Programming', hours: 3, date: '5/20/2024', time: '9:00-11:00', location: 'Hall 2' },
    { code: 'PHM111', name: 'Mathematics (1)', hours: 3, date: '5/21/2024', time: '9:00-11:00', location: 'Hall 4' },
    { code: 'PHM114', name: 'Introduction to Discrete Mathematics', hours: 2, date: '5/22/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'PHM122', name: 'Electricity and Magnetism', hours: 3, date: '5/23/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'PHM131', name: 'Statics', hours: 3, date: '5/24/2024', time: '12:00-2:00', location: 'Hall 4' },
    { code: 'PHM112', name: 'Mathematics (2)', hours: 3, date: '5/25/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE142', name: 'Introduction to Software Engineering', hours: 2, date: '5/26/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'PHM141', name: 'Engineering Chemistry', hours: 3, date: '5/27/2024', time: '9:00-11:00', location: 'Hall 2' },
    { code: 'PHM132', name: 'Dynamics', hours: 3, date: '5/28/2024', time: '9:00-11:00', location: 'Hall 4' },
    { code: 'PHM113', name: 'Probability and Statistics', hours: 2, date: '5/29/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'PHM121', name: 'Vibration and Waves', hours: 3, date: '5/30/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'PHM123', name: 'Introduction to Physical Electronics', hours: 2, date: '5/31/2024', time: '12:00-2:00', location: 'Hall 4' },
    { code: 'PHM213', name: 'Differential Equations and Numerical Analysis', hours: 3, date: '6/1/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE221', name: 'Logic Design and Computer Organization', hours: 4, date: '6/2/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'CSE241', name: 'Object-Oriented Computer Programming', hours: 3, date: '6/3/2024', time: '9:00-11:00', location: 'Hall 2' },
    { code: 'CSE243', name: 'Data Structures and Problem solving', hours: 3, date: '6/4/2024', time: '9:00-11:00', location: 'Hall 4' },
    { code: 'CSE281', name: 'Introduction to Artificial Intelligence', hours: 3, date: '6/5/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'CSE242', name: 'Advanced Software Engineering', hours: 3, date: '6/6/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE244', name: 'Database Systems Design', hours: 3, date: '6/7/2024', time: '12:00-2:00', location: 'Hall 4' },
    { code: 'CSE245', name: 'Advanced Algorithms and Complexity', hours: 3, date: '6/8/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE246', name: 'Design of Operating Systems', hours: 3, date: '6/9/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'CSE247', name: 'Design of Compilers', hours: 3, date: '6/10/2024', time: '9:00-11:00', location: 'Hall 2' },
    { code: 'ECE261', name: 'Signals and Systems Fundamentals', hours: 3, date: '6/11/2024', time: '9:00-11:00', location: 'Hall 4' },
    { code: 'CSE322', name: 'Introduction to Embedded Systems', hours: 3, date: '6/12/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'CSE341', name: 'Software Testing, Validation, and Verification', hours: 2, date: '6/13/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE342', name: 'Agile Software Development', hours: 2, date: '6/14/2024', time: '12:00-2:00', location: 'Hall 4' },
    { code: 'CSE343', name: 'Web Development', hours: 3, date: '6/15/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE361', name: 'Computer Networking', hours: 3, date: '6/16/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'EPM111', name: 'Engineering Economy and Investments', hours: 2, date: '6/17/2024', time: '9:00-11:00', location: 'Hall 2' },
    { code: 'CSE323', name: 'Advanced Embedded Systems Design', hours: 3, date: '6/18/2024', time: '9:00-11:00', location: 'Hall 4' },
    { code: 'CSE362', name: 'Distributed Computing', hours: 3, date: '6/19/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'CSE381', name: 'Image Processing', hours: 2, date: '6/20/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE382', name: 'Introduction to Machine learning', hours: 3, date: '6/21/2024', time: '12:00-2:00', location: 'Hall 4' },
    { code: 'CSE392', name: 'CAIE Graduation Project (1)', hours: 1, date: '6/22/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE442', name: 'Mobile Applications Development', hours: 2, date: '6/23/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'CSE461', name: 'Cryptography and Security', hours: 3, date: '6/24/2024', time: '9:00-11:00', location: 'Hall 2' },
    { code: 'CSE481', name: 'Control Systems', hours: 3, date: '6/25/2024', time: '9:00-11:00', location: 'Hall 4' },
    { code: 'ASUx31', name: 'Graduation Thesis', hours: 2, date: '6/26/2024', time: '12:00-2:00', location: 'Hall 3' },
    { code: 'CSE493', name: 'CAIE Graduation Project (2)', hours: 2, date: '6/27/2024', time: '9:00-11:00', location: 'Hall 1' },
    { code: 'CSE421', name: 'High-Performance Computing', hours: 3, date: '6/28/2024', time: '12:00-2:00', location: 'Hall 4' },
    { code: 'CSE441', name: 'Design Patterns', hours: 2, date: '6/29/2024', time: '9:00-11:00', location: 'Hall 2' },
    { code: 'CSE443', name: 'Software Product Management', hours: 2, date: '6/30/2024', time: '12:00-2:00', location: 'Hall 2' },
    { code: 'CSE494', name: 'CAIE Graduation Project (3)', hours: 3, date: '7/1/2024', time: '9:00-11:00', location: 'Hall 4' }
];
function clears() {
    var clearButton = document.getElementById("cl");
    clearButton.addEventListener("click", function() {
        checkboxContainer.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
            checkbox.checked = false;
        });
    });
    localStorage.removeItem("selectedIndexes2");
    populateTable()
}
function loadSelection() {
    var storedIndexes2 = localStorage.getItem("selectedIndexes2");
    return storedIndexes2 ? JSON.parse(storedIndexes2) : [];
}
function getCheckedRecord() {
    var count2 =0
    var table = document.getElementById('table2');
    var selectedIndexes2 = [];
    for (var i = 0; i < table.rows.length; i++) {
        var checkbox = table.rows[i].cells[0].querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            selectedIndexes2.push(i);
            count2++
        }
    }
    localStorage.setItem("count2", JSON.stringify(count2));
    localStorage.setItem("selectedIndexes2", JSON.stringify(selectedIndexes2));
}
function populateTable() {
    var tableBody = document.getElementById('table2');
    tableBody.innerHTML = "";
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    var selectedIndexes2 = loadSelection();
    courseData.forEach(function(course, index2) {
        var row = tableBody.insertRow();
        row.addEventListener('click', function() {
            checkbox.checked = !checkbox.checked;
            getCheckedRecord();
        });
        var checkboxCell = row.insertCell();
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        if (selectedIndexes2.includes(index2)) {
            checkbox.checked = true;
        }
        checkbox.addEventListener('click', function() {
            checkbox.checked = !checkbox.checked;
            getCheckedRecord();
        });
        checkboxCell.appendChild(checkbox);
        var cell = row.insertCell();
        cell.textContent = course[Object.keys(course)[0]];
        var cell = row.insertCell();
        cell.textContent = course[Object.keys(course)[1]];
        cell.classList.add("filter")
        var cell = row.insertCell();
        cell.textContent = course[Object.keys(course)[2]];
    });
}
window.onload = function() {
    populateTable();
    document.querySelector('#table2').addEventListener('change', getCheckedRecord);
};
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("table2");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2]; // Select the cell containing the course name (index 1)
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}