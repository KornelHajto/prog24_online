function checkValid(event) {
    event.preventDefault();
    const szamString = document.getElementById('szamString').value;
    const k = parseInt(document.getElementById('k').value);

    result = '';
    if(isNaN(k)) {
        result = 'Hiba: k nem egy szám!';
    } else if(k < 0) {
        result = 'Hiba: k nem lehet negatív!';
    }

    if(k == 0){
        result = szamString;
    } else if (k >= szamString.length) {
        result = '0';
    }

    document.getElementById('eredmeny').innerText = result;
}