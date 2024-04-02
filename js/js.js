const inputs = document.querySelectorAll('input');

for( let i = 0 ; i<inputs.length ; i++){
   let input = inputs[i];

   let btn = input.nextElementSibling;

   btn.addEventListener('click',()=>{
    input.select();
    document.execCommand('copy')

   })
   
}


