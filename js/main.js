var plus = document.getElementById('plus');
var zero = document.getElementById('zero');
let minus = document.getElementById('minus');
let btnChart = document.getElementById('btn-chart');
let badge = document.getElementById('badge');
let cardPic = document.getElementById('card-pic');
let cardBlock = document.getElementById('card');
let prix = document.getElementById('prix');
let number = document.getElementById('number');
let total = document.getElementById('total');
let btnDeleteIcon = document.getElementById('delete-icon-btn');
let imgCart = document.getElementById('img-card');
let checkoutBtn = document.getElementById('checkout');
let cardText = document.getElementById('card-text');
let img0 = document.getElementById("imgBg0");
let img1 = document.getElementById("imgBg1");
let img2 = document.getElementById("imgBg2");
let img3 = document.getElementById("imgBg3");
let img4 = document.getElementById("imgBg4");



function myPlusFunction() {
    zero.innerText++;
}

function myMinusFunction() {
    if (zero.innerText > 0) {
        zero.innerText--;
    }

}

function addToCard() {
    if (zero.innerText > 0) {

        badge.innerText = zero.innerText;
        badge.style.display = "block";
    } else {
        badge.style.display = "none";
        cardBlock.style.display = "none";
    }

}

function onShowCard() {
    if (zero.innerText > 0) {
        cardBlock.style.display = "block";
        imgCart.style.display = "";
        btnDeleteIcon.style.display = "block";
        checkoutBtn.style.visibility = "visible";
        let nb = "";
        let pr = "";
        let t = "";

        nb = zero.innerText;
        pr = "125.00";
        t = parseFloat(pr * nb).toFixed(2);
        number.innerText = nb;
        prix.innerText = pr;
        total.innerText = t;
        cardText.innerHTML = "Fail limited Edition Sneakers $" + prix.innerText + " X " + number.innerText + "<strong> $" + total.innerText + "</strong>"

    } else {
        onEmptyCard();
    }

}

function onDeleteCard() {

    cardBlock.style.display = "none";
    badge.style.display = "none";
    badge.innerText = 0;
}

function onEmptyCard() {
    if (zero.innerText == 0) {
        cardBlock.style.display = "block";
        imgCart.style.display = "none";
        btnDeleteIcon.style.display = "none";
        checkoutBtn.style.visibility = "hidden";

        cardText.innerHTML = "<strong>Your Cart is Empty!!</strong>";

    }
}

function onDblClik() {
    cardBlock.style.display = "none";
}

function myFunction() {
    var respo = document.getElementById("myMenu");
    console.log(respo);
    if (respo.className === "menu") {
        respo.className += " responsive";
    } else {
        respo.className = "menu";
    }
}



$(document).ready(function() {
    $(".clickable").each(function() {
        $(this).click(function() {
            $("#largeimg").attr("src", $(this).attr("src")).attr("data-nr", $(this).attr("data-nr"));
        });

    });
});

function goNext() {
    newid = parseInt($("#largeimg").attr("data-nr")) + 1;
    newsrc = $(".clickable[data-nr=" + newid + "]").attr("src");
    $("#largeimg").attr("src", newsrc).attr("data-nr", newid);
}

function goPrevious() {
    newid = parseInt($("#largeimg").attr("data-nr")) - 1;
    newsrc = $(".clickable[data-nr=" + newid + "]").attr("src");
    $("#largeimg").attr("src", newsrc).attr("data-nr", newid);
}