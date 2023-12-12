
const perguntas = document.querySelectorAll('.perguntas-faq')
const img = document.querySelectorAll('.img-plus')
const respostas = document.querySelectorAll('.respostas-faq')
let troca = true

perguntas.forEach((e, i) => {
    e.addEventListener('click', () => {
        if(respostas[i].style.display === 'none') {
            img[i].setAttribute('src', 'assets/images/icon-minus.svg')
            respostas[i].style.display = 'block'
            troca = false 
        } else {
            img[i].setAttribute('src', 'assets/images/icon-plus.svg')
            respostas[i].style.display = 'none'
            troca = true
        }
    })
})


