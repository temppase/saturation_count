
const sat = [];
const dec = [];
let snum = 0;
function displayData() {

    let mg = parseFloat(document.getElementById("mg").value.replace(",","."));
    let hlt =  parseInt(document.getElementById("hlt").value);
    let p = parseInt(document.getElementById("p").value);
    let hlt_r = hlt/24;
    let ans = mg;
    let i = 0;
    
    while(i < p){
        sat[i] = ans.toFixed(2);
        if(i < p - 1){
            ans = (ans / 2 * hlt_r) + mg;
        }
        i++;
    }
    document.getElementById("sat").innerHTML = "Saturaatio " + p + " päivän jälkeen: " + ans.toFixed(2);
    let count = 0;
    while(ans > 0.1){
        dec[count] = ans.toFixed(2);
        ans = ans / 2 * hlt_r;
        count++;
    }
    document.getElementById("dec").innerHTML = count + " päivän jälkeen alle 0,1 mg.";
    let olsat = document.getElementById("satList");
    let oldec = document.getElementById("decList");
    if(snum > 0){
        resetLists(olsat);
        resetLists(oldec);
    }
    for (let x = 0; x < sat.length; x++) {
        console.log("x: " + x);
        lisat = document.createElement('li');
        lisat.appendChild(document.createTextNode(sat[x]));
        olsat.appendChild(lisat);
    }
    document.getElementById("satList");
    for (let n = 0; n < dec.length; n++) {
        console.log("n: " + n);
        lidec = document.createElement('li');
        lidec.appendChild(document.createTextNode(dec[n]));
        oldec.appendChild(lidec);
    }
    snum = olsat.children.length;
    sat.length = 0;
    dec.length = 0;
}
function resetLists(x){
    x.innerHTML = '';
}

