function show(aa) {

    for (var i = 5; i < 10; i++) {
        if (i != aa) {
            document.getElementById(i).style.display = "none";
        } else {
            document.getElementById(aa).style.display = "block";
        }
    }

}

function hide() {
    for (var i = 5; i < 10; i++) {
        document.getElementById(i).style.display = "none";
    }
}

function hide1(i) {
    document.getElementById(i).style.display = "none";
}