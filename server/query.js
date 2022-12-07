function getListings() {
    $.ajax({
        url: 'http://localhost:27017/fkreview/reviews',
        method: 'GET',
        contentType: 'application/json',
        data: JSON.stringify()
    }).then(function (response) {
        console.log("t",response)
    }).fail(function (request,status,error){
        console.log("pp",error)
    })
}