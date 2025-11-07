let inputage = document.getElementById("age");
let male = document.getElementById("male")
let female = document.getElementById("female");
let numberh = document.getElementById("numberh");
let numberw = document.getElementById("numberw");
let result= document.querySelector(".result")
let comment= document.querySelector(".comment")
let modelcontent = document.getElementById("content")
let modeltext = document.getElementById("model-text")
let textclose = document.getElementById("text-close");
   function closebtn(){ 
      modelcontent.style.opacity = "0";   
   }
function calculatebmi(){
   if(inputage.value===""||male.checked===false&&female.checked===false||numberh.value===""||numberw.value==="")
   {
      modelcontent.style.opacity = "1"
      modelcontent.style.pointerEvents = "auto"; 
      modeltext.textContent = "Please fill All the details"     
   }
   else{
       countbmi()
   }
}

function  countbmi(){
   let p = [inputage.value,numberh.value,numberw.value];
   console.log(p)
   if(male.checked){
      p.push("male")
   }
   else if(female.checked){
      p.push("female")
   }
   let bmi =  Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
     var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }
     document.querySelector("#result").innerHTML = bmi.toFixed(2);
     document.querySelector(".comment").innerHTML = `You are ${result}` 
       inputage.value = "";
  numberh.value = "";
  numberw.value = "";
  male.checked = false;
  female.checked = false;
   modelcontent.style.opacity = "0";
  modelcontent.style.pointerEvents = "none";

}
