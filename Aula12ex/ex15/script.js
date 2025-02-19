function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[Erro] verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade <10){
            //Criança
            img.setAttribute ('src','bebeosr.png' )
            } else if (idade < 21){
                //jovem
            img.setAttribute ('src','ojovemsr.png' )
            } else if (idade < 50){
                //adulto 
                img.setAttribute ('src','oadultosr.png' )
            } else {
                //idoso
                img.setAttribute ('src','idososr.png' )
            }
                
        } else if (fsex[1].checked){
            genero = 'Mulher'
                if (idade >=0 && idade <10){
                //Criança
                img.setAttribute ('src','bebeasr.png' )
                } else if (idade < 21){
                    //jovem
                    img.setAttribute ('src','ajovemsr.png' )
                } else if (idade < 50){
                    //adulto
                    img.setAttribute ('src','aadultosr.png' )
                }else{
                    //idoso
                    img.setAttribute ('src','idosasr.png' )
                }
            }    
        }
    
    res.style.textAlign = 'center'
    res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
