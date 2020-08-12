var tipoNum = "Novo Numero";
function formAtivacao() {
    var nome = frmAtivacao.nome3.value;
    var cpf = frmAtivacao.cpf3.value;
    var rg = frmAtivacao.rg3.value;
    var email = frmAtivacao.email3.value;
    var telefone = frmAtivacao.telefone3.value;
    var cep = frmAtivacao.cep3.value;
    var bairro = frmAtivacao.bairro3.value;
    var logradouro = frmAtivacao.logradouro3.value;
    var numero = frmAtivacao.numero3.value;
    var cidade = frmAtivacao.cidade3.value;
    var estado = frmAtivacao.estado3.value;
    var assunto = frmAtivacao.planoSelect.value;
    var iccid = frmAtivacao.iccid.value;
    var complemento = frmAtivacao.complemento3.value;
    var numDDD = frmAtivacao.numDDD.value;
    var numeroCell = frmAtivacao.numCell.value;



    if (nome === "") {
        frmAtivacao.nome3.focus();
        document.getElementById("msgNome3").innerHTML = "* Campo Nome é obrigatório!";

    }
    if (cpf === "") {
        frmAtivacao.cpf3.focus();
        document.getElementById("msgCPF3").innerHTML = "* Campo CPF é obrigadatório!";
    }
    if (rg === "") {
        frmAtivacao.rg3.focus();
        document.getElementById("msgRG3").innerHTML = "* Campo RG é obrigadatório!";
    }
    if (email === "") {
        frmAtivacao.email3.focus();
        document.getElementById("msgEmail3").innerHTML = "* Campo Email obrigatório!";

    }
    if (telefone === "") {
        frmAtivacao.telefone3.focus();
        document.getElementById("msgFone3").innerHTML = "* Campo Telefone obrigatório!";

    }

    if (cep === "") {
        frmAtivacao.cep3.focus();
        document.getElementById("msgCEP3").innerHTML = "* Campo CEP obrigatório!";

    }
    if (bairro === "") {
        frmAtivacao.bairro3.focus();
        document.getElementById("msgBairro3").innerHTML = "* Campo Bairro obrigatório!";

    }
    if (logradouro === "") {
        frmAtivacao.logradouro3.focus();
        document.getElementById("msgLogradouro3").innerHTML = "* Campo Logradouro obrigatório!";

    }
    if (numero === "") {
        frmAtivacao.numero3.focus();
        document.getElementById("msgNumero3").innerHTML = "* Campo Número obrigatório!";

    }
    if (cidade === "") {
        frmAtivacao.cidade3.focus();
        document.getElementById("msgCidade3").innerHTML = "* Campo Cidade obrigatório!";

    }
    if (estado === "") {
        frmAtivacao.estado3.focus();
        document.getElementById("msgEstado3").innerHTML = "* Campo Estado obrigatório!";

    }
    if (assunto === "") {
        frmAtivacao.planoSelct.focus();
        document.getElementById("msgAssunto3").innerHTML = "* Campo Assunto obrigatório!";

    }
    if (iccid === "") {
        frmAtivacao.iccid.focus();
        document.getElementById("msgICCID3").innerHTML = "* Campo ICCID obrigatório!";

    }
    if (numDDD === "") {
        frmAtivacao.numDDD.focus();
        document.getElementById("msgCell3").innerHTML = "* Campo Nº DDD é obrigatório!";
    }

    if (numeroCell === "") {
        frmAtivacao.numCell.focus();
        document.getElementById("msgCell3").innerHTML = "* Campo Nº Cell obrigatório!";

    }
    else {
        //document.getElementById('btnAssin').disabled = false;
        //criarCustomer();
        ativacaoEmail(assunto, nome, email, cep, bairro, logradouro, numero, cidade, estado, telefone, iccid, complemento, numDDD, numeroCell, tipoNum, rg, cpf);

    }
}

function ativacaoEmail(a, b, c, d, e, f, g, h, i, j, l, m, n, o, p, q, r) {
    //alert("1");
    $.ajax({
        url: '/Home/EnviaEmail3',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({ assunto: a, nome: b, email: c, cep: d, bairro: e, logradouro: f, numero: g, cidade: h, estado: i, telefone: j, iccid: l, complemento: m, numDDD: n, numerocell: o, tipoNumero: p, rg: q, cpf: r }),
        success: function (data) {
            //window.location.href = '#contato'
            //document.getElementById("formMail").style.display = 'none';
            //document.getElementById("emailOk").style.display = 'block';
            alert("Ativação enviada com sucesso! Em breve você receberá no e-mail indicado o link de pagamento para finalizar sua ativação. Após a conclusão do pagamento seu SIM card estará ativo no prazo de duas horas.");
            $("#txtNome3").val("");
            $("#txtCPF3").val("");
            $("#txtCEP3").val("");
            $("#txtBairro3").val("");
            $("#txtLogr3").val("");
            $("#txtCompl3").val("");
            $("#txtCidade3").val("");
            $("#txtEstado3").val("");
            $("#txtICCID").val("");
            $("#txtCell").val("");

        },
        error: function (error) {
            alert("Verifique o formato do e-mail e insira um e-mail válido! Ou encaminhe seu e-mail para crm.easysim4u@gmail.com", error.responseText);
        }
    });
}

$("input:radio").on("click", function () {
    var identificador = $(this).attr("id");
    tipoNum = identificador;
    //alert(identificador);
});