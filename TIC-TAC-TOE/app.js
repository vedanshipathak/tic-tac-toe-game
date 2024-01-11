let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-button");
let newGameBtn=document.querySelector(".new-game");
let msgContainer=document.querySelector(".winner");
let msg=document.querySelector(".msg");
let count=0;
let turnO=true;//playerx,playery
/*storing winning patterns*/


const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];


/*whenever we click on the box there must be an action toh har ek button pr event listerner use karenge*/
boxes.forEach((box) => {
   box.addEventListener("click",()=>{
    
    if(turnO===true){// player o turn
      box.innerText='O';//used to fill the inside of the box with text
      turnO=false;//this because after o has moved the next turnn should be of x
      count=count+1;
      
    }
    else{
      box.innerText='X';
      turnO=true;
      count=count+1;
      
      
    }
    box.disabled=true;//as soon as a box is marked you cannot mark that box again so we disable that particular box
    /*to check winner*/
    checkWinner(count);
    
   });
});


const resetGame=()=>{
  turnO=true;
  enableBoxes();
  msgContainer.classList.add("hide");
  count=0;
};


const disableBoxes=()=>{
  for(let i of boxes)
  {
    i.disabled=true;
  }
}

const enableBoxes=()=>{
  for(let i of boxes)
  {
    i.disabled=false;
    i.innerText="";
  }
}




const showWinner=(winner)=>{
 
    msg.innerText=`Congratulations, Winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};



const checkWinner=(count)=>{
  let draw=true;
  for(let p of winPatterns){
   //console.log(p[0],p[1],p[2]);
   //har box ko access krna
   let v1=boxes[p[0]].innerText;//box ke ander ka text
   let v2=boxes[p[1]].innerText;
   let v3=boxes[p[2]].innerText; 
   //check whether all the boxes are filled
   if(v1!="" && v2!=""&&v3!="")
   {
    if(v1===v2 && v2===v3 ){
      console.log("winner",v1);
      
      showWinner(v1);
      return;
    }
  }
    else{
      draw=false;
    }
  }
   
    if(draw && count===9)
    {
      console.log("draw");
      msg.innerText="It's a DRAW !";
    msgContainer.classList.remove("hide");
    disableBoxes();
      
    }
  
  
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

