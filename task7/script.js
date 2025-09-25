let current = "X"
let lastStep
let win = false

let isSwitchMode = false

function startGame() {
    current = "X"
    generateFields()

}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateFields() {
    const sizeX = 7
    const sizeY = 7
    let fields = []
    for (let i = 0; i < sizeX; i++) {
        fields[i] = []
        for(let k = 0; k < sizeY; k++){
            const element = document.createElement("button")
            element.id = `slot-${k+i*sizeY}`
            element.className = "relative bg-gray-400 border border-black cursor-pointer hover:bg-gray-200 transition-color duration-300 w-full h-full aspect-square"
            element.innerText = ``
            element.onclick = () => selectField(`${k+i*sizeY}`);
            const sign = document.createElement("div")
            sign.id = `sign-${k+i*sizeY}`
            sign.className = "absolute inset-0 flex items-center justify-center"
            element.appendChild(sign)
            document.getElementById("field").appendChild(element)
           
        }
    }
    let randomFieldCount = randomIntFromInterval(7,14)
    let randomPossibilities = Array.from(Array(7*7).keys())

    for (let index = 0; index < randomFieldCount; index++) {
        const id = randomPossibilities[randomIntFromInterval(0, randomPossibilities.length-1)]
        randomPossibilities.splice(id, 1)
        
        const element = document.getElementById(`slot-${id}`)
        const stepCounter = document.createElement("div")
        stepCounter.className = "absolute right-0 bottom-0 pointer-events-none"
        stepCounter.innerText = "9"
        stepCounter.id = `counter-${id}`
        element.appendChild(stepCounter)
        element.className = `${element.className} bg-red-400 hover:bg-red-300`
    }
    return true
}

function selectField(id){
    if(win){return false}

    const element = document.getElementById(`sign-${id}`)
    if(!element){return false;}
    if(isSwitchMode){
        return true
    }
    if(element.innerText != "X" || element.innerText != "O"){
        element.innerText = `${current}`
    }else {
        return false
    }

    lastStep = id
    checkWinCondition(id)
    if(win){return true}
    removeCount()
    changePlayer()
}

function removeCount(){
    for (let i = 0; i < 7; i++) {
        for(let k = 0; k < 7; k++){
            const counter = document.getElementById(`counter-${k+i*7}`)
            const sign = document.getElementById(`sign-${k+i*7}`)
            if(!counter){continue}
            if(lastStep == k+i*7){continue}
            if(sign.innerText == ""){continue}
            const count = Number(counter.innerText)-1
            if(count == 0){
                counter.innerText = 9
                
                sign.innerText = ""
            }else{
                counter.innerText = count
            }
        }
    }
}

function changePlayer() {
    if(current == "X"){
        current = "O"
        document.getElementById("currentStep").innerText = `Következő lépés: ${current}`
        return true
    }
    current = "X"
    document.getElementById("currentStep").innerText = `Következő lépés: ${current}`
    return true
}

function checkWinCondition(idI) {
    const id = Number(idI)
    //Függőleges
    let count = 0;
    let lastThree = []
    for (let i = -3; i < 3; i++) { 
        if(isEqualToCurrent(id+i*7)){
            count++
            lastThree.push(id+i*7)
            if(count == 3){
                win = true
                break;
            }
        }else{
            lastThree = []
            count = 0
        }
    }
    //Vízszintes
    count = 0
    for (let i = -3; i < 3; i++) { 
        if(win){break}
        if(isEqualToCurrent(id+i)){
            count++
            lastThree.push(id+i)
            if(count == 3){
                win = true
            }
        }else{
            lastThree = []
            count = 0
        }
    }
    //KeresztBalFelső
    count = 0;
    for (let i = -2; i < 3; i++) { 
        if(win){break}
        if (isEqualToCurrent(id+i+i*7)) {
            count++
            lastThree.push(id+i+i*7)
            if(count == 3){
                win = true
            }
        } else {
            lastThree = []
            count = 0
        }
    }
    //KeresztJobbFelső
    count = 0;
    for (let i = -2; i < 3; i++) { 
        if(win){break}
        if (isEqualToCurrent(id-i+i*7)) {
            count++
            lastThree.push(id-i+i*7)
            if(count == 3){
                win = true
            }
        } else {
            lastThree = []
            count = 0;
        }
    }
    if(win){
        document.getElementById("currentStep").innerText = `Nyertes: ${current}`
        for (let i = 0; i < 3; i++) {
            const element = document.getElementById(`slot-${lastThree[i]}`)
            element.className = `${element.className} !bg-yellow-500`
        }
    }
}


function isEqualToCurrent(id){
    const element = document.getElementById(`sign-${id}`)
    if(!element){return false}
    return document.getElementById(`sign-${id}`).innerText == current
}

function disableButtons(isSwitchMode) {
    if(isSwitchMode){

        return true;
    }
}

startGame()