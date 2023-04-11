function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `agora são ${hora} horas. `

    if( hora>= 0 && hora < 12){
        //BOM DIA 
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#bd8e8e'
       }   else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.jpg'
        document.body.style.background = '#bbc431'
        //BOA TARDE 
       } else {
        //BOA NOITE 
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#0a0221'
       }


}

