function calcular(tipo, valor){
    //Tipo é o tipo de ação que o usuário deseja realizar.
    //Valor é o valor do botão

    //1.Verificar se o tipo é ação ou valor
    if(tipo === 'acao'){
        console.log('acao')
        //Botão C - Apagar

        if(valor === 'C'){
            //limpar o visor
            document.getElementById('resultado').value = ''
        }
        //Ações de soma, subtração, multiplicação e divisão
        // || -> significa "ou"
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            //1.Pegar o valor do visor
            //2.Concatenar o valor do visor com o valor do botão
            document.getElementById("resultado").value = document.getElementById("resultado").value + valor
        }

        //Botão igual
        if(valor === '='){
            let valor = eval(document.getElementById('resultado').value)
            console.log(valor)

        //colocar o valor no visor
        document.getElementById('resultado').value = valor
        }
    }

    else{
        console.log('valor: ' + valor)
        //1.Pegar o valor do visor
        //2.concatenar o valor do visor com o valor do botão
        document.getElementById('resultado').value += valor
        //document.getElementById('resultado').value + valor
    }
}