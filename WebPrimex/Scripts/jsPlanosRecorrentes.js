var tipoNum = "Novo Numero";
var tipoCli = "PessoaFísica";
function formAssinar() {
    var nome = planoRecorr.nomeAss.value;
    var cpf = planoRecorr.cpfAss.value;
    var email = planoRecorr.emailAss.value;
    var dddPhone = planoRecorr.numDDDAss.value;
    var telefone = planoRecorr.numTelAss.value;
    var cep = planoRecorr.cepAss.value;
    var bairro = planoRecorr.bairroAss.value;
    var logradouro = planoRecorr.logradouroAss.value;
    var numero = planoRecorr.numeroAss.value;
    var cidade = planoRecorr.cidadeAss.value;
    var estado = planoRecorr.estadoAss.value;
    var complemento = planoRecorr.complementoAss.value;
    var rg = planoRecorr.rgAss.value;
    var cellDDD = planoRecorr.cellDDD.value;
    var cellNum = planoRecorr.numCell.value;
    //var tipoNum = planoRecorr.complementoAss.value;
    //var iccidAss = planoRecorr.iccidAss.value;

    if (nome === "") {
        planoRecorr.nomeAss.focus();
        document.getElementById("msgNomeAss").innerHTML = "* Campo Nome é obrigatório!";

    }
    if (cpf === "") {
        planoRecorr.cpfAss.focus();
        document.getElementById("msgCPFAss").innerHTML = "* Campo CPF é obrigadatório!";
    }
    if (email === "") {
        planoRecorr.emailAss.focus();
        document.getElementById("msgEmailAss").innerHTML = "* Campo Email obrigatório!";

    }
    if (dddPhone === "") {
        planoRecorr.numDDDAss.focus();
        document.getElementById("msgFoneAss").innerHTML = "* Campo DDD obrigatório!";

    }
    if (telefone === "") {
        planoRecorr.numTelAss.focus();
        document.getElementById("msgFoneAss").innerHTML = "* Campo Telefone obrigatório!";

    }

    if (cep === "") {
        planoRecorr.cepAss.focus();
        document.getElementById("msgCEPAss").innerHTML = "* Campo CEP obrigatório!";

    }
    if (bairro === "") {
        planoRecorr.bairroAss.focus();
        document.getElementById("msgBairroAss").innerHTML = "* Campo Bairro obrigatório!";

    }
    if (logradouro === "") {
        planoRecorr.logradouroAss.focus();
        document.getElementById("msgLogradouroAss").innerHTML = "* Campo Logradouro obrigatório!";

    }
    if (numero === "") {
        planoRecorr.numeroAss.focus();
        document.getElementById("msgNumeroAss").innerHTML = "* Campo Número obrigatório!";

    }
    if (cidade === "") {
        planoRecorr.cidadeAss.focus();
        document.getElementById("msgCidadeAss").innerHTML = "* Campo Cidade obrigatório!";

    }
    if (estado === "") {
        planoRecorr.estadoAss.focus();
        document.getElementById("msgEstadoAss").innerHTML = "* Campo Estado obrigatório!";

    }
    if (rg === "") {
        planoRecorr.rgAss.focus();
        document.getElementById("msgRGAss").innerHTML = "* Campo RG obrigatório!" + tipoCli;

    }
    //if (cellDDD === "") {
        //planoRecorr.cellDDD.focus();
        //document.getElementById("msgCell3").innerHTML = "* Campo DDD obrigatório!";

    //}
    //if (cellNum === "") {
        //planoRecorr.numCell.focus();
        //document.getElementById("msgCell3").innerHTML = "* Campo Número obrigatório!";

    //}
    //if (iccidAss === "") {
        //planoRecorr.iccidAss.focus();
        //document.getElementById("msgICCIDAss").innerHTML = "* Campo ICCID obrigatório!";

    //}
    
    else {
        //document.getElementById('btnAssin').disabled = false;
        //criarCustomer();
        EmailPlanRecorr(nome, email, cep, bairro, logradouro, numero, cidade, estado, telefone, complemento, dddPhone, cpf, rg, cellDDD, cellNum, tipoNum, tipoCli);
        //planoRecorrente(e, nome, cpf, dddPhone, telefone, email, logradouro, numero, complemento, bairro, cep, cidade, estado);
    }
}


