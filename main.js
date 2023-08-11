let id = (id)=>document.getElementById(id),
classes = (clas)=>document.getElementsByClassName(clas);

let btns = Array.from(classes('btn')),
clearBtn = id('clear'),
resultBtn = id('result'),
offBtn = id('offBTN'),
inputBox = id('user_input'),
outputBox = id('output');


let userCommand = '';
let finalOutput = 0;


btns.forEach(btn => {
    // console.log(btn)
    btn.addEventListener('click', (e)=>{
        // console.log(e.target.innerHTML)
        let commad = e.target.innerHTML === 'x'? '*': e.target.innerHTML;
        inputBox.innerHTML = inputBox.innerHTML + "" + e.target.innerHTML;
        userCommand += commad;
        // console.log(userCommand);
        // console.log(inputBox.innerHTML)
    })
})

resultBtn.addEventListener('click', ()=>{
    // console.log(eval(8*4))
    // console.log(eval(userCommand))
    finalOutput = eval(userCommand);
    outputBox.innerHTML = finalOutput;
    inputBox.innerHTML = ''
})


clearBtn.addEventListener('click', ()=>{
    inputBox.innerHTML = ''
    outputBox.innerHTML = 0
    userCommand = '';
})


offBtn.addEventListener('click', ()=>{

    inputBox.innerHTML = ''
    outputBox.innerHTML = '';
})


// &#42; *