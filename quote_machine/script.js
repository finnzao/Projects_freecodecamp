const QUOTEBANK=[
    {
        quote:"Be the change that you wish to see in the world.",
        author:"Mahatma Gandhi"
    },
    {
        quote:"The future belongs to those who believe in the beauty of their dreams.",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"Don't judge each day by the harvest you reap but by the seeds that you plant. ",
        author:"Robert Louis Stevenson"
    },
    {
        quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author:"Ralph Waldo Emerson"
    },    
    {
        quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author:"Ralph Waldo Emerson"
    },    
    {
        quote:"The only impossible journey is the one you never begin.",
        author:"Tony Robbins"
    },    
    {
        quote:"Only a life lived for others is a life worthwhile.",
        author:"-Albert Einstein"
    }
    
]

//SCRIPT BELLOW
const newQuote= document.getElementById("new-quote");
const textQuote=document.getElementById("text");
const authorQuote=document.getElementById("author");
const changeBack=document.querySelectorAll(".changeBack")
const changeColor=document.querySelectorAll(".changeColor")

window.onload= init;

function init(){
    generateQuote()
    hexRandomColor()
}

newQuote.addEventListener("click",()=>{
    generateQuote(text,author)
    hexRandomColor()
})


const generateQuote=()=>{
    let sortNum= (Math.floor(Math.random()*QUOTEBANK.length))
    let text=QUOTEBANK[sortNum].quote;
    let author=QUOTEBANK[sortNum].author
    textQuote.innerHTML = text;
    authorQuote.innerText = author;
}

const hexRandomColor =()=>{
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[hexRandomColor()]
    }
    function hexRandomColor() {
        return Math.floor(Math.random() * hex.length);
    }
   
    ChangeColor(changeColor,hexColor)
    
    ChangeBackgGroundColor(changeBack,hexColor)

   
    function ChangeColor(container,color){
        for (i = 0; i < container.length; i++) {
            container[i].style.color = color;
        }
    }
    
    function ChangeBackgGroundColor(container,color){
        for (i = 0; i < container.length; i++) {
            container[i].style.backgroundColor = color;
        }
    }
}