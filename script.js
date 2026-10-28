let GuessNum=document.getElementById("num");
let massage=document.getElementById("massage")
let form = document.getElementById("guessForm");


let randNum = Math.floor(Math.random() * 100) + 1;

form.addEventListener("submit",function(event)
{
    event.preventDefault();
    let guess = Number(GuessNum.value);
    if(guess>randNum)
       { 
        massage.textContent="The number is large."
       }
    else if(guess<randNum)
    {
        massage.textContent="The number is small."
    }
    else
    {
        massage.textContent="You're right! That's the number."

    }
})
