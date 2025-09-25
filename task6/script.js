function orderCharacters() {
    let data = document.getElementById('inputField').value
    fvg(data);
}

function fvg(data) {
let lowercase = "";
let uppercase = "";
for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i].toUpperCase()) {
        uppercase += data[i];
    } else if (data[i] === data[i].toLowerCase()) {
        lowercase += data[i];
    }

}

document.getElementById('output').innerHTML = "A megváltoztatott sorrend: <b>"+uppercase + lowercase+"</b>";
}
