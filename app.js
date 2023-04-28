// men's collection
var m1rate = 1000, m2rate = 1200, m3rate = 600, m4rate = 1900;
function m1cart() {
    let m1vol = document.getElementById('mvolume1').value;
    localStorage.setItem('vol1', m1vol);
    // localStorage.setItem('')
    // let m1total = document.getElementById('m1total')
    // document.getElementById('demo').innerHTML = m1vol * m1rate;
    // document.getElementById('m1total').innerHTML=localStorage.getItem('vol1')*m1rate;
    //  document.getElementById('madded1').innerHTML="Added to Your Cart";
    if (m1vol == "") {
        document.getElementById('madded1').innerHTML = "Plase Enter the Quatity";
        document.getElementById('madded1').style.color = 'red';
        document.getElementById('m1vol').innerHTML = "-"
    }
    else {
        document.getElementById('madded1').innerHTML = "Added to Your Cart";
    }
}
function m2cart() {
    let m2vol = document.getElementById('mvolume2').value;
    localStorage.setItem('vol2', m2vol);
    if (m2vol == "") {
        document.getElementById('madded2').innerHTML = "Plase Enter the Quatity";
        document.getElementById('madded2').style.color = 'red';
    }
    else {
        document.getElementById('madded2').innerHTML = "Added to Your Cart";
    }

}

function m3cart() {
    let m3vol = document.getElementById('mvolume3').value;
    localStorage.setItem('vol3', m3vol);
    if (m3vol == "") {
        document.getElementById('madded3').innerHTML = "Plase Enter the Quatity";
        document.getElementById('madded3').style.color = 'red';
    }
    else {
        document.getElementById('madded3').innerHTML = "Added to Your Cart";
    }
}
function m4cart() {
    let m4vol = document.getElementById('mvolume4').value;
    localStorage.setItem('vol4', m4vol);
    if (m4vol == "") {
        document.getElementById('madded4').innerHTML = "Plase Enter the Quatity";
        document.getElementById('madded4').style.color = 'red';
    }
    else {
        document.getElementById('madded4').innerHTML = "Added to Your Cart";
    }
}

