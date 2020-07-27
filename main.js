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
     var activeDisplay= document.getElementById('notify-active');
     activeDisplay.style.display="block";
} 
if(isMatchcal.value != isMatchNumber){
    var deactiveDisplay= document.getElementById('notify-deactive');
    deactiveDisplay.style.display="block";
} 
 if(isMatchcal.value != isMatchNumber){
    var activeDisplay= document.getElementById('notify-active');
    activeDisplay.style.display="none";
} 
})
}

document.getElementById('clear').addEventListener('click', function(){
    isMatchcal.value=null;
})


document.getElementById('single-number-delete').addEventListener('click', function(){
  isMatchcal.value =  isMatchcal.value.substring(0,  isMatchcal.value.length - 1);
})






// function accessClick(){
//      let accesTime=3;
//      document.getElementById('submit').addEventListener('click', ()=>{

//         if( accesTime== 1){
//             var ckeck= document.getElementById('action-leftId').style.innerText="2 try left";
//             console.log(ckeck);
//           }else if( accesTime == 2){
//              document.getElementById('action-leftId').style.innerText="1 try left";
//             actionId.style
//           }else if(accesTime == 3){
        
//               var lastTry= document.getElementById('submit');
//               lastTry.style.button="disabled";
//      }
//  })
// }
// accessClick()
