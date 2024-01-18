var scheme;
var c=0;
var price=0;
document.querySelector(".next_step").addEventListener("click",selectStep);
check=false;
function selectStep(){
    ch=0;
    for(let i=0;i<3;i++){
        
            document.querySelectorAll(".warning")[i].style.visibility = "hidden";
            document.querySelectorAll("input")[i].style.borderColor = "hsl(229, 24%, 87%)";
        }
    for(let i=0;i<3;i++){
        if(c==0){
        if(document.querySelectorAll("input")[i].value==""){
            document.querySelectorAll(".warning")[i].style.visibility = "visible";
            document.querySelectorAll("input")[i].style.borderColor = "hsl(354, 84%, 57%)";
            ch+=1;
        }}
    }
    if(ch==0){
            check=true;
        }
    if(check){
        c+=1;
        
        if(c==1){
        document.querySelectorAll(".stepnum")[0].classList.remove("currentStep");
        document.querySelectorAll(".stepnum")[1].classList.add("currentStep");
        document.querySelector("h1").innerHTML="Select your plan";
        document.querySelector(".afterH1").innerHTML="You have the option of monthly or yearly billing";
        document.querySelector(".formBar").style.visibility = "hidden";
        document.querySelector(".cards").style.visibility = "visible";
        document.querySelector(".cards").style.position = "static";
        document.querySelector(".toggle").style.visibility = "visible";
        document.querySelector(".toggle").style.position = "static";
        document.querySelector(".formBar").style.position = "absolute";
        document.querySelector(".m").style.visibility="visible"
        document.querySelector(".addons").style.visibility = "hidden";
        document.querySelector(".m").style.position = "fixed";
        check=false; 
        }
    if(c==2){
        document.querySelectorAll(".stepnum")[1].classList.remove("currentStep");
        document.querySelectorAll(".stepnum")[2].classList.add("currentStep");
        document.querySelector("h1").innerHTML="Pick add-ons";
        document.querySelector(".afterH1").innerHTML="Add-ons help enhancing your gaming experience";
        document.querySelector(".toggle").style.visibility = "hidden";
        document.querySelector(".toggle").style.position = "absolute";
        document.querySelector(".cards").style.visibility = "hidden";
        document.querySelector(".cards").style.position = "absolute";
        document.querySelector(".addons").style.position = "static";
        document.querySelector(".addons").style.visibility = "visible";
        document.querySelector(".summary").style.visibility = "hidden";
        if(scheme=="Yearly"){
          document.querySelectorAll(".q")[0].innerHTML="+$10/yr";
          document.querySelectorAll(".q")[1].innerHTML="+$20/yr";
          document.querySelectorAll(".q")[2].innerHTML="+$20/yr";
        }
        else{
            document.querySelectorAll(".q")[0].innerHTML="+$1/mo";
          document.querySelectorAll(".q")[1].innerHTML="+$2/mo";
          document.querySelectorAll(".q")[2].innerHTML="+$2/mo";

        }
        check=false;    
    }
    if(c==3){
        document.querySelectorAll(".stepnum")[2].classList.remove("currentStep");
        document.querySelectorAll(".stepnum")[3].classList.add("currentStep");
        document.querySelector("h1").innerHTML="Finishing up";
        document.querySelector(".afterH1").innerHTML="Double-check everything looks OK before confirming.";
        document.querySelector(".summary").style.visibility = "visible";
        document.querySelector(".summary").style.position = "static";
        document.querySelector(".addons").style.position = "absolute";
        document.querySelector(".addons").style.visibility = "hidden";
        document.querySelector(".next_step").style.backgroundColor="hsl(243, 100%, 62%)";
        document.querySelector(".next_step").innerHTML="Confirm";
        const checkBox1 = document.querySelectorAll(".checkbox")[0];
        const checkBox2 = document.querySelectorAll(".checkbox")[1];
        const checkBox3 = document.querySelectorAll(".checkbox")[2];
         if (checkBox1.checked==true){
            document.querySelector(".one").style.visibility="visible";
          document.querySelector(".one").style.position="static";
          price=price+1;
          
       }
    
     if (checkBox2.checked==true){
        document.querySelector(".two").style.visibility="visible";
        document.querySelector(".two").style.position="static";
        price=price+2;
          
      }
     if (checkBox3.checked==true){
        document.querySelector(".three").style.visibility="visible";
        document.querySelector(".three").style.position="static"; 
        price=price+2;
    }

      
      
      if (checkBox1.checked==false){
       

          document.querySelector(".one").style.visibility="hidden";
          document.querySelector(".one").style.position="absolute";
          
      }
      
      if (checkBox2.checked==false){
        

          document.querySelector(".two").style.visibility="hidden";
          document.querySelector(".two").style.position="absolute";
      }
      
      if (checkBox3.checked==false){
        

          document.querySelector(".three").style.visibility="hidden";
          document.querySelector(".three").style.position="absolute";
      }  
   
    
        
      if(scheme=="Monthly") 
      { document.querySelectorAll(".pricetype")[1].innerHTML="+$1/mo";
      document.querySelectorAll(".pricetype")[2].innerHTML="+$2/mo";
      document.querySelectorAll(".pricetype")[3].innerHTML="+$2/mo";
        if(car==1)
        {document.querySelectorAll(".pricetype")[0].innerHTML="$9/mo";}
        else if(car==2){
          document.querySelectorAll(".pricetype")[0].innerHTML="$12/mo";
        }
        else{
          document.querySelectorAll(".pricetype")[0].innerHTML="$15/mo";}
        
        document.querySelector(".total").innerHTML="Total("+scheme+")";  

        document.getElementById("lemon").innerHTML="$"+price+"/mo"; 
        }
        else{
            document.querySelectorAll(".pricetype")[1].innerHTML="+$10/yr";
      document.querySelectorAll(".pricetype")[2].innerHTML="+$20/yr";
      document.querySelectorAll(".pricetype")[3].innerHTML="+$20/yr";
        if(car==1)
        {document.querySelectorAll(".pricetype")[0].innerHTML="$90/yr";}
        else if(car==2){
          document.querySelectorAll(".pricetype")[0].innerHTML="$120/yr";
        }
        else{
          document.querySelectorAll(".pricetype")[0].innerHTML="$150/yr";}




            document.querySelector(".total").innerHTML="Total("+scheme+")";  

        document.getElementById("lemon").innerHTML="$"+(price*10)+"/yr"; 

        }

      if(car==1){
          document.getElementById("type").innerHTML="Arcade("+scheme+")";
          
      }
      else if(car==2){
          document.getElementById("type").innerHTML="Advanced("+scheme+")";
          
      }
      else{
      document.getElementById("type").innerHTML="Pro("+scheme+")";
      

        }
        }

      if(c==4){
        document.querySelector(".m").style.visibility="hidden";
        document.querySelector(".next_step").style.visibility="hidden";
        document.querySelector(".summary").style.visibility = "hidden";
        document.querySelector(".summary").style.position = "absolute";
        document.querySelector(".ty").style.visibility = "visible";
        document.querySelector(".ty").style.position = "static";
        document.querySelector(".one").style.visibility="hidden";
          document.querySelector(".one").style.position="absolute";
          document.querySelector(".two").style.visibility="hidden";
          document.querySelector(".two").style.position="absolute";
          document.querySelector(".three").style.visibility="hidden";
          document.querySelector(".three").style.position="absolute";
          document.querySelector(".header").style.visibility="hidden";
          document.querySelector(".header").style.position="absolute";

        check=false;
      }
}}