function EmailPlanRecorr(a, b, c, d, e, f, g, h, i, j, l, m, n, o, p, q, r, s) {
    //alert("1");
    $.ajax({
        url: '/Home/EnviaEmailPlanRecorr',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({ assunto: $("#hddPlano").val(), nome: a, email: b, cep: c, bairro: d, logradouro: e, numero: f, cidade: g, estado: h, telefone: i, complemento: j, numDDD: l, cpf: m, rg: n, cellDDD: o, cellNum: p, tipoNum: q, iccidAss: r, tipoCliente:s }),
        success: function (data) {
            //window.location = $("#hddLink").val();
            var navigate = $("#hddLink").val();
            window.open(navigate, '_blank');
            //window.open('http://pag.ae/7Vg-1AZcN', 'janela', 'width=795, height=590, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no');
            //document.getElementById("formMail").style.display = 'none';
            //document.getElementById("emailOk").style.display = 'block';
            //alert("Mensagem enviada com sucesso! Logo a responderemos.");
            

        },
        error: function (error) {
            alert("Verifique o formato do e-mail e insira um e-mail válido! Ou encaminhe seu e-mail para crm.easysim4u@gmail.com", error.responseText);
        }
    });
}

$("input:radio").on("click", function () {
    var identificador = $(this).attr("id");
    tipoNum = identificador;
    alert(tipoNum);
    if (tipoNum === "Novo Numero") {
        document.getElementById('txtCell').style.display = "none";
        document.getElementById('lblDDDesc').style.display = "block";
        document.getElementById('lblNumCelular').style.display = "none";
       
    }
    else if (tipoNum === "Portabilidade") { 
        document.getElementById('txtCell').style.display = "block";
        document.getElementById('lblDDDesc').style.display = "none";
        document.getElementById('lblNumCelular').style.display = "block";

        
    }
   
    //alert(identificador);
});


