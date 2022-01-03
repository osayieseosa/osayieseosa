function check(){
day = document.querySelector("#day").value,
 month = document.querySelector("#month").value,
year = document.querySelector("#year").value
;
   if(month == 3 && day >= 21 || month == 4 && day <= 19){
    document.querySelector('.cnt').style.display = "block";
   }else{
document.querySelector('.cnt').style.display = "none";
   }
if(month == 1 && day >= 20 || month == 2 && day <= 18){
    document.querySelector('.cnt1').style.display = "block";
   }else{
document.querySelector('.cnt1').style.display = "none";
   }
if(month == 5 && day >= 21 || month == 6 && day <= 30){
    document.querySelector('.cnt3').style.display = "block";
   }else{
document.querySelector('.cnt3').style.display = "none";
   }
if(month == 12 && day >= 22 || month == 1 && day <= 19){
    document.querySelector('.cnt11').style.display = "block";
   }else{
document.querySelector('.cnt11').style.display = "none";
   }
if(month == 7 && day >= 23 || month == 8 && day <= 22){
    document.querySelector('.cnt2').style.display = "block";
   }else{
document.querySelector('.cnt2').style.display = "none";
   }
if(month == 4 && day >= 20 || month == 5 && day <= 20){
    document.querySelector('.cnt6').style.display = "block";
   }else{
document.querySelector('.cnt6').style.display = "none";
   }
if(month == 6 && day >= 21 || month == 7 && day <= 22){
    document.querySelector('.cnt7').style.display = "block";
   }else{
document.querySelector('.cnt7').style.display = "none";
   }
if(month == 11 && day >= 22 || month == 12 && day <= 21){
    document.querySelector('.cnt8').style.display = "block";
   }else{
document.querySelector('.cnt8').style.display = "none";
   }
if(month == 9 && day >= 23 || month == 10 && day <= 21){
    document.querySelector('.cnt4').style.display = "block";
   }else{
document.querySelector('.cnt4').style.display = "none";
   }
if(month == 8 && day >= 23 || month == 9 && day <= 22){
    document.querySelector('.cnt5').style.display = "block";
   }else{
document.querySelector('.cnt5').style.display = "none";
   }
if(month == 2 && day >= 19 || month == 3 && day <= 20){
    document.querySelector('.cnt10').style.display = "block";
   }else{
document.querySelector('.cnt10').style.display = "none";
   }
   if(year == "" || month == "" || day == ""){
     document.querySelector(".content").style.display = "none";
document.querySelector(".errorp").innerHTML = "Please make sure all the answers required are provided ";
   }else{
document.querySelector(".content").style.display = "block";
document.querySelector(".errorp").innerHTML = "";
   }
 }