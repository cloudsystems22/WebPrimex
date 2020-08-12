function consultaCEP() {
    //var cep = $(this).val().replace(/\D/g, '');
    var cep = $("#txtCEP3").val().replace(/\D/g, '');
    if (cep !== "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if (validacep.test(cep)) {
            //Preenche os campos com "..." enquanto consulta webservice.
            $("#txtLogr3").val("...");
            $("#txtBairro3").val("...");
            $("#txtCidade3").val("...");
            $("#txtEstado3").val("...");

            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#txtLogr3").val(dados.logradouro);
                    $("#txtBairro3").val(dados.bairro);
                    $("#txtCidade3").val(dados.localidade);
                    $("#txtEstado3").val(dados.uf);
                    //$("#ibge").val(dados.ibge);
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    $("#txtLogr3").val("");
                    $("#txtBairro3").val("");
                    $("#txtCidade3").val("");
                    $("#txtEstado3").val("");
                    alert("CEP não encontrado.");
                }
            });
        }
        else {
            //cep é inválido.
            $("#txtLogr3").val("");
            $("#txtBairro3").val("");
            $("#txtCidade3").val("");
            $("#txtEstado3").val("");
            alert("Formato de CEP inválido.");
        }
    }
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}

