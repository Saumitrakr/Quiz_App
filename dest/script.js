const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris",
        answered: "false"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        answered: "false"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
        answered: "false"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee",
        answered: "false"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Pb"],
        correctAnswer: "Au",
        answered: "false"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        answered: "false"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
        answered: "false"
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        correctAnswer: "Canberra",
        answered: "false"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter",
        answered: "false"
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        correctAnswer: "Charles Babbage",
        answered: "false"
    }
];

const quizbox = document.querySelector(".quizbox")
const quest = document.querySelector(".quest")
const choices = document.querySelector(".options")
const nextbtn = document.querySelector(".nextbtn")
const prevbtn = document.querySelector(".prevbtn")

let currQuestIndex = 0
let score = 0
showQuest()



nextbtn.addEventListener("click",()=>{
    currQuestIndex++
    choices.innerHTML=""
    if(currQuestIndex > 0){
        prevbtn.classList.remove("hidden")
    }
    if(currQuestIndex == quizQuestions.length - 1){
        nextbtn.classList.add("hidden")
    }
    showQuest()
})

prevbtn.addEventListener("click",()=>{
    currQuestIndex--;
    choices.innerHTML=""
    if(currQuestIndex == 0){
        prevbtn.classList.add("hidden")
    }
    showQuest()
    
})

function showCorrectAns(){
    console.log("yahan tk thik h")
    quizQuestions[currQuestIndex].options.forEach((opt)=>{
        console.log(opt)
        if(opt == quizQuestions[currQuestIndex].correctAnswer){
            btn.classList.remove("bg-slate-600")
            btn.classList.add("bg-green-400")
            btn.classList.remove("text-white")
            btn.classList.add("text-black")
            btn.classList.add("font-semibold")
        }
    })
}

function showQuest(){
    quest.innerHTML = (currQuestIndex + 1) + ". " + quizQuestions[currQuestIndex].question
    quizQuestions[currQuestIndex].options.forEach((opt)=>{
        let btn = document.createElement("button")
        btn.innerHTML = opt
        btn.classList.add("bg-slate-600","p-2","border-white-400","text-white","border-2","m-1")   
        choices.append(btn)

        if(currQuestIndex != 0){
            prevbtn.classList.remove("hidden")
        }

        btn.addEventListener("click",()=>{
            
            quizQuestions[currQuestIndex].markedOption = btn.textContent
            quizQuestions[currQuestIndex].answered = "true"

            if(btn.textContent == quizQuestions[currQuestIndex].correctAnswer){
                score++
                btn.classList.toggle("bg-slate-600")
                btn.classList.toggle("bg-green-400")
                btn.classList.toggle("text-white")
                btn.classList.toggle("text-black")
                btn.classList.add("font-semibold")
            }
            else{
                btn.classList.toggle("bg-slate-600")
                btn.classList.toggle("bg-red-500")
                btn.classList.toggle("text-white")
                btn.classList.toggle("text-black")
                btn.classList.add("font-semibold")

                function showCorrectAns(){
                    Array.from(btn.parentElement.children).forEach((elem)=>{
                        elem.disabled = true
                        if(elem.textContent == quizQuestions[currQuestIndex].correctAnswer){
                            elem.classList.toggle("bg-slate-600")
                            elem.classList.toggle("bg-green-400")
                            elem.classList.toggle("text-white")
                            elem.classList.toggle("text-black")
                            elem.classList.add("font-semibold")
                        }
                    })
                }
                showCorrectAns()
               
            }
            setTimeout(() => {
                currQuestIndex++
                choices.innerHTML=""
                if(currQuestIndex==quizQuestions.length){
                    quizbox.innerHTML=""
                    let result = document.createElement("div")
                    let heading = document.createElement("h1")
                    heading.classList.add("text-3xl","text-orange-400")
                    heading.textContent = "Your Final Score is :"
                    let finalScore = document.createElement("h2")
                    finalScore.textContent = score
                    result.append(heading)
                    result.append(finalScore)
                    quizbox.append(result)
                }
                else{
                    showQuest()
                }

            }, 1000);
        })
    })

    if(quizQuestions[currQuestIndex].answered == "true"){
        
        Array.from(choices.children).forEach((item)=>{
            item.disabled=true
            if(quizQuestions[currQuestIndex].correctAnswer == quizQuestions[currQuestIndex].markedOption){
                if(item.textContent == quizQuestions[currQuestIndex].correctAnswer){

                    item.classList.remove("bg-slate-600")
                    item.classList.add("bg-green-400")
                    item.classList.remove("text-white")
                    item.classList.add("text-black")
                    item.classList.add("font-semibold")
                }
            }
            else{
                if(item.textContent == quizQuestions[currQuestIndex].markedOption){

                    item.classList.toggle("bg-slate-600")
                    item.classList.toggle("bg-red-500")
                    item.classList.toggle("text-white")
                    item.classList.toggle("text-black")
                    item.classList.add("font-semibold")
                }
                if(item.textContent == quizQuestions[currQuestIndex].correctAnswer){

                    item.classList.remove("bg-slate-600")
                    item.classList.add("bg-green-400")
                    item.classList.remove("text-white")
                    item.classList.add("text-black")
                    item.classList.add("font-semibold")
                }
            }
        })

    }
}


// function copyPassword(){
//     passwordbox.select();
//     document.execCommand("copy")
// }