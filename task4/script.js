function szamol(){
    let init_data = document.getElementById("inputField").value;
    let array_data = document.getElementById("arrayField").value;

    let numberToGet = init_data.split(" ").map(Number)[1];
    let array = array_data.split(" ").map(Number);
    
    let res = Infinity;
    let curSum = 0;
    const deque = [];

    for (let r = 0; r < array.length; r++) {
        curSum += array[r];

        if (curSum >= numberToGet) {
            res = Math.min(res, r + 1);
        }

        while (deque.length > 0 && curSum - deque[0][0] >= numberToGet) {
            const [prevSum, idx] = deque.shift();
            res = Math.min(res, r - idx);
        }

        while (deque.length > 0 && deque[deque.length - 1][0] > curSum) {
            deque.pop();
        }

        deque.push([curSum, r]);
    }

    document.getElementById("result").innerText = res === Infinity ? -1 : res;
}

