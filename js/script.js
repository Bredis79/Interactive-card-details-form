/*** INPUTS ***/
let inputsCardholder = document.querySelector(".cardholder")
let inputName = document.querySelector("#name")
let inputCardNumber = document.querySelector("#cardNumber")
let inputMonth = document.querySelector("#month")
let inputYear = document.querySelector("#year")
let inputCvc = document.querySelector("#cvc")
let cardholderSent = document.querySelector(".cardholder--sent")
const continueBtn = document.querySelector(".cardholder__sent--btn")

/*** OUTPUTS ***/
let cardNumberFront = document.querySelector(".card__front h1")
let cardHolder = document.querySelector(".card__holder-info p")
let cardExp = document.querySelector("#exp")
let cardBack = document.getElementsByClassName("card__back")
let expMonth = document.querySelector("#expM")
let expYear = document.querySelector("#expY")

/*** CONFIRM BTN ***/
const btnConfirm = document.querySelector(".cardholder--submit")

/*** ERROR BLOCKS***/
let cardNumberError = document.querySelector(".cardholder--error")
let cardDateError = document.querySelector(".cardholder__date--error")
let cardCvcError = document.querySelector(".cardholder__cvc--error")

btnConfirm.addEventListener("click", function(event){
    event.preventDefault()

// write name on front side
cardHolder.textContent = event.path[1][0].value


// select card number from input
cardNumberFront.textContent = event.path[1][1].value

    // slice number on 4 parts and set each as a number
    let wholeNumber = cardNumberFront.textContent
      let number1 = Math.floor(wholeNumber.slice(0, 4))
      let number2 = Math.floor(wholeNumber.slice(4, 8))
      let number3 = Math.floor(wholeNumber.slice(8, 12))
      let number4 = Math.floor(wholeNumber.slice(12, 16))

    // connect numbers together with whitespace  
    let numberOutput = `${number1} ${number2} ${number3} ${number4}`
    
        // write number on front side of card
        if(event.path[1][1].value.length <= 0){
          cardNumberFront.textContent = `0000 0000 0000 0000`   // if input is empty
         
          // add error border  
          inputCardNumber.classList.add("inputError")
          
          // show error block
          cardNumberError.style.display = "block"
        
        } else if (event.path[1][1].value.length > 0){
        cardNumberFront.textContent = numberOutput

        // remove error border  
        inputCardNumber.classList.remove("inputError")
          
        // hide error block
        cardNumberError.style.display = "none"
      
        }
        
//get day from input and put it on the card


 if (event.path[1][2].value > 0 && event.path[1][2].value < 13 ) {
    expMonth.textContent = event.path[1][2].value 
    // remove error border
     inputMonth.classList.remove("inputError") 
     
     // hide error block
     cardDateError.style.display = "none"
     
     // when is one digit put 0 before
      if(event.path[1][2].value.length < 2){
        expMonth.textContent = `0${event.path[1][2].value}`
      }


 } else {
    cardDateError.style.display = "block"
   
    // add error border
    inputMonth.classList.add("inputError") 

    // hide error block
    cardDateError.style.display = "none"
}



// get year from input and put it on the card

if (event.path[1][3].value.length > 0 && event.path[1][3].value > 22 && event.path[1][3].value < 40) {
    expYear.textContent = event.path[1][3].value
   
    // remove error border
    inputYear.classList.remove("inputError") 
    
} else {
    cardDateError.style.display = "block"
    
    // add error border
    inputYear.classList.add("inputError") 

}
  
// get value from input and change number on back side of card
if(event.path[1][4].value.length > 0) {
    cardBack[0].textContent = event.path[1][4].value
   
    // value has to have 3 numbers
    if(event.path[1][4].value.length == 3) {

      // hide error block  
      cardCvcError.style.display = "none"

      // remove error border
      inputCvc.classList.remove("inputError")
    }
 } else {

    // show error block
    cardCvcError.style.display = "block"

    // add error border
    inputCvc.classList.add("inputError")
 }


if(inputCardNumber.value == "" || inputMonth.value == "" || inputYear.value == "" || inputCvc.value == ""){
  console.log("Something went wrong")
} else {
  // hide form inputs 
inputsCardholder.style.display = "none"

// show thank you messege
cardholderSent.style.display = "block"
}


})

continueBtn.addEventListener("click", function(event){
  // show form inputs 
  inputsCardholder.style.display = "flex"
  
  // hide thank you messege
  cardholderSent.style.display = "none"

  
  location.reload();
 

})