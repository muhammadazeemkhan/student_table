


var table = document.getElementById("chart")
var userResult = [
    {
        name: "John Doe",
        results: [
            { subject: "Math", marks: 85 },
            { subject: "English", marks: 92 },
            { subject: "Science", marks: 78 },
            // Add more subjects and marks for John Doe
        ]
    },
    {
        name: "Jane Smith",
        results: [
            { subject: "Math", marks: 90 },
            { subject: "English", marks: 88 },
            { subject: "Science", marks: 76 },
            // Add more subjects and marks for Jane Smith
        ]
    },
    {
        name: "Alice Johnson",
        results: [
            { subject: "Math", marks: 82 },
            { subject: "English", marks: 95 },
            { subject: "Science", marks: 88 },
            // Add more subjects and marks for Alice Johnson
        ]
    },
    {
        name: "Robert Davis",
        results: [
            { subject: "Math", marks: 78 },
            { subject: "English", marks: 82 },
            { subject: "Science", marks: 79 },
            // Add more subjects and marks for Robert Davis
        ]
    },
    {
        name: "Emily Wilson",
        results: [
            { subject: "Math", marks: 92 },
            { subject: "English", marks: 86 },
            { subject: "Science", marks: 94 },
            // Add more subjects and marks for Emily Wilson
        ]
    },
    {
        name: "Michael Brown",
        results: [
            { subject: "Math", marks: 87 },
            { subject: "English", marks: 90 },
            { subject: "Science", marks: 83 },
            // Add more subjects and marks for Michael Brown
        ]
    },
    {
        name: "Olivia Taylor",
        results: [
            { subject: "Math", marks: 79 },
            { subject: "English", marks: 91 },
            { subject: "Science", marks: 84 },
            // Add more subjects and marks for Olivia Taylor
        ]
    },
    {
        name: "James Anderson",
        results: [
            { subject: "Math", marks: 86 },
            { subject: "English", marks: 84 },
            { subject: "Science", marks: 90 },
            // Add more subjects and marks for James Anderson
        ]
    },
    {
        name: "Sophia Martinez",
        results: [
            { subject: "Math", marks: 93 },
            { subject: "English", marks: 79 },
            { subject: "Science", marks: 88 },
            // Add more subjects and marks for Sophia Martinez
        ]
    },
    {
        name: "Benjamin Thomas",
        results: [
            { subject: "Math", marks: 88 },
            { subject: "English", marks: 83 },
            { subject: "Science", marks: 91 },
            // Add more subjects and marks for Benjamin Thomas
        ]
    }
];

for (var i = 0; i < userResult.length; i++) {

    var result = userResult[i]

    var mathsNumber = result.results[0].marks
    var engNumber = result.results[1].marks
    var sciNumber = result.results[2].marks

    var total = mathsNumber + engNumber + sciNumber

    result.total = total

    var perc = (total / 300) * 100

    var resultRow = `<tr id = "a">
    <td>${i + 1}</td>
    <td >${result.name}</td>
    <td>${mathsNumber}</td>
    <td>${engNumber}</td>
    <td>${sciNumber}</td>
    <td>${total}</td>
    <td>${perc.toFixed(2)}</td>
</tr>`

table.innerHTML += resultRow

var a = document.getElementById("a")


        a.style.backgroundColor = "red"

        var sortedArray = userResult.sort(function (a, b) {
            return b.total - a.total
        })
        document.getElementById('first').innerText = '1st :' + sortedArray[0].name
        document.getElementById('second').innerText = '2nd :' + sortedArray[1].name
        document.getElementById('third').innerText = 'Third :' + sortedArray[2].name
        // sortedArray.name.style.backgroundColor = "red"
        
        // var first = document.getElementById('first')
        // var second = document.getElementById('second')
        // var third = document.getElementById('third')
        
        // first.style.backgroundColor = "yellow"
        // second.style.backgroundColor = "green"
        // third.style.backgroundColor = "red"

    
}


// var sortedArray = userResult.sort(function (a, b) {
//     return b.total - a.total
// })
// document.getElementById('first').innerText = '1st :' + sortedArray[0].name
// document.getElementById('second').innerText = '2nd :' + sortedArray[1].name
// document.getElementById('third').innerText = 'Third :' + sortedArray[2].name

// var first = document.getElementById('first')
// var second = document.getElementById('second')
// var third = document.getElementById('third')

// first.style.backgroundColor = "yellow"
// second.style.backgroundColor = "green"
// third.style.backgroundColor = "red"




console.log('sortedArray->', sortedArray)
