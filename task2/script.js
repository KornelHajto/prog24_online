function ShortPattern(s) {
    for (let len = 1; len <= s.length / 2; len++) {
        if (s.length % len === 0) {
            let pattern = s.substring(0, len);
            if (pattern.repeat(s.length / len) === s) {
                return { pattern, count: s.length / len };
            }
        }
    }
    return { pattern: s, count: 1 };
}

function Calculate(){
    var input = document.getElementById("inputField").value;
    
    if (!input.trim()) {
        alert("Kérlek adj meg egy nem üres szöveget!");
        return;
    }

    const result = ShortPattern(input);

    const resultText = `Bemenet: ${input}\nKimenet:\n${result.pattern}\n${result.count}`;
    document.getElementById("result").innerText = resultText;
}
