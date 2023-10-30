let users=[];
let games=[];
let start=false;
let lavel = 0;
let hs = localStorage.getItem("score") || 0;

let clor=["yellow","red","purple","green"];
let h2 = document.querySelector("h2");
let h4=document.querySelector("h4");
h4.innerText=`highest score is ${hs}`;
let h3 = document.querySelector("h3");





document.addEventListener("keypress",function(){
    if(start ==false)
    {
         
         start=true;
         lavelup();

    }
    
    
});

 function lavelup(){
    users=[];
    
    lavel++;
    h2.innerText="lavel "        +lavel;

    let indx =Math.floor(Math.random()*3);
    let rndclr = clor[indx];
    let rndbtn= document.querySelector(`.${rndclr}`);
   games.push(rndclr);
    flash(rndbtn);
 }
 function flash(btn)
    {
        btn.classList.add("flash");
        setTimeout(function(){
        btn.classList.remove("flash");},250);


    }
    function g(btn)
    {
        btn.classList.add("g");
        setTimeout(function(){
        btn.classList.remove("g");},250);


    }
    
    let allbtns= document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
        

        

    }
    function btnpress()
    {

        
        

        
       
        let btn= this;
        let cl= btn.getAttribute("id");

        users.push(cl);
        
        
        g(this);
        check(users.length-1);


    }
    function check(inx){
       

        if(users[inx]==games[inx])
        {
           if(users.length==games.length)
           {
            
            setTimeout(lavelup,1000);
            
           }
           if(lavel>hs)
           {hs=lavel; 

             h3.innerText=`new highest score is${lavel}`;
             localStorage.setItem("score",lavel)
             h4.innerText=`highest score is ${hs}`;
             setTimeout(function(){
                h4.innerText=" ";
             },205);
             

           
           
            
           }


        }
        else{
            h2.innerText=`Game over your score is   ${lavel}   click any key to restart`;
            document.querySelector("body").style.backgroundColor="red";
            
            
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },250);
            reset();
            
           

            

            
            
        }
    }
    function reset()
    {
        games = 0;
        users = 0;
        lavel = 0;
        start = false;
       
    }


 