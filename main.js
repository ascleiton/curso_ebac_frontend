const form = document.getElementById('form-bmaior');


form.addEventListener('submit', function(e){
    e.preventDefault();

    validaCampoNumerico();

})

function validaCampoNumerico(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    const msgSuccess = 'Parabéns! Você cumpriu os requisitos propostos.'
    const msgError = 'Tente novamente! o campo B precisa ser maior.'
    let maior = n1;
    
    if(n2>maior){
        const containersuccess = document.querySelector('.positivo')
        containersuccess.innerHTML = msgSuccess
        containersuccess.style.display = 'block';
        containersuccess.style.backgroundColor = 'green';
    }else{
        const containererror = document.querySelector('.negativo')
        containererror.innerHTML = msgError
        containererror.style.display = 'block';
        containererror.style.backgroundColor = 'red';
    }   
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    validaCampoNumerico();
})