// calling locally stored data  for male's 
document.getElementById('m1vol').innerHTML = localStorage.getItem('vol1');
document.getElementById('m2vo').innerHTML = localStorage.getItem('vol2');
document.getElementById('m3vo').innerHTML = localStorage.getItem('vol3');
document.getElementById('m4vo').innerHTML = localStorage.getItem('vol4');
document.getElementById('mtotal').innerHTML = ((localStorage.getItem('vol1') * m1rate) + (localStorage.getItem('vol2') * m2rate) + (localStorage.getItem('vol3') * m3rate) + (localStorage.getItem('vol4') * m4rate)) + " /-";
// female's collection 
function f1cart() {
    let f1vol = document.getElementById('fvolume1').value;
    localStorage.setItem('fvol1', f1vol);
    // document.getElementById('demo').innerHTML = f1vol * m1rate;
    // document.getElementById('m1vol').innerHTML=m1vol;
    // document.getElementById('m1total').innerHTML=m1vol*m1rate;
    // document.getElementById('madded1').innerHTML="Added to Your Cart";
    if (f1vol == "") {
        document.getElementById('fadded1').innerHTML = "Plase Enter the Quatity";
        document.getElementById('fadded1').style.color = 'red';
    }
    else {
        document.getElementById('fadded1').innerHTML = "Added to Your Cart";
    }
}
function f2cart() {
    let f2vol = document.getElementById('fvolume2').value;
    localStorage.setItem('fvol2', f2vol);
    if (f2vol == "") {
        document.getElementById('fadded2').innerHTML = "Plase Enter the Quatity";
        document.getElementById('fadded2').style.color = 'red';
    }
    else {
        document.getElementById('fadded2').style.color = 'white';
        document.getElementById('fadded2').innerHTML = "Added to Your Cart";
    }

}
function f3cart() {
    let f3vol = document.getElementById('fvolume3').value;
    localStorage.setItem('fvol3', f3vol);
    if (f3vol == "") {
        document.getElementById('fadded3').innerHTML = "Plase Enter the Quatity";
        document.getElementById('fadded3').style.color = 'red';
    }
    else {
        document.getElementById('fadded3').innerHTML = "Added to Your Cart";
    }
}
function f4cart() {
    let f4vol = document.getElementById('fvolume4').value;
    localStorage.setItem('fvol4', f4vol);
    if (f4vol == "") {
        document.getElementById('fadded4').innerHTML = "Plase Enter the Quatity";
        document.getElementById('fadded4').style.color = 'red';
    }
    else {
        document.getElementById('fadded4').innerHTML = "Added to Your Cart";
    }
}
// calling locally stored data for female 's 
document.getElementById('f1vol').innerHTML = localStorage.getItem('fvol1');
document.getElementById('f2vo').innerHTML = localStorage.getItem('fvol2');
document.getElementById('f3vo').innerHTML = localStorage.getItem('fvol3');
document.getElementById('f4vo').innerHTML = localStorage.getItem('fvol4');
document.getElementById('ftotal').innerHTML = ((localStorage.getItem('fvol1') * m1rate) + (localStorage.getItem('fvol2') * m2rate) + (localStorage.getItem('fvol3') * m3rate) + (localStorage.getItem('fvol4') * m4rate)) + " /-";
// kid's collection
function k1cart() {
    let k1vol = document.getElementById('kvolume1').value;
    localStorage.setItem('kvol1', k1vol);
    // document.getElementById('demo').innerHTML = k1vol * m1rate;
    // document.getElementById('m1vol').innerHTML=m1vol;
    // document.getElementById('m1total').innerHTML=m1vol*m1rate;
    // document.getElementById('madded1').innerHTML="Added to Your Cart";
    if (k1vol == "") {
        document.getElementById('kadded1').innerHTML = "Plase Enter the Quatity";
        document.getElementById('kadded1').style.color = 'red';
    }
    else {
        document.getElementById('kadded1').innerHTML = "Added to Your Cart";
    }
}
function k2cart() {
    let k2vol = document.getElementById('kvolume2').value;
    localStorage.setItem('kvol2', k2vol);
    if (k2vol == "") {
        document.getElementById('kadded2').innerHTML = "Plase Enter the Quatity";
        document.getElementById('kadded2').style.color = 'red';
    }
    else {
        document.getElementById('kadded2').innerHTML = "Added to Your Cart";
    }

}
function k3cart() {
    let k3vol = document.getElementById('kvolume3').value;
    localStorage.setItem('kvol3', k3vol);
    if (k3vol == "") {
        document.getElementById('kadded3').innerHTML = "Plase Enter the Quatity";
        document.getElementById('kadded3').style.color = 'red';
    }
    else {
        document.getElementById('kadded3').innerHTML = "Added to Your Cart";
    }
}
function k4cart() {
    let k4vol = document.getElementById('kvolume4').value;
    localStorage.setItem('kvol4', k4vol);
    if (k4vol == "") {
        document.getElementById('kadded4').innerHTML = "Plase Enter the Quatity";
        document.getElementById('kadded4').style.color = 'red';
    }
    else {
        document.getElementById('kadded4').innerHTML = "Added to Your Cart";
    }
}
// calling locally stored data for kid's
document.getElementById('k1vol').innerHTML = localStorage.getItem('kvol1');
document.getElementById('k2vo').innerHTML = localStorage.getItem('kvol2');
document.getElementById('k3vo').innerHTML = localStorage.getItem('kvol3');
document.getElementById('k4vo').innerHTML = localStorage.getItem('kvol4');
document.getElementById('ktotal').innerHTML = ((localStorage.getItem('kvol1') * m1rate) + (localStorage.getItem('kvol2') * m2rate) + (localStorage.getItem('kvol3') * m3rate) + (localStorage.getItem('kvol4') * m4rate)) + " /-";
// mobile and laptop
var l1rate = 15000, l2rate = 16000, l3rate = 60000, l4rate = 90000;
function l1cart() {
    let l1vol = document.getElementById('lvolume1').value;
    localStorage.setItem('lvol1', l1vol);
    // document.getElementById('demo').innerHTML=l1vol*m1rate;
    // document.getElementById('m1vol').innerHTML=m1vol;
    // document.getElementById('m1total').innerHTML=m1vol*m1rate;
    // document.getElementById('madded1').innerHTML="Added to Your Cart";
    if (l1vol == "") {
        document.getElementById('ladded1').innerHTML = "Plase Enter the Quatity";
        document.getElementById('ladded1').style.color = 'red';
    }
    else {
        document.getElementById('ladded1').innerHTML = "Added to Your Cart";
    }
}
function l2cart() {
    let l2vol = document.getElementById('lvolume2').value;
    localStorage.setItem('lvol2', l2vol);
    if (l2vol == "") {
        document.getElementById('ladded2').innerHTML = "Plase Enter the Quatity";
        document.getElementById('ladded2').style.color = 'red';
    }
    else {
        document.getElementById('ladded2').innerHTML = "Added to Your Cart";
    }

}
function l3cart() {
    let l3vol = document.getElementById('lvolume3').value;
    localStorage.setItem('lvol3', l3vol);
    if (l3vol == "") {
        document.getElementById('ladded3').innerHTML = "Plase Enter the Quatity";
        document.getElementById('ladded3').style.color = 'red';
    }
    else {
        document.getElementById('ladded3').innerHTML = "Added to Your Cart";
    }
}
function l4cart() {
    let l4vol = document.getElementById('lvolume4').value;
    localStorage.setItem('lvol4', l4vol);
    if (l4vol == "") {
        document.getElementById('ladded4').innerHTML = "Plase Enter the Quatity";
        document.getElementById('ladded4').style.color = 'red';
    }
    else {
        document.getElementById('ladded4').innerHTML = "Added to Your Cart";
    }
}
// calling locally stored data for mobile's and laptop's
document.getElementById('l1vol').innerHTML = localStorage.getItem('lvol1');
document.getElementById('l2vo').innerHTML = localStorage.getItem('lvol2');
document.getElementById('l3vo').innerHTML = localStorage.getItem('lvol3');
document.getElementById('l4vo').innerHTML = localStorage.getItem('lvol4');
document.getElementById('ltotal').innerHTML = ((localStorage.getItem('lvol1') * l1rate) + (localStorage.getItem('lvol2') * l2rate) + (localStorage.getItem('lvol3') * l3rate) + (localStorage.getItem('lvol4') * l4rate)) + " /-";
//book's  collection
function b1cart() {
    let b1vol = document.getElementById('bvolume1').value;
    localStorage.setItem('bvol1', b1vol);
    // document.getElementById('demo').innerHTML = b1vol * m1rate;
    // document.getElementById('m1vol').innerHTML=m1vol;
    // document.getElementById('m1total').innerHTML=m1vol*m1rate;
    // document.getElementById('madded1').innerHTML="Added to Your Cart";
    if (b1vol == "") {
        document.getElementById('badded1').innerHTML = "Plase Enter the Quatity";
        document.getElementById('badded1').style.color = 'red';
    }
    else {
        document.getElementById('badded1').innerHTML = "Added to Your Cart";
    }

}
function b2cart() {
    let b2vol = document.getElementById('bvolume2').value;
    localStorage.setItem('bvol2', b2vol);
    if (b2vol == "") {
        document.getElementById('badded2').innerHTML = "Plase Enter the Quatity";
        document.getElementById('badded2').style.color = 'red';
    }
    else {
        document.getElementById('badded2').innerHTML = "Added to Your Cart";
    }

}
function b3cart() {
    let b3vol = document.getElementById('bvolume3').value;
    localStorage.setItem('bvol3', b3vol);
    if (b3vol == "") {
        document.getElementById('badded3').innerHTML = "Plase Enter the Quatity";
        document.getElementById('badded3').style.color = 'red';
    }
    else {
        document.getElementById('badded3').innerHTML = "Added to Your Cart";
    }
}
function b4cart() {
    let b4vol = document.getElementById('bvolume4').value;
    localStorage.setItem('bvol4', b4vol);
    if (b4vol == "") {
        document.getElementById('badded4').innerHTML = "Plase Enter the Quatity";
        document.getElementById('badded4').style.color = 'red';
    }
    else {
        document.getElementById('badded4').innerHTML = "Added to Your Cart";
    }
}
// 
document.getElementById('b1vol').innerHTML = localStorage.getItem('bvol1');
document.getElementById('b2vo').innerHTML = localStorage.getItem('bvol2');
document.getElementById('b3vo').innerHTML = localStorage.getItem('bvol3');
document.getElementById('b4vo').innerHTML = localStorage.getItem('bvol4');
document.getElementById('btotal').innerHTML = ((localStorage.getItem('bvol1') * m1rate) + (localStorage.getItem('bvol2') * m2rate) + (localStorage.getItem('bvol3') * m3rate) + (localStorage.getItem('bvol4') * m4rate)) + " /-";
//Electronic's  collection
var e1rate = 24000, e2rate = 17000, e3rate = 15000, e4rate = 25000;
function e1cart() {
    let e1vol = document.getElementById('evolume1').value;
    localStorage.setItem('evol1', e1vol);
    // document.getElementById('demo').innerHTML = e1vol * m1rate;
    // document.getElementById('m1vol').innerHTML=m1vol;
    // document.getElementById('m1total').innerHTML=m1vol*m1rate;
    // document.getElementById('madded1').innerHTML="Added to Your Cart";
    if (e1vol == "") {
        document.getElementById('eadded1').innerHTML = "Plase Enter the Quatity";
        document.getElementById('eadded1').style.color = 'red';
    }
    else {
        document.getElementById('eadded1').innerHTML = "Added to Your Cart";
    }
}
function e2cart() {
    let e2vol = document.getElementById('evolume2').value;
    localStorage.setItem('evol2', e2vol);
    if (e2vol == "") {
        document.getElementById('eadded2').innerHTML = "Plase Enter the Quatity";
        document.getElementById('eadded2').style.color = 'red';
    }
    else {
        document.getElementById('eadded2').innerHTML = "Added to Your Cart";
    }

}
function e3cart() {
    let e3vol = document.getElementById('evolume3').value;
    localStorage.setItem('evol3', e3vol);
    if (e3vol == "") {
        document.getElementById('eadded3').innerHTML = "Plase Enter the Quatity";
        document.getElementById('eadded3').style.color = 'red';
    }
    else {
        document.getElementById('eadded3').innerHTML = "Added to Your Cart";
    }
}
function e4cart() {
    let e4vol = document.getElementById('evolume4').value;
    localStorage.setItem('evol4', e4vol);
    if (e4vol == "") {
        document.getElementById('eadded4').innerHTML = "Plase Enter the Quatity";
        document.getElementById('eadded4').style.color = 'red';
    }
    else {
        document.getElementById('eadded4').innerHTML = "Added to Your Cart";
    }
}
// 
document.getElementById('e1vol').innerHTML = localStorage.getItem('evol1');
document.getElementById('e2vo').innerHTML = localStorage.getItem('evol2');
document.getElementById('e3vo').innerHTML = localStorage.getItem('evol3');
document.getElementById('e4vo').innerHTML = localStorage.getItem('evol4');
document.getElementById('etotal').innerHTML = ((localStorage.getItem('evol1') * e1rate) + (localStorage.getItem('evol2') * e2rate) + (localStorage.getItem('evol3') * e3rate) + (localStorage.getItem('evol4') * e4rate)) + " /-";

