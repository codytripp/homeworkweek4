const options = document.querySelector(".options").children;
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const question = document.querySelector(".question");
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index = 0;
let myArray = [];



//questions and answers

const questions = [
    {
        q:'JavaScript is the same as Java',
        options: ['True', 'False', 'I do not know', 'I really do not know'],
        answer: 1
    },
    {
        q:'How do you write a function in JavaScript?',
        options: ['function = myFunction()', 'function:myFunction()', 'function myFunction()', 'var myFunction'],
        answer: 2
    },
    {
        q:'How do you write an IF statement in JavaScript?',
        options: ['if i = 5 then', 'if i ==5 then', 'if i = 5', 'if (i == 5)'],
        answer: 3
    },
    {
        q:'How does a WHILE loop start?',
        options: ['while (i<= 10; i++)', 'while i = 1 to 10', 'while (i<= 10)', 'var whileLoop()'],
        answer: 2
    },
    {
        q:'How do you round the number 7.25 to the nearest integer?',
        options: ['md(7.25)', 'round(7.25)', 'Math.rnd(7.25)', 'Math.round(7.25)'],
        answer: 3
    },
]
// set questions, options, and number
for (i = 0; i < questions.length; i++){
   totalQuestionSpan.innerHTML = questions.length;
}


function load(){
    questionNumberSpan.innerHTML = index + 1;
    question.innerHTML = questions[questionIndex].q;
    op1.innerHTML = questions[questionIndex].options[0];
    op2.innerHTML = questions[questionIndex].options[1];
    op3.innerHTML = questions[questionIndex].options[2];
    op4.innerHTML = questions[questionIndex].options[3];
    index++;
};

//function check(element){
   // console.log(element.id);
    //if(element.id == questions[questionIndex].answer){
       // console.log("correct")
        //element.classList.add("correct");
   // }
   // else{
       // console.log("wrong")
       // element.classList.add("wrong");
       // disabledOptions()
    //}

function disabledOptions(){
    for(let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled");
        if(options[i].id == questions[questionIndex].answer){
            options[i].classList.add("correct");
        }
    }
}

function enableOptions(){
    for(let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong");
    }
}

function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please Select an Option");
    }
    else{
        enableOptions();
        randomQuestion();
    }
}

function next(){
    validate();
}

function randomQuestion(){
    let randomNumber = Math.floor(Math.random() * questions.length);
        questionIndex = randomNumber;
        myArray.push(questionIndex);
        console.log("myArray:" + myArray)
        
        load();
};


window.onload = function(){
    randomQuestion();
};







//(function() {
    //var sec = 90;
    //function startTimer(){
       // console.log('timer suppose to go')
       // var timer = setInterval(function(){
         //   sec--;
           // document.getElementById('timerDisplay').innerHTML='00:'+sec;
           // if (sec < 0) {
             //  clearInterval(timer);
            //    alert("Time is up!")
          // }
       // }, 1000);
    //}
// document.getElementById('incorrect').addEventListener('click', function() {
       // sec -= 10;
      //  document.getElementById('timerDisplay').innerHTML='00:'+sec;
   // });
  //  startTimer();
