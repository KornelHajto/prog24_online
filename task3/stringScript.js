function checkValid(event) {
    event.preventDefault();
    const szamString =  document.getElementById('szamString').value;
    let k = parseInt(document.getElementById('k').value);

    let halom = [];
    for (let i = 0; i < szamString.length; i++) {
        let szam = szamString[i];
        while (k > 0 && halom.length > 0 && halom[halom.length - 1] > szam) {
            halom.pop();
            k--;
        }
        halom.push(szam);
    }

    while (k>0 && halom.length >0){
        halom.pop();
        k--;
    }

    while (halom.length > 1 && halom[0] === '0'){
        halom.shift()
    }


    if(halom.length === 0) {
        document.getElementById('eredmeny').innerHTML = '0';
    }
    else{
        let vegleges = parseInt(halom.join('')).toString();
        document.getElementById('eredmeny').innerHTML = vegleges;
    }
    
}