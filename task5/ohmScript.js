function calculateOhm(event) {
    event.preventDefault();

    u = document.getElementById('u').value;
    i = document.getElementById('i').value;
    r = document.getElementById('r').value;

    result = `Nem számolható`;

    if ((u !== '' && isNaN(u)) || (i !== '' && isNaN(i)) || (r !== '' && isNaN(r))) {
        result = 'Hibás adat: csak számokat adjon meg!';
        document.getElementById('eredmeny').innerText = result;
        return;
    }    

    if(u !== '' && i !== '' && r !== '') {
        u = parseFloat(u);
        i = parseFloat(i);
        r = parseFloat(r);
        if(u == r * i){
            result = `Helyes`;
        }else{
            result = `Hibás`;
        }
    } else if (u !== '' && i !== '') {
        u = parseFloat(u);
        i = parseFloat(i);
        r = u / i;
        result = `Ellenállás (R): ${r} ohm`;
    } else if (u !== '' && r !== '') {
        u = parseFloat(u);
        r = parseFloat(r);
        i = u / r;
        result = `Áramerősség (I): ${i} amper`;
    } else if (i !== '' && r !== '') {
        i = parseFloat(i);
        r = parseFloat(r);
        u = i * r;
        result = `Feszültség (U): ${u} volt`;
    }

    document.getElementById('eredmeny').innerText = result;
}