
  var form  = document.querySelector('form')
  var email = document.querySelector('.caixa')
  var error = document.querySelector('.errortext-msg')
  var ico = document.querySelector('.ico-erro')

  form.addEventListener('submit' , (e) =>{
    if(email.value == '') {
      error.textContent = 'Digite no Campo'
      ico.style.opacity = "0"
      
    }
    e.preventDefault()
  })

  email.addEventListener("keyup" , () =>{
    if(validadorEmail(email.value) !== true){
      error.textContent = "Please provide a valid email"
      ico.style.opacity = "1"
     
    }else{
      error.textContent = ''
      ico.style.opacity = "0"
    }
  })

  function validadorEmail(email){
    var emailPadrao =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPadrao.test(email)
  }


