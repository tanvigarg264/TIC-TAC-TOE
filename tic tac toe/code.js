let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelectorAll("#reset-btn");
let newGamebtn=document.querySelectorAll("#new-btn");
let msgContainer=document.querySelectorAll(".msg-container");
let msg=document.querySelectorAll("#msg")[0];
let turn0=true;
const winningpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const reset=()=>{
    turn0=true;
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
    msgContainer[0].classList.add("hide");

};
newGamebtn.forEach(btn => btn.addEventListener("click", reset));
resetbtn.forEach(btn => btn.addEventListener("click", reset));
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("hello");
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const showWinner=(p1)=>{
    msg.innerText=`CONGRATULATIONS, WINNER IS ${p1}`;
    msgContainer[0].classList.remove("hide");
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const checkwinner=()=>{
    for(let pattern of winningpatterns)
    {
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!="" && p1===p2 && p2===p3)
        {
            console.log("yayy",p1);
            showWinner(p1);
        }
    }
};
