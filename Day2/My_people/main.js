let render = function (data) {
    let emailcontact = []
    //  emailcontact= data.map(contact=> {name = contact.name, email = contact.email})
    console.log(data)
    data.forEach(contact => emailcontact.push({
        name: contact.name,
        email: contact.email
    }))
    console.log(emailcontact)
    let source = $('#people-template').html()
    let template = Handlebars.compile(source)
    // let obj = {emailcontact}
    let newHTML = template({emailcontact})
    // const appendMe = (c) => {
    //     newHTML = template(c)
       $(`.emailcontact`).append(newHTML)
    // }
    // emailcontact.forEach(c => appendMe(c))
}
$.ajax({
    methed: 'GET',
    url: `https://jsonplaceholder.typicode.com/users`,
    success: render,
    //error
})