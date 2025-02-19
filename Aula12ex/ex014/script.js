function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 10//data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha.png'
        document.body.style.background ="#f469a3"
    } else  if (hora >= 12 && hora < 18){
        //boa tarde!
        img.src = 'tarde.png'
        document.body.style.background ="#f47d1b"
    } else {
        //boa noite !!
        img.src = 'noite.png'
        document.body.style.background ="#bf57ef"
    }
}