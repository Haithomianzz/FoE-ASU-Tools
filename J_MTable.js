var courseData = [
    { name: 'Scientific Research', date: '5/20/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Introduction to Logic Design', date: '5/25/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Introduction to Computer Programming', date: '5/28/2024', time: '9:00-11:00', location: 'Hall 2' },
    { name: 'Mathematics (1)', date: '6/1/2024', time: '9:00-11:00', location: 'Hall 4' },
    { name: 'Introduction to Discrete Mathematics', date: '6/3/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Electricity and Magnetism', date: '6/6/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Statics', date: '6/9/2024', time: '12:00-2:00', location: 'Hall 4' },
    { name: 'Mathematics (2)', date: '6/12/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Introduction to Software Engineering', date: '6/16/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Engineering Chemistry', date: '6/19/2024', time: '9:00-11:00', location: 'Hall 2' },
    { name: 'Dynamics', date: '6/21/2024', time: '9:00-11:00', location: 'Hall 4' },
    { name: 'Probability and Statistics', date: '6/22/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Vibration and Waves', date: '6/23/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Introduction to Physical Electronics', date: '6/24/2024', time: '12:00-2:00', location: 'Hall 4' },
    { name: 'Differential Equations and Numerical Analysis', date: '6/25/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Logic Design and Computer Organization', date: '6/26/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Object-Oriented Computer Programming', date: '6/27/2024', time: '9:00-11:00', location: 'Hall 2' },
    { name: 'Data Structures and Problem solving', date: '6/28/2024', time: '9:00-11:00', location: 'Hall 4' },
    { name: 'Introduction to Artificial Intelligence', date: '6/29/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Advanced Software Engineering', date: '6/30/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Database Systems Design', date: '5/18/2024', time: '12:00-2:00', location: 'Hall 4' },
    { name: 'Advanced Algorithms and Complexity', date: '5/19/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Design of Operating Systems', date: '5/22/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Design of Compilers', date: '5/26/2024', time: '9:00-11:00', location: 'Hall 2' },
    { name: 'Signals and Systems Fundamentals', date: '5/30/2024', time: '9:00-11:00', location: 'Hall 4' },
    { name: 'Introduction to Embedded Systems', date: '6/2/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Software Testing, Validation, and Verification', date: '6/5/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Agile Software Development', date: '6/8/2024', time: '12:00-2:00', location: 'Hall 4' },
    { name: 'Web Development', date: '6/10/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Computer Networking', date: '6/18/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Engineering Economy and Investments', date: '5/23/2024', time: '9:00-11:00', location: 'Hall 2' },
    { name: 'Advanced Embedded Systems Design', date: '5/29/2024', time: '9:00-11:00', location: 'Hall 4' },
    { name: 'Distributed Computing', date: '6/1/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Image Processing', date: '6/2/2024-', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Introduction to Machine learning', date: '6/3/2024', time: '12:00-2:00', location: 'Hall 4' },
    { name: 'CAIE Graduation Project (1)', date: '5/24/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'Mobile Applications Development', date: '5/28/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'Cryptography and Security', date: '6/12/2024', time: '9:00-11:00', location: 'Hall 2' },
    { name: 'Control Systems', date: '5/20/2024', time: '9:00-11:00', location: 'Hall 4' },    
    { name: 'Graduation Thesis', date: '5/18/2024', time: '12:00-2:00', location: 'Hall 3' },
    { name: 'CAIE Graduation Project (2)', date: '6/17/2024', time: '9:00-11:00', location: 'Hall 1' },
    { name: 'High-Performance Computing', date: '6/15/2024', time: '12:00-2:00', location: 'Hall 4' },
    { name: 'Design Patterns', date: '6/14/2024', time: '9:00-11:00', location: 'Hall 2' },
    { name: 'Software Product Management', date: '6/10/2024', time: '12:00-2:00', location: 'Hall 2' },
    { name: 'CAIE Graduation Project (3)', date: '6/8/2024', time: '9:00-11:00', location: 'Hall 4' }
];
function populateTable() {
    var Count = localStorage.getItem("Count")
    var Codes = JSON.parse(localStorage.getItem("Count"))
    var Names = JSON.parse(localStorage.getItem("Names"))
    var Hours = JSON.parse(localStorage.getItem("Hours"))
    var tableBody = document.getElementById('tableB');
    var x = 0;
 
   for(x = 0; x < Count; x ++){
            var row = tableBody.insertRow();
            var cell = row.insertCell();
            cell.textContent = Names[x];
            var cell = row.insertCell();
            cell.textContent = Hours[x];
            var cell = row.insertCell();
            var ddlCustomers = document.createElement("SELECT");
            cell.appendChild(ddlCustomers)
            var option = 0
            for (var i = 0; i < Grades.length; i++) {
                var option = document.createElement("OPTION");
            
                option.innerHTML = Grades[i].GradeL;
                option.value = Grades[i].GradeN ;
                ddlCustomers.options.add(option);
            }
            var cell = row.insertCell();
            var button = document.createElement("button");
            button.innerHTML = "Delete";
            button.addEventListener("click", function deleteb() {
                if (confirm('Are you sure to remove the course ?')) {
                    document.getElementById("Index").deleteRow(row.rowIndex);
                    localStorage.removeItem(Index("myRecord"));
                }
            });
            cell.appendChild(button);
     };
}
window.onload = populateTable

// function bubbleSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len; i++) {
//         for (var j = 0; j < len - 1; j++) {
//             // Compare adjacent elements
//             if (arr[j].name.localeCompare(arr[j + 1].name) > 0) {
//                 // Swap elements if they are in the wrong order
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
