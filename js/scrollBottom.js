let div = document.querySelector(".chats")
div.scrollTop = div.scrollHeight

window.onload = ()=>{
    div.scrollTop = div.scrollHeight - div.clientHeight
}