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
} 
if(isMatchcal.value != isMatchNumber){
    const deactiveDisplay= document.getElementById('notify-deactive');
    deactiveDisplay.style.display="block";
    const activeDisplay= document.getElementById('notify-active');
    activeDisplay.style.display="none";
    let actionleft=[0,2,3,4];
    // let checkString='sorry',
   for (let i = 0; i <actionleft.length; i++) {
        var actionRemaing = actionleft[i];
        if(actionRemaing ==1){
            actionRemaing=document.getElementById('action-leftId').innerHTML="2 try left";
            console.log(actionRemaing);
        }
        if(actionRemaing ==2){
           document.getElementById('action-leftId').innerText="1 try left";
           console.log(actionRemaing);
        }if(actionRemaing==3){
            document.getElementById('action-leftId').innerHTML="0 try left";
            document.getElementById('submit').style.innerHTML='disabled';
            console.log(actionRemaing);
        }
    }
   
    
} 

})
}

document.getElementById('clear').addEventListener('click', function(){
    isMatchcal.value=null;
})


document.getElementById('single-number-delete').addEventListener('click', function(){
  isMatchcal.value =  isMatchcal.value.substring(0,  isMatchcal.value.length - 1);
})
