var questions = [
    {
        prompt: "Inside which HTML element do we put the Javascript tag?\n(a) <scripting>\n(b) <script>\n(c) <js>\n(d) <javascript>",
        answer: "b"
    },
    {
        prompt: "How do you write a function in JavaScript?\n(a) function = myFunction()\n(b) function:myFunction()\n(c) function myFunction()",
        answer: "c"
    },
    {
        prompt: "How do you write an IF statement in JavaScript?\n(a) if i = 5 then\n(b) if i ==5 then\n(c) if i = 5\n(d) if (i == 5),
        answer: "d"
    },
    {
        prompt: "How does a WHILE loop start?\n(a) while (i<= 10; i++)\n(b) while i = 1 to 10\n(c) while (i<= 10)",
        amswer: "c"
    },
    {
        prompt: "How can you add a comment in JavaScript?\n(a) <!--This is a comment-->\n(b) This is a comment\(c) //This is a comment",
        answer: "c"
    },
    {
        prompt:  "How do you round the number 7.25 to the nearest integer?\n(a) md(7.25)\n(b) round(7.25)\n(c) Math.rnd(7.25)\n(d) Math.round(7.25)",
        answer: "d"
    },
    {
        prompt: "JavaScript is the same as Java\n(a) True\n(b) False",
        answer: "b"
    },
    {
        prompt: "Which event occurs when the user clicks on an HTML element?\n(a) onmouseclick\n(b) onclick\n(c) onchange\n(d) onmouseover",
        answer: "b"
    },
    {
        prompt: "What will the following code return: Boolean(10 > 9)\n(a) True\n(b) NaN\n(c) False",
        answer: "a"
    },
    {
        prompt: "How does a FOR loop start?\n(a) for (i = 0; i <=5; i++)\n(b) for i = 1 to 5\n(c) for (i <= 5; i++)\n(d) for (i = 0; i <= 5)", 
        answer: "a"
    },
];
var score = 0;
//loops through the array of questions
for(var i=0; i < questions.length; i++) {
    var response = prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++
        alert("Correct!");
    }   else {
        alert(Wrong!);
    }
}
alert("You got " + score + "/" + questions.length);