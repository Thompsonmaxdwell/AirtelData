
let boxContainer = document.querySelector('#box-modal');
let outSide = window;
function myfun(){
    boxContainer.style.display ='block';
}
 setTimeout(myfun, 2000);


// var read_btn = document.getElementById('Read-more"')
// var aboutContent= document.querySelector(".about-content");

// read_btn.addEventListener('click', function(){
//       if(aboutContent.className == ' close'){
//           aboutContent.className = ' open'
//           read_btn.innerHTML = ' Read Less';
//       }else{
//           aboutContent.className = ' close'
//           read_btn.innerHTML = ' Read More';
//       }
// });


let input_1 = document.querySelector('#myInput1');
let input_2 = document.querySelector('#myInput2');
let submit_btn = document.querySelector('#submit');
let myForm = document.querySelector("form");
myForm.addEventListener('click', function(e){
  e.preventDefault()
})

    submit_btn.addEventListener("click", function(){
        var keys = input_1.value;
        var values = input_2.value;
        localStorage.setItem(keys, values);
       

        submit_btn.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        if(keys == '' || values == ""){
            alert('The Field Text Cannot be blank ');
            submit_btn.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
            submit_btn.parentElement.parentElement.parentElement.style.animation = 'unset'
            return false
            
        }else{
          alert('Thanks for Submiting Data')
          submit_btn.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
            return true;
            
        }
       
      });
      
     
      
    









