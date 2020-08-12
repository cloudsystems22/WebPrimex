function consultaCEPRecorr() {
    //var cep = $(this).val().replace(/\D/g, '');
    var cep = $("#txtCEPAss").val().replace(/\D/g, '');
    if (cep !== "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if (validacep.test(cep)) {
            //Preenche os campos com "..." enquanto consulta webservice.
            $("#txtLogrAss").val("...");
            $("#txtBairroAss").val("...");
            $("#txtCidadeAss").val("...");
            $("#txtEstadoAss").val("...");

            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#txtLogrAss").val(dados.logradouro);
                    $("#txtBairroAss").val(dados.bairro);
                    $("#txtCidadeAss").val(dados.localidade);
                    $("#txtEstadoAss").val(dados.uf);
                    //$("#ibge").val(dados.ibge);
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    $("#txtCEPAss").val("");
                    $("#txtBairroAss").val("");
                    $("#txtCidadeAss").val("");
                    $("#txtEstadoAss").val("");
                    alert("CEP não encontrado.");
                }
            });
        }
        else {
            //cep é inválido.
            $("#txtCEPAss").val("");
            $("#txtBairroAss").val("");
            $("#txtCidadeAss").val("");
            $("#txtEstadoAss").val("");
            alert("Formato de CEP inválido.");
        }
    }
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}