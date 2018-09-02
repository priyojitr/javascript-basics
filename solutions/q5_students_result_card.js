// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


let students = [];
let studentName;
let studentSubject;
let studentGrammerMarks;
let studentAccountsMarks;
let studentPhysicsMarks;
let studentMarks;
let studentPercentage;
for(let i = 1; i <= 100; i = i + 1)
{
    studentAccountsMarks = 0;
    studentGrammerMarks = 0;
    studentPhysicsMarks = 0;
    studentSubject = 'Grammer';
    studentName = 'name' + i;
    if(i <= 50)
    {
        studentSubject = studentSubject + ',Physics';
    }
    else
    {
        studentSubject = studentSubject + ',Accounts';
    }
    if(studentSubject.includes('Accounts'))
    {
        studentGrammerMarks = Math.floor(Math.random() * 100) + 1;
        studentAccountsMarks = Math.floor(Math.random() * 100) + 1;
        studentMarks = studentGrammerMarks + ', ' + studentAccountsMarks;
        studentPercentage = (studentAccountsMarks + studentGrammerMarks) / 2;
    }
    else
    {
        studentGrammerMarks = Math.floor(Math.random() * 100) + 1;
        studentPhysicsMarks = Math.floor(Math.random() * 100) + 1;
        studentMarks = studentGrammerMarks + ', ' + studentPhysicsMarks;
        studentPercentage = (studentPhysicsMarks + studentGrammerMarks) / 2;
    }
    let reportObj = {
        name: studentName,
        subject: studentSubject,
        marks: studentMarks,
        percentage: studentPercentage
    };
    students.push(reportObj);
}
return students;
