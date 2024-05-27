function umfla(){
    console.log(1);
    var div = document.getElementById('balon');
    var inaltimeCurenta = div.offsetHeight;
    var latimeCurenta = div.offsetWidth;
    div.style.height = (inaltimeCurenta + 15) + 'px';
    div.style.width = (latimeCurenta + 10) + 'px';
}