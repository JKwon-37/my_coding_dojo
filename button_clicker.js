function removeBtn(Element) {
    console.log("The button is removed.")
    Element.remove()
}

function loginLogout(Element) {
    console.log(Element.innerText)
    if (Element.innerText == "Login") {
        Element.innerText = "Logout"
    } else {
        Element.innerText = "Login"
    }
}

function liked(Element) {
    alert("Ninja was liked!")
}