
function formSoliciteJa() {
    var nome = soliciteJa.nome1.value;
    var email = soliciteJa.email1.value;
    var telefone = soliciteJa.telefone1.value;
    var cep = soliciteJa.cep1.value;
    var bairro = soliciteJa.bairro1.value;
    var logradouro = soliciteJa.logradouro1.value;
    var numero = soliciteJa.numero1.value;
    var cidade = soliciteJa.cidade1.value;
    var estado = soliciteJa.estado1.value;
    var plano = soliciteJa.plano.value;
    //var assunto = soliciteJa.assunto1.value;
    //var mensagem = soliciteJa.mensagem1.value;
    var complemento = soliciteJa.complemento1.value;

    //var planoSelc = frmAtivacao.planoAtiv.value;

    if (nome === "") {
        soliciteJa.nome1.focus();
        document.getElementById("msgNome").innerHTML = "* Campo Nome é obrigatório!";

    }
    if (email === "") {
        soliciteJa.email1.focus();
        document.getElementById("msgEmail").innerHTML = "* Campo Email obrigatório!";

    }
    if (telefone === "") {
        soliciteJa.telefone1.focus();
        document.getElementById("msgFone").innerHTML = "* Campo Telefone obrigatório!";

    }

    if (cep === "") {
        soliciteJa.cep1.focus();
        document.getElementById("msgCEP").innerHTML = "* Campo CEP obrigatório!";

    }
    if (bairro === "") {
        soliciteJa.bairro1.focus();
        document.getElementById("msgBairro").innerHTML = "* Campo Bairro obrigatório!";

    }
    if (logradouro === "") {
        soliciteJa.logradouro1.focus();
        document.getElementById("msgLogradouro").innerHTML = "* Campo Logradouro obrigatório!";

    }
    if (numero === "") {
        soliciteJa.numero1.focus();
        document.getElementById("msgNumero").innerHTML = "* Campo Número obrigatório!";

    }
    if (cidade === "") {
        soliciteJa.cidade1.focus();
        document.getElementById("msgCidade").innerHTML = "* Campo Cidade obrigatório!";

    }
    if (estado === "") {
        soliciteJa.estado1.focus();
        document.getElementById("msgEstado").innerHTML = "* Campo Estado obrigatório!";

    }
    //if (assunto === "") {
    //    soliciteJa.assunto1.focus();
    //    document.getElementById("msgAssunto").innerHTML = "* Campo Assunto obrigatório!";

    //}
    //if (mensagem === "") {
    //    soliciteJa.mensagem1.focus();
    //    document.getElementById("msgMensag").innerHTML = "* Campo Mensagem obrigatório!";

    //}
    else {
        //document.getElementById('btnAssin').disabled = false;
        //criarCustomer();
        soliciteEmailJa(nome, email, cep, bairro, logradouro, numero, cidade, estado, telefone, complemento, plano);
        //linkNavegacao(planoSelc);

    }
}

function soliciteEmailJa(a, b, c, d, e, f, g, h, i, j, p) {
    //alert("1");
    $.ajax({
        url: '/Home/EnviaEmail',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({ nome:a, email: b, cep: c, bairro: d, logradouro: e, numero: f, cidade: g, estado: h, telefone: i, complemento:j, plano:p }),
        success: function (data) {
            window.open('https://pag.ae/7Wcmk2CB9', 'blank');
            //document.getElementById("formMail").style.display = 'none';
            //document.getElementById("emailOk").style.display = 'block';
            //alert("Mensagem enviada com sucesso! Logo a responderemos.");
            $("#txtNome").val("");
            $("#txtEmail").val("");
            $("#txtFone").val("");
            $("#txtAssunto").val("");
            $("#txtMensagen").val("");

            $("#txtNome2").val("");
            $("#txtEmail2").val("");
            $("#txtFone2").val("");
            //$("#txtAssunto2").val("");
            //$("#txtMensagen2").val("");
            $("#myMdlAtive").modal('hide');


        },
        error: function (error) {
            alert("Verifique o formato do e-mail e insira um e-mail válido! Ou encaminhe seu e-mail para crm.easysim4u@gmail.com", error.responseText);
        }
    });
}

