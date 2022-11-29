var div = document.getElementsByClassName("div1");
var london = document.getElementById('london')
var tokyo = document.getElementById('tokyo')
var paris = document.getElementById('paris')

function display() {
    console.log(div.length)
    console.log("click")
    for (var i = 0; i < div.length; i++) {
        if (i == (div.length - 3)) {
            div[i].style.display = "block"
            div[div.length - 2].style.display = "none"
            div[div.length - 1].style.display = "none"

        }

    }

}

function display1() {
    for (var i = 0; i < div.length; i++) {
        if (i == div.length - 2) {
            div[div.length - 3].style.display = "none"
            div[div.length - 1].style.display = "none"
            div[i].style.display = "block"

        }
    }

}

function display2() {
    for (var i = 0; i < div.length; i++) {
        if (i == div.length - 1) {
            div[div.length - 3].style.display = "none"
            div[div.length - 2].style.display = "none"

            div[i].style.display = "block"

        }
    }

}

function hide() {
    div[div.length - 3].style.display = "none"
    div[div.length - 2].style.display = "none"
    div[div.length - 1].style.display = "none"

}