// selecting card
document.querySelectorAll(".card")[0].addEventListener("click",selectCard1);
function selectCard1(){
    document.querySelectorAll(".card")[0].style.backgroundColor="hsl(243, 50%, 87%)";
    document.querySelectorAll(".card")[0].style.borderColor="hsl(243, 100%, 62%)";
    car=1;
    price=9;

    document.querySelectorAll(".card")[1].style.backgroundColor="hsl(0, 100%, 100%)";
    document.querySelectorAll(".card")[1].style.borderColor="hsl(229, 24%, 87%) ";

    document.querySelectorAll(".card")[2].style.backgroundColor="hsl(0, 100%, 100%)";
    document.querySelectorAll(".card")[2].style.borderColor="hsl(229, 24%, 87%) ";

}
document.querySelectorAll(".card")[1].addEventListener("click",selectCard2);
function selectCard2(){
    document.querySelectorAll(".card")[1].style.backgroundColor="hsl(243, 50%, 87%)";
    document.querySelectorAll(".card")[1].style.borderColor="hsl(243, 100%, 62%)";
    car=2;
    price=12;

    document.querySelectorAll(".card")[0].style.backgroundColor="hsl(0, 100%, 100%)";
    document.querySelectorAll(".card")[0].style.borderColor="hsl(229, 24%, 87%) ";

    document.querySelectorAll(".card")[2].style.backgroundColor="hsl(0, 100%, 100%)";
    document.querySelectorAll(".card")[2].style.borderColor="hsl(229, 24%, 87%) ";
}
document.querySelectorAll(".card")[2].addEventListener("click",selectCard3);
function selectCard3(){
    document.querySelectorAll(".card")[2].style.backgroundColor="hsl(243, 50%, 87%)"
    document.querySelectorAll(".card")[2].style.borderColor="hsl(243, 100%, 62%)"
    car=3;
    price=15;

    document.querySelectorAll(".card")[0].style.backgroundColor="hsl(0, 100%, 100%)";
    document.querySelectorAll(".card")[0].style.borderColor="hsl(229, 24%, 87%) ";

    document.querySelectorAll(".card")[1].style.backgroundColor="hsl(0, 100%, 100%)";
    document.querySelectorAll(".card")[1].style.borderColor="hsl(229, 24%, 87%) ";
}

