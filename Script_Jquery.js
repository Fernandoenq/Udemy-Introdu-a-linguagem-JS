
/*
//$(selector).ação();
$(document).ready(function(){//Primeiro verifica se todo o documento ja foi carregado $(documento).ready, ai quando tudo carregar vai rodar uma function
    $('button').click(function(){//ao clicar em algum botao faça a função
        $('h1').hide()//Vai esconder o h1
    })

})

*/

$(function(){//verifica de forma mais simples se o documento ja está carregado para fazer o resto
    $('#l2').click(function(){
        $('#i1').hide()    
        $('#i2').show()
        $('#i3').hide()
        $('#i4').hide()
    })

    $('#l3').click(function(){
        $('#i1').hide()    
        $('#i2').hide()
        $('#i3').show()
        $('#i4').hide()
    })

    $('#l4').click(function(){
        $('#i1').hide()    
        $('#i2').hide()
        $('#i3').hide()
        $('#i4').show()
    })

    $('#l1').click(function(){
        $('#i1').show()    
        $('#i2').hide()
        $('#i3').hide()
        $('#i4').hide()
    })

    

    
    $('button').click(function(){//ao clicar em algum botao faça a função
        $('#textinho').css("color", "red")// vai aplicar um css no h1 especifico, sendo do tipo color com a cor red
    })
    $('#azul').click(function(){
        $('p').css("background-color", "blue")
        $('p').fadeOut()
        $('p').delay(1000)
        $('p').fadeIn()
        
        //$('p').fadeOut()// é tipo o hide porem mais suave
    })
    $('#vermelho').click(function(){
        $('p').css("background-color", "red")
        $('p').fadeOut('slow') // com slow o efeito fica mais lento
        $('p').delay(1000)
        $('p').fadeIn('slow')//tem como colocar fast ou botar o valor em microsegundos la dentro
        //$('p').hide()
       
        $('#mensagem').text("cor alterada com sucesso")
            .text("cor alterada com sucesso")
            .css({color: 'red', border: '1px solid red', /*backgroundColor: 'gray'*/})
            .css('border', '1px solid red')
            .fadeOut()
            .addClass('green')//pego a classe criada no css e trouxe pra ca
        
        $('button').removeClass('reddd')//Remove a classe reddd voltando o botao lá ao normal
        

        /*
        $('#mensagem').text("cor alterada com sucesso")
            .text("cor alterada com sucesso")
            .css('color', 'red')
            .css('border', '1px solid red')
            .fadeOut()
        */

        /*    
        $('#mensagem').text("cor alterada com sucesso")
        $('#mensagem').css('color', 'red')
        $('#mensagem').css('border', '1px solid red')
        $('#mensagem').fadeOut()
        */
        

    })

    

    
})