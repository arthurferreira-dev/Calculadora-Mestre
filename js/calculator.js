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

        if (Math.sign(n1) < 0) { // n1 negativo
            let n1p = Math.abs(n1)
            let resulp = n1p - n2
                if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
                    fim.innerHTML = 'Não foi possível calcular &#x26D4;'
                } else {
                    fim.innerHTML = `O resultado é ${resulp} &#x2728;`
                }
            fim.style.display = 'block'
        } else if (Math.sign(n2) < 0) { // n2 negativo
            let n2p = Math.abs(n2)
            let resulp2 = n1 - n2p
            if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
                fim.innerHTML = 'Não foi possível calcular &#x26D4;'
            } else {
                fim.innerHTML = `O resultado é ${resulp2} &#x2728;`
            }
            fim.style.display = 'block'
        } else { // n1 e n2 positivo
            let resul = n1 + n2
            if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
                fim.innerHTML = 'Não foi possível calcular &#x26D4;'
            } else {
                fim.innerHTML = `O resultado é ${resul} &#x2728;`
            }
            fim.style.display = 'block'
        }
    } else if (op == '-') {
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Subtração"

        if (Math.sign(n1) < 0) { // n1 negativo
            let n1n = n1 * -1
            let resuln = n1n + n2
                if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
                    fim.innerHTML = 'Não foi possível calcular &#x26D4;'
                } else {
                    fim.innerHTML = `O resultado é ${resuln} &#x2728;`
                }
            fim.style.display = 'block'
        } else if (Math.sign(n2) < 0) { // n2 negativo
            let n2n = n2 * -1
            let resuln2 = n1 + n2n
            if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
                fim.innerHTML = 'Não foi possível calcular &#x26D4;'
            } else {
                fim.innerHTML = `O resultado é ${resuln2} &#x2728;`
            }
            fim.style.display = 'block'
        } else { // subtração normal
            let resul = n1 - n2
            if (n1 == '' || n2 == '' || op == '') { // Tratamento de Error void
                fim.innerHTML = 'Não foi possível calcular &#x26D4;'
            } else {
                fim.innerHTML = `O resultado é ${resul} &#x2728;`
            }
            fim.style.display = 'block'
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