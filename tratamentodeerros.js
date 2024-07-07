let num = 3;

function dobrarNumPar(numero)
{
    if (numero%2 !== 0) return 'Não é par';

    return numero * 2;
}

function exponenciarNum(numero)
{
    return numero**2;
}

try 
{
    exponenciarNum(dobrarNumPar(nomi));
}
catch(ex)
{
    console.error("deu ruim");
}