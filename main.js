$(document).ready(function(){
    
    let contador = []
    
        $('form').on('submit', function(e){
            e.preventDefault()
    
            const adicionarTarefa = $('input').val()
            const novoItem = $('<li></li>')
            $(`<p>${adicionarTarefa}</p>`).appendTo(novoItem)
            $(novoItem).appendTo('ul')
    
    
        $('li').on('click', function(){
            $(this).addClass('concluido')
        })
        $('input').val('')
    })
    })