function buy() {
    document.getElementById('buyres').innerHTML = (((localStorage.getItem('vol1') * m1rate) + (localStorage.getItem('vol2') * m2rate) + (localStorage.getItem('vol3') * m3rate) + (localStorage.getItem('vol4') * m4rate))) + (((localStorage.getItem('fvol1') * m1rate) + (localStorage.getItem('fvol2') * m2rate) + (localStorage.getItem('fvol3') * m3rate) + (localStorage.getItem('fvol4') * m4rate))) + (((localStorage.getItem('kvol1') * m1rate) + (localStorage.getItem('kvol2') * m2rate) + (localStorage.getItem('kvol3') * m3rate) + (localStorage.getItem('kvol4') * m4rate))) + (((localStorage.getItem('lvol1') * l1rate) + (localStorage.getItem('lvol2') * l2rate) + (localStorage.getItem('lvol3') * l3rate) + (localStorage.getItem('lvol4') * l4rate))) + (((localStorage.getItem('bvol1') * m1rate) + (localStorage.getItem('bvol2') * m2rate) + (localStorage.getItem('bvol3') * m3rate) + (localStorage.getItem('bvol4') * m4rate))) + (((localStorage.getItem('evol1') * e1rate) + (localStorage.getItem('evol2') * e2rate) + (localStorage.getItem('evol3') * e3rate) + (localStorage.getItem('evol4') * e4rate))) + " /-"
}

function DarkTheme() {
    document.getElementById('body').style.backgroundColor = "black";
}
// refresh
// function refresh(){
//     document.getElementById('m1vol').innerHTML = "";
//     document.getElementById('mtotal').innerHTML = ""
// // document.getElementById('m2vo').innerHTML = localStorage.getItem('vol2');
// // document.getElementById('m3vo').innerHTML = localStorage.getItem('vol3');
// // document.getElementById('m4vo').innerHTML = localStorage.getItem('vol4');
// }