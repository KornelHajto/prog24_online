function checkValid(event) {
    event.preventDefault();

    const bemenetiString = document.getElementById("bemenetiString").value;
    if(bemenetiString.length === 0) {
        document.getElementById("eredmeny").innerText = "NEM";
    }

    const isValid = /^[()*]+$/.test(bemenetiString);
    result = ''

    if (isValid) {
        const nyitozarojel = (bemenetiString.match(/\(/g) || []).length;
        const zarozoarojel = (bemenetiString.match(/\)/g) || []).length;
        const csillagdarab = (bemenetiString.match(/\*/g) || []).length;
        if (nyitozarojel === 0 && zarozoarojel == 0 && csillagdarab > 0) {
            result = "NEM";
        } else if (bemenetiString[0] === ')' || bemenetiString[bemenetiString.length - 1] === '(') {
            result = "NEM";
        } else if (nyitozarojel != zarozoarojel && csillagdarab < Math.abs(nyitozarojel - zarozoarojel)) {
            result = "NEM";
        } else {
            result = "IGEN";
            var nyito = 0;
            var csillag = 0;
            for ( const karater of bemenetiString ) {
                if (karater === '(') {
                    nyito++;
                }
                if (karater === '*') {
                    csillag++;
                }
                if (karater === ')') {
                    nyito--;
                }
                if (nyito < 0 && csillag == 0) {
                    result = "NEM";
                    break;
                } else if (nyito < 0 && csillag > 0) {
                    csillag--;
                }
            }
            if (nyito >0 && csillag < nyito){
                result = "NEM";
            }
            
        }
    } else {
        result = "A bemeneti string csak (, ), * karaktereket tartalmazhat.";
    }
    document.getElementById("eredmeny").innerText = result;
}