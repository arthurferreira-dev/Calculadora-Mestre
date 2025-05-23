let op = prompt('Qual é operador a seguir você quer? (+/-/x/÷)')

function operator() {
    let title = document.getElementById('title')
    let btn = document.getElementById('btn-op')

    if (op == '+') {
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Adição"
    } else if (op == '-') {
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Subtração"
    } else if (op == 'x') {
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Multiplicação"
    } else if (op == '÷') {
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Divisão"
    } else { // Error 404
        btn.style.display = 'none'
        title.style.display = 'block'
        title.innerHTML = "Nenhum operador identificado"
    }
}

function calc() {
    let strNumber1 = document.getElementById('n1')
    let strNumber2 = document.getElementById('n2')
    // Conversão
    let n1 = Number(strNumber1)
    let n2 = Number(strNumber2)

    let res = n1 + n2

    let fim = document.getElementById('res')
    fim.style.display = 'block'
    fim.innerHTML = `${res}`
}