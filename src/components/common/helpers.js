const validacionInputs = (valor) => {
  if (valor.trim() === '' && valor.length > 200) {
    return false
  } else {
    return true
  }
}

const validacionNumeros = (valor) => {
  if (valor > 0 && valor < 999999) {
    return true
  } else {
    return false
  }
}

const validarEmail = (mail) => {
  var expresion = /\w+@\w+\.[a-z]{2,}$/
  if (mail.trim() !== '' && expresion.test(mail)) {
    return true
  } else {
    return false
  }
}

const validarPass = (pass) =>{
    if (pass.trim() !== "" && pass.length >= 8){
        return true
    }else {
        return false
    }
}

export { validacionInputs, validacionNumeros, validarEmail, validarPass }
