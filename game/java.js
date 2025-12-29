let user_score=document.querySelector(".user_score");
let computer_score=document.querySelector(".computer_score");
let choices=document.querySelectorAll(".choice");
let colour=document.querySelector(".first_result");
let difficulty=document.querySelector(".hardness");
const computer_randome=()=>{
    list=["stone_div","paper_div","sessor_div"]
    return list[Math.floor(Math.random()*3)];
}
let number1=0;
let number2=0;
const red=()=>{
    colour.style.backgroundColor="red";
    colour.innerText="You Lose";
    update_computer_score()
}
const green=()=>{
    colour.style.backgroundColor="green";
    colour.innerText="You Won";
    update_user_score()
}
const yellow=()=>{
    colour.style.backgroundColor="yellow";
    colour.innerText="Its a draw";
    colour.style.color="black";
    update_computer_score()
    update_user_score()
}
const update_user_score=()=>{
    number1+=1
    user_score.innerText=number1;
}
const update_computer_score=()=>{
    number2+=1
    computer_score.innerText=number2;
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const cl=choice.getAttribute("id");
        const computer_result=computer_randome()
        let userwin=true;
        if(cl==computer_result){
                yellow()
        }
        else{
                if(cl==="stone_div"){
                    userwin=(computer_result==="sessor_div")?true:false;
                }
                else if(cl==="paper_div"){
                    userwin=(computer_result==="stone_div")?true:false;
                }
                else{
                    userwin=(computer_result==="paper_div")?true:false;
                }
            if(userwin){
                green()
            }
            else{
                red()
            }
        }      
    });
});