function onOff (objeto) {
    if (document.getElementById(objeto).classList.contains("meVes")) {
        document.getElementById(objeto).classList.remove("meVes");
        document.getElementById(objeto).classList.add("noMeVes");
    } else {
        document.getElementById(objeto).classList.remove("noMeVes");
        document.getElementById(objeto).classList.add("meVes");
    }
}