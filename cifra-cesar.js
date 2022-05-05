var selectDivSec = document.querySelector(".box-secundario"); //Box Cifra de César
var selectDivTer = document.querySelector(".box-terciario"); //Box Base64
var selectOpcoes = document.querySelector("#opcoes") //Opções de Codificação
var selectCodif1 = document.querySelector("#codificar") //radioButton Codificar - Cifra de César
var selectDecod1 = document.querySelector("#decodificar") //radioButton Decodificar - Cifra de César
var selectButtonCesar = document.querySelector("#codifCesar") //Botão Codificar/Decodificar - Cifra de César
var selectCodif2 = document.querySelector("#codificar2") //radioButton Codificar - Base64
var selectDecod2 = document.querySelector("#decodificar2") //radioButton Decodificar - Base64
var selectButton64 = document.querySelector("#codif64") //Botão Codificar/Decodificar - Base64
var quadroPretoInput = document.querySelector("#message-input"); //Textarea Input (Quadro Preto)
var quadroAmareloOutput = document.querySelector("#message-output"); //Textarea Output (Quadro Amarelo)
var inputIncremento = document.querySelector("#input-incremento"); //Input do Incremento - Cifra de César


//Função de Codificação da Cifra de César
function codificaCesar(inputIncremento) {

    var str = quadroPretoInput.value;
    var strUpper = str.toUpperCase();
    var strCifrada = '';
    var restoCodif = 26-inputIncremento;

    for (caract = 0; caract < str.length; caract++) {

        var codigoASCII = strUpper[caract].charCodeAt();
        var convASCIIString1 = String.fromCharCode(codigoASCII+inputIncremento);
        var convASCIIString2 = String.fromCharCode(codigoASCII-restoCodif);

        if (codigoASCII >= 65 && codigoASCII < 65+restoCodif) {

            strCifrada += convASCIIString1;

        } else if (codigoASCII >= 65+restoCodif && codigoASCII <= 90) {

            strCifrada += convASCIIString2;

        } else {

            strCifrada += strUpper[caract];

        }

    }
    return quadroAmareloOutput.value = strCifrada;

}


//Função da Decodificação da Cifra de César
function decodificaCesar(inputIncremento) {

    var strDecod = quadroPretoInput.value;
    var strDecodUpper = strDecod.toUpperCase();
    var strDecifrada = ''
    var sobra = 26-inputIncremento

    for (caract=0; caract < strDecod.length ;caract++) {

        var codigoASCIIDecod = strDecodUpper[caract].charCodeAt();
        var convASCIIStringDecod1 = String.fromCharCode(codigoASCIIDecod-inputIncremento);
        var convASCIIStringDecod2 = String.fromCharCode(codigoASCIIDecod+sobra);
        
        if (codigoASCIIDecod >= 65 && codigoASCIIDecod < 65+inputIncremento) {

            strDecifrada += convASCIIStringDecod2;

        } else if (codigoASCIIDecod >= 65+inputIncremento && codigoASCIIDecod <= 90) {

            strDecifrada += convASCIIStringDecod1;

        } else {

            strDecifrada += strDecodUpper[caract];

        }
    }
    return quadroAmareloOutput.value = strDecifrada;
}

function codifBase64() {

    var stringPreCodif = quadroPretoInput.value;
    var stringCodif64 = btoa(stringPreCodif);
    return quadroAmareloOutput.value = stringCodif64;

}

function decodBase64() {

    var stringPreDecod = quadroPretoInput.value;
    var stringDecod64 = atob(stringPreDecod);
    return quadroAmareloOutput.value = stringDecod64;
}


//Divs de Cifra de César e Base64 aparecem e desaparecem de acordo com a opção selecionada
var opcoesEscolha = opcoes.options;

selectOpcoes.addEventListener("change", function() {

    if (opcoesEscolha.selectedIndex == 1) {

        selectDivSec.style.visibility = 'visible';
        selectDivTer.style.visibility = 'hidden'

    } else {

        selectDivTer.style.visibility = "visible";
        selectDivSec.style.visibility = 'hidden';
    }

})

//Mudança do nome do botão de codificar/decodificar Cifra de César de acordo com o radio button selecionado 
selectCodif1.addEventListener("click", function() {
    selectButtonCesar.value = 'Codificar!'
})
selectDecod1.addEventListener("click",function() {
    selectButtonCesar.value = 'Decodificar!'
})


//Evento do botão codificar/decodificar Cifra de César, que executa as funções de codificação e decodificação
selectButtonCesar.addEventListener("click", function(event) {
    event.preventDefault();


    if (selectOpcoes.value == "cesar") {

        if (selectCodif1.checked) {

            codificaCesar(+inputIncremento.value);
            
        } 
        
        if (selectDecod1.checked) {

            decodificaCesar(+inputIncremento.value);

        }
    }
})


//Evento do botão codificar/decodificar Base64, que executa as funções de codificação e decodificação
selectButton64.addEventListener("click", function(event) {
    event.preventDefault();


    if (selectOpcoes.value == "base64") {

        if (selectCodif2.checked) {

            codifBase64();
            
        } 
        
        if (selectDecod2.checked) {

            decodBase64();

        }
    }
})


//Mudança do nome do botão de codificar/decodificar Base64 de acordo com o radio button selecionado 
selectCodif2.addEventListener("click", function() {
    selectButton64.value = 'Codificar!'
})
selectDecod2.addEventListener("click",function() {
    selectButton64.value = 'Decodificar!'
})