function linkF(){
    document.querySelector(".m").style.visibility="hidden";
    document.querySelector(".cards").style.visibility = "hidden";
    document.querySelector(".formBar").style.visibility = "visible";
    document.querySelector(".formBar").style.position = "static";
    document.querySelector(".m").style.position = "absolute";
    document.querySelector(".toggle").style.visibility = "hidden";
    document.querySelectorAll(".stepnum")[1].classList.remove("currentStep");
    document.querySelectorAll(".stepnum")[0].classList.add("currentStep");
    document.querySelector(".summary").style.visibility = "hidden";
    document.querySelector(".summary").style.position = "absolute";
    document.querySelectorAll(".stepnum")[3].classList.remove("currentStep");
    document.querySelectorAll(".stepnum")[0].classList.add("currentStep");
    document.querySelector(".next_step").style.backgroundColor="hsl(213, 94%, 28%)";
    document.querySelector(".next_step").innerHTML="Next step";
    document.querySelector(".one").style.visibility="hidden";
    document.querySelector(".one").style.position="absolute";
    document.querySelector(".two").style.visibility="hidden";
    document.querySelector(".two").style.position="absolute";
    document.querySelector(".three").style.visibility="hidden";
    document.querySelector(".three").style.position="absolute";
  c=0;
}

// functionality for toggle button on cards
var c1=0;

scheme = "Monthly"; // Assuming you have declared scheme somewhere in your code

const para = document.createElement("p");
const node = document.createTextNode("2 months free");
para.appendChild(node);
para.classList.add("new-class");
para.style.color = "hsl(0,0%,0%)";
para.style.fontSize = "10px";

const para1 = document.createElement("p");
const node1 = document.createTextNode("2 months free");
para1.appendChild(node1);
para1.classList.add("new-class");
para1.style.color = "hsl(0,0%,0%)";
para1.style.fontSize = "10px";

const para2 = document.createElement("p");
const node2 = document.createTextNode("2 months free");
para2.appendChild(node2);
para2.classList.add("new-class");
para2.style.color = "hsl(0,0%,0%)";
para2.style.fontSize = "10px";

const element = document.querySelectorAll(".card")[0];
const element1 = document.querySelectorAll(".card")[1];
const element2 = document.querySelectorAll(".card")[2];

