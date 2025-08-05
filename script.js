let valor1
let valor2
let resultados

function somarvalores() 
{

valor1 = parseFloat(document.getElementById('peso').value)

valor2 = parseFloat(document.getElementById('altura').value)

resultados = valor1 / (valor2 * valor2)
 

document.getElementById('resultado').value = resultados
    
}

