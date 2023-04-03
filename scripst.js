
function displayData() {
    let lisat = document.getElementById("satList");
    lisat.remove();
    let lidec = document.getElementById("decList");
    lidec.remove();
    //document.getElementById("satList") = null;
    //document.getElementById("decList") = null;
    let mg = parseFloat(document.getElementById("mg").value.replace(",","."));
    let hlt =  parseInt(document.getElementById("hlt").value);
    let p = parseInt(document.getElementById("p").value);
    let hlt_r = hlt/24;
    let ans = mg;
    let i = 0;
    const sat = [];
    const dec = [];
    while(i < p){
        sat[i] = ans.toFixed(3);
        ans = (ans / 2 * hlt_r) + mg;
        i++;
    }
    document.getElementById("sat").innerHTML = "Saturaatio " + p + " päivän jälkeen: " + ans.toFixed(2);
    let count = 0;
    while(ans > 0.1){
        dec[count] = ans.toFixed(3);
        ans = ans / 2 * hlt_r;
        count++;
    }
    document.getElementById("dec").innerHTML = count + " päivän jälkeen alle 0,1 mg.";
    let ulsat = document.getElementById("satList");
    let uldec = document.getElementById("decList");

    for (let x = 0; x < sat.length; x++) {
        let y = sat[x];
        lisat = document.createElement('li');
        lisat.appendChild(document.createTextNode(y));
        ulsat.appendChild(lisat);
    }
    for (let n = 0; n < dec.length; n++) {
        let m = dec[n];
        lidec = document.createElement('li');
        lidec.appendChild(document.createTextNode(m));
        uldec.appendChild(lidec);
    }
    sat.length = 0;
    dec.length = 0;
}