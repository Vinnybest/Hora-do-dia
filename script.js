function carregar() {

var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('imagem')
var data = new Date()
var data2 = new Date()
var hora = data.getHours()
var minuto = data2.getMinutes()


msg.innerHTML = `Agora sao ${hora}:${minuto} horas.`
    if (hora >=0 && hora < 12) {
        // BOM DIA
        foto.src = "IMG/manha.png"
        document.body.style.background = '#FC0'
    } else if (hora >=12 && hora < 18){
        // BOA TARDE
        foto.src = "IMG/tarde.png"
        document.body.style.background = 'rbga (222,222,222,222)'
    }else{
        // BOA NOITE
        foto.src = "IMG/noite.png"
        document.body.style.background = '#F24'
    }
}
