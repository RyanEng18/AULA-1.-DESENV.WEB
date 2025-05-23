function insert(num)
{
   var numero = document.getElementById('resultado').innerHTML; //inserir os elementos que estão no "num"//
    document.getElementById('resultado').innerHTML = numero + num; //para colocarmos os elementos lado a lado, sem excluir o outro//
}

function clean() //para limpar os elementos//
{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);// lengh -1 para excluir o último caracter//
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado); // eval realiza o calculo da expressão matemática que foi digitada no campo "resultado"//
    }

    else
    {
        document.getElementById('resultado').innerHTML = "Calcule...";
    }
}

//document é toda a página, e .getElementById é o id que você quer acessar, e .innerHTML é o