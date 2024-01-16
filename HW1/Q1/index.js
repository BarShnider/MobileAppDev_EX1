class Counter {
    constructor(counter){
        this.counter = counter
    }


    initialize(parameter){
        this.counter = parameter;

    }

    increment(){
        this.counter++;
    }

    go(){
        let text =""
        for(let i = 0; i <= this.counter; i++){
            text += `${i} `
        }
        return text;
    }
}

function onStart(){
    if($(".input").val() == ""){
        alert("please enter a number in the text box")
        return
    } 
    counterObj.initialize(Number($(".input").val()))
    console.log(counterObj)
}

function onIncrement(){
    if(counterObj.counter == undefined){
        alert("please create a new counter object first by pressing Start")
        return
    } 
    counterObj.increment();
    $("#input-num").val(counterObj.counter)
    console.log(counterObj)
}

function onGo(){
    if(counterObj.counter == undefined){
        alert("please create a new counter object first by pressing Start")
        return
    }
    let para = $("<p>")
    para.text(counterObj.go());
    $("body").append(para)
}

let counterObj = new Counter();
