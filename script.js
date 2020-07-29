//Id using in html id="submit"  id='randomGenerate'  id="random-input" id="calculate-input" id="single-item-delete"  id="clear"
//class using in html class="generate-btn" class="button"

let isMatchNumber;
let isMatchcal;
document.getElementById('randomGenerate').addEventListener('click', function(){
     let numberRandom=Math.floor(1000 + Math.random() * 9000);
     isMatchNumber=numberRandom;
     document.getElementById('random-input').value= isMatchNumber;

     chackPin(); 

 })

function calculatorNum(){
    var calculateBtn=document.getElementsByClassName('button');
   for (let i = 0; i < calculateBtn.length; i++) {
   calculateBtn[i].addEventListener('click', function(){
   let outputCalculateNum= document.getElementById('calculate-input');
   isMatchcal=outputCalculateNum;
   isMatchcal.value = isMatchcal.value + this.innerText;
   chackPin(); 
})
 }
 
}

calculatorNum();

function chackPin(){
 document.getElementById('submit').addEventListener('click', function(){
       
        if(isMatchcal.value == isMatchNumber){
     const activeDisplay= document.getElementById('notify-active');
     activeDisplay.style.display="block";
     const deactiveDisplay= document.getElementById('notify-deactive');
    deactiveDisplay.style.display="none";
    clickFunc(false);
} 
if(isMatchcal.value != isMatchNumber){
    const deactiveDisplay= document.getElementById('notify-deactive');
    deactiveDisplay.style.display="block";
    const activeDisplay= document.getElementById('notify-active');
    activeDisplay.style.display="none";
    clickFunc();

  } 

})


}

document.getElementById('clear').addEventListener('click', function(){
    isMatchcal.value=null;
})


document.getElementById('single-number-delete').addEventListener('click', function(){
  isMatchcal.value =  isMatchcal.value.substring(0,  isMatchcal.value.length - 1);
})

var count = 0;
function clickFunc() {
    count += 1;
   var actionLeft=document.getElementById('action-leftId');
    var click = document.getElementById('submit'); 
   
     click=count;
     actionLeft =count;
    var btn = document.getElementById('submit');


if(click >= 15) {

    btn.disabled = true;
    btn.style.backgroundColor='red';
   }else if(click  >= 3 ){
    document.getElementById('action-leftId').innerHTML=2;
   
    } if(click >= 6){
        document.getElementById('action-leftId').innerHTML=1; 
    }if(click >= 12){
        document.getElementById('action-leftId').innerHTML=0;
    }
}

   

