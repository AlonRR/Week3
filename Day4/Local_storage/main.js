// let data =[]
let data = JSON.parse(localStorage.wisdom || '[]')
let place = () => {
    data.push({ text: $("input").val() })
    if(truther) localStorage.wisdom = JSON.stringify(data) 
    truther=!truther
    render()
}
let render = () => {
    $(`.fine`).empty()
    data.forEach(t => $(`.fine`).append(`<p>${t.text}<button onclick="removeMe()"></p>`))
    $(`input`).val(``)
}
let removeMe=()=>
let truther = false
render()
