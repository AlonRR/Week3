/*
//ex1 ex2 ex3
// title, author, and ISBN 
const getData = function (data) {
    data.items.forEach(item => {
        title = item.volumeInfo.title
        authors = item.volumeInfo.authors
        isbn = item.volumeInfo.industryIdentifiers[0].identifier
        console.log(`${title}, ${authors}, ${isbn}`)
    }
    )
}
const fetch = function () {
    let queryValue = $(`#value`).val()
    let queryType = $(`#type`).val()
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=title:enders%20game`, //`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: getData,
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}
*/
//ex4
//javascript, jQuery
// let xhr = $.get("http://api.giphy.com/v1/gifs/search?q=sdfaszef&api_key=OG8C2fVLXraUsGpef4HUEZAvd4cXGR2D&limit")
// function(data) { console.log("success got data", data) })
const displayMe = function (data) {
    $(`body>div`).empty()
    embedURLs = data.data.map(gif => gif.embed_url)
    console.log(embedURLs)
    embedURLs.forEach(embed_url => {
        $(`body>div`).append(`<iframe src="${embed_url}" frameborder="0"></iframe>`)
    })
}
const fetch = function () {
    getSerch = $(`#type`).val()
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${getSerch}&api_key=OG8C2fVLXraUsGpef4HUEZAvd4cXGR2D&limit=5`,
        success: displayMe,
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}