
function formSaibaMais() {
    var nome = emailContato.nome2.value;
    var email = emailContato.email2.value;
    var telefone = emailContato.telefone2.value;
    var assunto = emailContato.assunto2.value;
    var mensagem = emailContato.mensagem2.value;

    if (nome === "") {
        emailContato.nome2.focus();
        document.getElementById("msgNome2").innerHTML = "* Campo Nome é obrigatório!";

    }
    if (email === "") {
        emailContato.email2.focus();
        document.getElementById("msgEmail2").innerHTML = "* Campo Email obrigatório!";

    }
    if (telefone === "") {
        emailContato.telefone2.focus();
        document.getElementById("msgFone2").innerHTML = "* Campo Telefone obrigatório!";

    }
    if (assunto === "") {
        emailContato.assunto2.focus();
        document.getElementById("msgAssunto2").innerHTML = "* Campo Assunto obrigatório!";

    }
    if (mensagem === "") {
        emailContato.mensagem2.focus();
        document.getElementById("msgMensag2").innerHTML = "* Campo Mensagem obrigatório!";

    }
    else {
        //document.getElementById('btnAssin').disabled = false;
        //criarCustomer();
        contatoEmail(assunto, nome, email, telefone, mensagem);

    }
}


function contatoEmail(a, b, c, d, e) {
    $.ajax({
        url: '/Home/EnviaEmail2',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({ assunto: a, nome: b, email: c, telefone: d, mensagem: e }),
        success: function (data) {
            //window.location.href = '#contato'
            //document.getElementById("formMail").style.display = 'none';
            //document.getElementById("emailOk").style.display = 'block';
            alert("Mensagem enviada com sucesso! Logo a responderemos.");
            $("#txtNome2").val("");
            $("#txtEmail2").val("");
            $("#txtFone2").val("");
            $("#txtAssunto2").val("");
            $("#txtMensagen2").val("");

        },
        error: function (error) {
            alert("Verifique o formato do e-mail e insira um e-mail válido! Ou encaminhe seu e-mail para crm.easysim4u@gmail.com", error.responseText);
        }
    });
}