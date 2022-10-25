function qtd_equivalente(){
    let qtd = parseFloat(document.getElementById('input1').value); 
    let porcentagem1 = parseFloat(document.getElementById('input2').value);
    let porcentagem2 = parseFloat(document.getElementById('input3').value);
    let resultado = (porcentagem2*qtd/porcentagem1).toFixed(2);
    if(isNaN(qtd) || isNaN(porcentagem1) || isNaN(porcentagem2)){
        alert('Certifique-se que todos os campos estejam preenchidos corretamente.');
    }
    else{
        document.getElementById('resultado1').innerHTML = resultado;
    }
};

function qtd_aumentada(){
    let qtd = parseFloat(document.getElementById('input4').value); 
    let porcentagem = parseFloat(document.getElementById('input5').value);
    let resultado = (qtd + qtd*porcentagem/100).toFixed(2);
    if(isNaN(qtd) || isNaN(porcentagem)){
        alert('Certifique-se que todos os campos estejam preenchidos corretamente.');
    }
    else{
        document.getElementById('resultado2').innerHTML = resultado;
    }
};

function qtd_diminuida(){
    let qtd = parseFloat(document.getElementById('input6').value); 
    let porcentagem = parseFloat(document.getElementById('input7').value);
    let resultado = (qtd - qtd*porcentagem/100).toFixed(2);
    if(isNaN(qtd) || isNaN(porcentagem)){
        alert('Certifique-se que todos os campos estejam preenchidos corretamente.');
    }
    else{
        document.getElementById('resultado3').innerHTML = resultado;
    }
};

function porcentagem_equivalente(){
    let qtd1 = parseFloat(document.getElementById('input8').value);
    let porcentagem = parseFloat(document.getElementById('input9').value);
    let qtd2 = parseFloat(document.getElementById('input10').value);
    let resultado = (porcentagem*qtd2/qtd1).toFixed(2) + '%';
    if(isNaN(qtd1) || isNaN(porcentagem) || isNaN(qtd2)){
        alert('Certifique-se que todos os campos estejam preenchidos corretamente.');
    }
    else{
        document.getElementById('resultado4').innerHTML = resultado;
    }
};

function aumento_percentual(){
    let qtd1 = parseFloat(document.getElementById('input11').value); 
    let qtd2 = parseFloat(document.getElementById('input12').value);
    if(isNaN(qtd1) || isNaN(qtd2)){
        alert('Certifique-se que todos os campos estejam preenchidos corretamente.');
    }
    else{
        if(qtd2 >= qtd1){
            let resultado = (qtd2*100/qtd1 - 100).toFixed(2) + '%';
            document.getElementById('resultado5').innerHTML = resultado;
        }
        else{
            alert('A quantidade 2 tem que ser maior que a quantidade 1.');
        }
    }
};

function desconto_percentual(){
    let qtd1 = parseFloat(document.getElementById('input13').value); 
    let qtd2 = parseFloat(document.getElementById('input14').value);
    if(isNaN(qtd1) || isNaN(qtd2)){
        alert('Certifique-se que todos os campos estejam preenchidos corretamente.');
    }
    else{
        if(qtd2 <= qtd1){
            let resultado = (100 - qtd2*100/qtd1).toFixed(2) + '%';
            document.getElementById('resultado6').innerHTML = resultado;
        }
        else{
            alert('A quantidade 2 tem que ser menor que a quantidade 1.');
        }
    }
};