function toggleF(){

    c1 += 1;

    if (c1 % 2 === 0) {
      scheme = "Monthly";
      document.querySelectorAll(".price")[0].innerHTML = "$9/mo";
      document.querySelectorAll(".price")[1].innerHTML = "$12/mo";
      document.querySelectorAll(".price")[2].innerHTML = "$15/mo";
      element.removeChild(para);
      element1.removeChild(para1);
      element2.removeChild(para2);
      document.querySelector(".total").innerHTML="Total("+scheme+")";
    } else {
      scheme = "Yearly";
      document.querySelectorAll(".price")[0].innerHTML = "$90/yr";
      document.querySelectorAll(".price")[1].innerHTML = "$120/yr";
      document.querySelectorAll(".price")[2].innerHTML = "$150/yr";
  
      element.appendChild(para);
      element1.appendChild(para1);
      element2.appendChild(para2);
    }
    
    
}

// goback
function goback(){
    
    c-=1;
    if(c==0){
    
        document.querySelector(".m").style.visibility="hidden";
        document.querySelector(".cards").style.visibility = "hidden";
        document.querySelector(".formBar").style.visibility = "visible";
        document.querySelector(".formBar").style.position = "static";
        document.querySelector(".m").style.position = "absolute";
        document.querySelector(".toggle").style.visibility = "hidden";
        document.querySelectorAll(".stepnum")[1].classList.remove("currentStep");
        document.querySelectorAll(".stepnum")[0].classList.add("currentStep");

    }
    if(c==1){
        document.querySelectorAll(".stepnum")[2].classList.remove("currentStep");
        document.querySelectorAll(".stepnum")[1].classList.add("currentStep");
        document.querySelector("h1").innerHTML="Select your plan";
        document.querySelector(".afterH1").innerHTML="You have the option of monthly or yearly billing";
        document.querySelector(".formBar").style.visibility = "hidden";
        document.querySelector(".cards").style.visibility = "visible";
        document.querySelector(".cards").style.position = "static";
        document.querySelector(".toggle").style.visibility = "visible";
        document.querySelector(".toggle").style.position = "static";
        document.querySelector(".formBar").style.position = "absolute";
        document.querySelector(".m").style.visibility="visible"
        document.querySelector(".addons").style.visibility = "hidden";
        document.querySelector(".m").style.position = "fixed";
        check=false;
        
        
    }
    if(c==2){
        document.querySelectorAll(".stepnum")[3].classList.remove("currentStep");
        document.querySelectorAll(".stepnum")[2].classList.add("currentStep");
        document.querySelector("h1").innerHTML="Pick add-ons";
        document.querySelector(".afterH1").innerHTML="Add-ons help enhancing your gaming experience";
        document.querySelector(".toggle").style.visibility = "hidden";
        document.querySelector(".toggle").style.position = "absolute";
        document.querySelector(".cards").style.visibility = "hidden";
        document.querySelector(".cards").style.position = "absolute";
        
        document.querySelector(".addons").style.position = "static";
        document.querySelector(".addons").style.visibility = "visible";
        document.querySelector(".summary").style.visibility = "hidden";
        document.querySelector(".next_step").style.backgroundColor="hsl(213, 94%, 28%)";
        document.querySelector(".next_step").innerHTML="Next step";
        document.querySelector(".one").style.visibility="hidden";
        document.querySelector(".one").style.position="absolute";
        document.querySelector(".two").style.visibility="hidden";
        document.querySelector(".two").style.position="absolute";
        document.querySelector(".three").style.visibility="hidden";
        document.querySelector(".three").style.position="absolute";
        check=false;
        if(car==1){
          price=9;
        }
        else if(car==2){
          price=12;
        }
        else{
          price=15;
        }
        
    }
    if(c==3){
        document.querySelectorAll(".stepnum")[2].classList.remove("currentStep");
        document.querySelectorAll(".stepnum")[3].classList.add("currentStep");
        document.querySelector("h1").innerHTML="Finishing up";
        document.querySelector(".afterH1").innerHTML="Double-check everything looks OK before confirming.";
        document.querySelector(".summary").style.visibility = "visible";
        document.querySelector(".summary").style.position = "static";
        document.querySelector(".addons").style.position = "absolute";
        document.querySelector(".addons").style.visibility = "hidden";


}
    

}