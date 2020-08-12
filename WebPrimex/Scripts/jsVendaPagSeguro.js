function vendaProduto() {
    $.ajax({
        url: '/Home/VendaProd',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        data: JSON.stringify({}),
        success: function (data) {
            window.location = data;

        },
        error: function (error) {
            alert("Erro!");
        }
    });
}