/*
function planoRecorrente(a, b, c, d, e, f, g, h, i, j, l, m, n) {
    
    $.ajax({
        url: '/Home/AdesaoPlano',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({ plano: a, nome: b, cpf: c, codArea: d, phone: e, email: f, logradouro: g, number: h, complement: i, bairro: j, cep: l, cidade: m, uf: n }),
        success: function (data) {
            //window.location.href = '#contato'
            //document.getElementById("formMail").style.display = 'none';
            //document.getElementById("emailOk").style.display = 'block';
            alert("Assinatura gerada com sucesso! Logo a responderemos.");
            $("#txtNomeAss").val("");
            $("#txtCPFAss").val("");
            $("#txtEmailAss").val("");
            $("#txtDDDAss").val("");
            $("#txtTelAss").val("");
            $("#txtCEPAss").val("");
            $("#txtBairroAss").val("");
            $("#txtLogrAss").val("");
            $("#txtNumerAss").val("");
            $("#txtCompleAss").val("");
            $("#txtCidadeAss").val("");
            $("#txtEstadoAss").val("");

        },
        error: function (error) {
            alert("Verifique o formato do e-mail e insira um e-mail válido! Ou encaminhe seu e-mail para pediulogistica@uniglobaltelecom.com", error.responseText);
        }
    });
}


function adesaoPlano() {
    $.ajax({
        url: 'https://ws.sandbox.pagseguro.uol.com.br/pre-approvals?email=uni@yescelular.com.br&token=35FA5DC5D426485784C9A5FB13FD2E43',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({
            plan: "24A399FC11115222240B3FB33815223B",
            reference: "ID-CND",
            sender: {
                name: "Comprador",
                email: "davidfico22@gmail.com",
                ip: "192.168.0.1",
                hash: "hash",
                phone: {
                    areaCode: "19",
                    number: "988881234"
                },
                address: {
                    street: "Av. Brigadeira Faria Lima",
                    number: "1384",
                    complement: "3 andar",
                    district: "Jd. Paulistano",
                    city: "São Paulo",
                    state: "SP",
                    country: "BRA",
                    postalCode: "01452002"
                },
                documents: [
                    {
                        type: "CPF",
                        value: "00000000191"
                    }
                ]
            }

        }),
        success: function (data) {
            //window.location.href = '#contato'
            //document.getElementById("formMail").style.display = 'none';
            //document.getElementById("emailOk").style.display = 'block';
            alert("Assinatura gerada com sucesso! Logo a responderemos.");
            $("#txtNomeAss").val("");
            $("#txtCPFAss").val("");
            $("#txtEmailAss").val("");
            $("#txtDDDAss").val("");
            $("#txtTelAss").val("");
            $("#txtCEPAss").val("");
            $("#txtBairroAss").val("");
            $("#txtLogrAss").val("");
            $("#txtNumerAss").val("");
            $("#txtCompleAss").val("");
            $("#txtCidadeAss").val("");
            $("#txtEstadoAss").val("");

        },
        error: function (error) {
            alert(error.responseText);
        }
    });
}

function sessao() {
    $.ajax({
        url: 'https://ws.sandbox.pagseguro.uol.com.br/sessions?email=uni@yescelular.com.br&token=35FA5DC5D426485784C9A5FB13FD2E43',
        dataType: "json",
        contentType: "application/json;charset=ISO-8859-1",
        //contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({ }),
        success: function (data) {
            alert(data);

        },
        error: function (error) {
            alert("Erro! " + error.responseJSON);
        }
    });
}

var id_da_sessao = "";
$(document).ready(function () {
    //sessaoBackEnd();
});
function sessaoBackEnd() {
    $.ajax({
        url: '/Home/Sessao',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({}),
        success: function (data) {
            alert("sessão id: " + data.sessaoStr);
            id_da_sessao = data.sessaoStr;
            //PagSeguroDirectPayment.setSessionId(id_da_sessao);
            //PagSeguroDirectPayment.getSenderHash();
            //alert(id_da_sessao);

            //$(data.Result).each(function () { });

        },
        error: function (error) {
            alert(error.responseJSON);
        }
    });
}

function criarPlano() {
    $.ajax({
        url: '/Home/CriarPlano',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({}),
        success: function (data) {
            window.location = data;
            //$(data.Result).each(function () { });

        },
        error: function (error) {
            alert(error.responseJSON);
        }
    });
}

function CriarPlanoRest() {
    $.ajax({
        url: '/Home/AdesaoPlanoRest',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({}),
        success: function (data) {
            //window.location = data;
            alert(data);
            //$(data.Result).each(function () { });

        },
        error: function (error) {
            alert(error.responseJSON);
        }
    });
} */

/*
jQuery.validator.addMethod("cpf", function (value, element) {
    value = jQuery.trim(value);

    value = value.replace('.', '');
    value = value.replace('.', '');
    cpf = value.replace('-', '');
    while (cpf.length < 11) cpf = "0" + cpf;
    var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
    var a = [];
    var b = new Number;
    var c = 11;
    for (i = 0; i < 11; i++) {
        a[i] = cpf.charAt(i);
        if (i < 9) b += (a[i] * --c);
    }
    if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11 - x }
    b = 0;
    c = 11;
    for (y = 0; y < 10; y++) b += (a[y] * c--);
    if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11 - x; }

    var retorno = true;
    if ((cpf.charAt(9) !== a[9]) || (cpf.charAt(10) !== a[10]) || cpf.match(expReg)) retorno = false;

    return this.optional(element) || retorno;

}, "Informe um CPF válido");


$(document).ready(function () {

    $("#planoRecorr").validate({
        rules: {
            cpf: { cpf: true, required: true }
        },
        messages: {
            cpf: { cpf: 'CPF inválido' }
        }
        , submitHandler: function (form) {
            alert('ok');
        }
    });
}); */
//https://pt.stackoverflow.com/questions/44061/usando-jquery-validation-engine-e-valida%C3%A7%C3%A3o-de-cpf