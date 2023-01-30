const box = document.querySelector(".box");
const btn = document.querySelector(".btn");
const play = document.querySelector(".play");
const output = document.querySelector("#output");
const enter = document.querySelector("#enter");
let count =0;
let ans;


const randomnumber = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min);
}


btn.addEventListener(
    "click",
    function(){
      
        count = 0;
        output.innerHTML = "start guessing";
          ans= randomnumber(1,100);
        console.log(ans);
    }
)

const endgame = ()=>{
   
}


enter.addEventListener(
    "click",
   
    function(){
        const input = document.querySelector("input");
       count++;
       console.log(count);
       
       const a = input.value;
      
        console.log(a);
            if(a>ans+10){
            
                output.innerHTML = "guess  lower"
            }
            else if(a>ans && a<ans+10){
                output.innerHTML= "guess a little lower"
            }
            else if(a<ans && a>ans-10){
                output.innerHTML= "guess a little higher"
            }
            else if(a<ans-10){
                output.innerHTML = "guess higher"
            }
            else if(a == ans){
                
                box.innerHTML=

                `
                <h2>Adbhut</h2>
                <h4>${"your score is"+" "+(((100-count)/100))*100}</h4>
                `
            }
             
      
        
    }
)


