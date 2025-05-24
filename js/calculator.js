function calc() {
    let op = prompt('Qual é operador a seguir você quer? (+/-/x/÷)')
    let title = document.getElementById('title')
    let btn = document.getElementById('btn-op')
    let fim = document.getElementById('res')

    // Input
    const input1 = document.getElementById('n1')
    const input2 = document.getElementById('n2')
    // String
    const strNumber1 = +input1.value
    const strNumber2 = +input2.value
    // Conversão
    const n1 = strNumber1
    const n2 = strNumber2

    // Operador Choose
    if (op == '+') {
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Adição"
        let resul = n1 + n2

        fim.style.display = 'block'

        if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
            fim.innerHTML = 'Não foi possível calcular &#x26D4;'
        } else {
            fim.innerHTML = `O resultado é ${resul} &#x2728;`
        }
    } else if (op == '-') {
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Subtração"
        let resul = n1 - n2

        fim.style.display = 'block'
        
        if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
            fim.innerHTML = 'Não foi possível calcular &#x26D4;'
        } else {
            fim.innerHTML = `O resultado é ${Math.abs(resul)} &#x2728;`
            // 'Math.abs() é para deixar o número positivo'
        }
    } else if (op == 'x') {
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Multiplicação"
        let resul = n1 * n2

        fim.style.display = 'block'

        if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
            fim.innerHTML = 'Não foi possível calcular &#x26D4;'
        } else {
            fim.innerHTML = `O resultado é ${resul} &#x2728;`
        }
    } else if (op == '÷') {
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Divisão"
        let resul = n1 / n2

        fim.style.display = 'block'

        if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
            fim.innerHTML = 'Não foi possível calcular &#x26D4;'
        } else {
            fim.innerHTML = `O resultado é ${resul} &#x2728;`
        }
    } else { // Error 404
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Nenhum operador identificado"
        title.style.width = '150px'

        fim.style.display = 'block'

        if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
            fim.innerHTML = 'Não foi possível calcular &#x26D4;'
        }
    }
}

function Alert() { // Retiramento do aviso em vermelho
    let section = document.getElementById('alert')
    section.style.display = 'none'
    section.style.marginTop = '0px'
}