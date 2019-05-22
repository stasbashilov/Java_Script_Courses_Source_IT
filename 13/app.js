'use strict';

// class EventListeners {
//     constructor(debugMessage = 'test') {
//         this.debugMessage = debugMessage;
//     }

//     onCalc(event){
//         // calcForm.removeEventListener('submit',  onCalc);
//         event.preventDefault();
//         const aInput = event.target.querySelector('input[name="a"]');
//         const a = parseFloat(aInput.value);
//         const bInput = event.target.querySelector('input[name="b"]');
//         const b = parseFloat(bInput.value);
//         const operationSelect = event.target.querySelector('select[name="operation"]');
//         const operation = parseFloat(operationSelect.value);
//         const result = eval(`${a} ${operation} ${b}`);
//         document.getElementById('result').innerHTML = `<strong>Result:</strong>${result}`;
//         // console.log(this.debugMessage, eval(`${a} ${operation} ${b}`));
//     }

// }

// const calcForm = document.getElementById("calc");
// const listeners = new EventListeners('calcForm');

// calcForm.addEventListener('submit',  listeners.onCalc.bind(listeners));

// // calcForm.removeEventListener('submit',  onCalc);

const btn = document.getElementById('btn');
btn.addEventListener('click', onClick);

let counter = 1;

function onClick(e) {
   
    if(counter >= 10) {
        btn.removeEventListener('click', onClick);
    }

    e.target.innerText = `Click (${counter++})`;  
}

$('.container').on('click', '.btn1', function(e){
    console.log(e.target);
})

$('#add').click( e => {
    $('.container').append('<button class="btn1" type="button">jQuery Click 3</button>')
})




function install(discNum, cbFn){
    console.log(`Install ${discNum}` );
    setTimeout(() => {
        console.log(`Disk ${discNum} installed` );
        cbFn(diskNum + 1);
    }, 1500)
}

function promtDisk(diskNum, cbFn){
    console.log(`Put ${discNum}` );
    setTimeout(() => {
        cbFn(diskNum);
    }, 1000)
}

promtDisk(1, function(diskNum){
    install(function (diskNum){
        promtDisk(diskNum, function(diskNum){
            install(function(diskNum){
                promptDisk(diskNum, function(diskNum){
                    install(function(diskNum){
                        console.log('Finish');
                    })
                })
            })
        } )
    })
})





