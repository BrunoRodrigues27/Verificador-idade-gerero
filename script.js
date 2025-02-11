let btn = document.querySelector('input#btn')
let perfil = document.getElementById('foto')
let ano_atual = new Date().getFullYear()

btn.addEventListener('click', verificar)
let genero = ''

function verificar() {
    let anoN = Number(document.getElementById('ano').value)
    let idade = ano_atual - anoN 
    let msg = document.getElementById('texto')
    let sexo = document.getElementsByName('sexo')
    perfil.style.height = '300px'
    perfil.style.width = '300px'
    perfil.style.borderRadius = '50%'

    if (anoN == '' || idade >= 99 || anoN > ano_atual || anoN < 0){
        alert(['[ERRO] Por favor digite um ano de nascimento válido'])
        return;
    }

    if (sexo[0].checked && idade < 12) {
        msg.innerHTML = `Homem de ${idade} anos detectado`
        perfil.src = 'menino.jpg'
        perfil.style.border = 'solid 3px white'
    } else if (sexo[0].checked && idade <= 21) {
        msg.innerHTML = `Homem de ${idade} anos detectado`
        perfil.src = 'adolescente.jpg'
        perfil.style.border = 'solid 3px white'
    } else if(sexo[0].checked && idade > 21 && idade <= 45){
        msg.innerHTML = `Homem de ${idade} anos detectado`
        perfil.src = 'homem.jpg'
        perfil.style.border = 'solid 3px white'
    } else if(sexo[0].checked && idade > 45){
        msg.innerHTML = `Homem de ${idade} anos detectado`
        perfil.src = 'idoso.jpg'
        perfil.style.border = 'solid 3px white'
   } else if (sexo[1].checked && idade < 12) {
        msg.innerHTML = `Mulher de ${idade} anos detectada`
        perfil.src = 'menina.jpg'
        perfil.style.border = 'solid 3px white'
    } else if (sexo[1].checked && idade <= 21) {
        msg.innerHTML = `Mulher de ${idade} anos detectada`
        perfil.src = 'adolescenteM.jpg'
        perfil.style.border = 'solid 3px white'
    } else if(sexo[1].checked && idade > 21 && idade <= 45){
        msg.innerHTML = `Mulher de ${idade} anos detectada`
        perfil.src = 'Mulher.jpg'
        perfil.style.border = 'solid 3px white'
    } else if(sexo[1].checked && idade > 45){
        msg.innerHTML = `Mulher de ${idade} anos detectada`
        perfil.src = 'idosa.jpg'
        perfil.style.border = 'solid 3px white'
    }
}
