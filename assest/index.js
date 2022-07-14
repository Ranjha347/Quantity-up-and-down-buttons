
let inc = document.getElementsByClassName('inc');
let dec = document.querySelectorAll('.dec');



for(let i = 0;i < inc.length;i++){
   let btns = inc[i];
   btns.addEventListener('click',(e)=>{
      let btnClicked = e.target;
      let input = btnClicked.parentElement.children[1];
      let inputValue = input.value;
      let newValue = parseInt(inputValue) + 1;
      input.value = newValue;
      
     
   })
}



    
    dec.forEach(key =>key.addEventListener('click', (e)=>{
      let btnClicked  = e.target;
      let input = btnClicked.parentElement.children[1];
      let inputValue = input.value;
      let newValue = parseInt(inputValue) -1;
      if(newValue >= 0){
         input.value = newValue
      }else{
         input.value = 0;
      }
    } ));