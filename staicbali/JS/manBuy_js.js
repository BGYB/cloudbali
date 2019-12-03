function changesAdd() {
    var change1 = document.getElementById("change1");
    var change2 = document.getElementById("change2");
    var change3 = document.getElementById("change3");
    if (change1.style.display == 'block') {
        change1.style.display = 'none';
        change2.style.display = 'block';
        change3.style.display = 'none';
    } else if (change2.style.display == 'block') {
        change1.style.display = 'none';
        change2.style.display = 'none';
        change3.style.display = 'block';
    } else if (change3.style.display == 'block') {
        change1.style.display = 'block';
        change2.style.display = 'none';
        change3.style.display = 'none';
    }
}

function changeBgColor(bg) {
    buttonTitle1.style.backgroundColor = '#DDDDDD';
    buttonTitle2.style.backgroundColor = '#DDDDDD';
    buttonTitle3.style.backgroundColor = '#DDDDDD';

    var selectDiv1 = document.getElementById("selectDiv1");
    var selectDiv2 = document.getElementById("selectDiv2");
    var selectDiv3 = document.getElementById("selectDiv3");
    selectDiv1.style.display = 'none';
    selectDiv2.style.display = 'none';
    selectDiv3.style.display = 'none';
    if (1 == bg) {
        buttonTitle1.style.backgroundColor = '#EEEEEE';
        selectDiv1.style.display = 'block';
    } else if (2 == bg) {
        buttonTitle2.style.backgroundColor = '#EEEEEE';
        selectDiv2.style.display = 'block';
    } else if (3 == bg) {
        buttonTitle3.style.backgroundColor = '#EEEEEE';
        selectDiv3.style.display = 'block';
    }
}

function changesCut() {
    var change1 = document.getElementById("change1");
    var change2 = document.getElementById("change2");
    var change3 = document.getElementById("change3");

    if (change1.style.display == 'block') {
        change1.style.display = 'none';
        change2.style.display = 'none';
        change3.style.display = 'block';
    } else if (change2.style.display == 'block') {
        change1.style.display = 'block';
        change2.style.display = 'none';
        change3.style.display = 'none';
    } else if (change3.style.display == 'block') {
        change1.style.display = 'none';
        change2.style.display = 'block';
        change3.style.display = 'none';
    }
}

function showsaa() {
    document.getElementById("photo").style.display = "block";
}

function hiddenaa() {
    document.getElementById("photo").style.display = "none";
}

window.onscroll = "show()";