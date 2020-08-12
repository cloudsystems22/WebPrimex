

function consultaCEP() {
    //var cep = $(this).val().replace(/\D/g, '');
    var cep = $("#txtCEP").val().replace(/\D/g, '');
    if (cep !== "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if (validacep.test(cep)) {
            //Preenche os campos com "..." enquanto consulta webservice.
            $("#txtLogr").val("...");
            $("#txtBairro").val("...");
            $("#txtCidade").val("...");
            $("#txtEstado").val("...");

            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#txtLogr").val(dados.logradouro);
                    $("#txtBairro").val(dados.bairro);
                    $("#txtCidade").val(dados.localidade);
                    $("#txtEstado").val(dados.uf);
                    //$("#ibge").val(dados.ibge);
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    $("#txtLogr").val("");
                    $("#txtBairro").val("");
                    $("#txtCidade").val("");
                    $("#txtEstado").val("");
                    alert("CEP não encontrado.");
                }
            });
        }
        else {
            //cep é inválido.
            $("#txtLogr").val("");
            $("#txtBairro").val("");
            $("#txtCidade").val("");
            $("#txtEstado").val("");
            alert("Formato de CEP inválido.");
        }
    }
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}