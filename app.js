let count=0;
const span = document.getElementById('span');
function test(){
    console.log("pressed");
    count++;
    span.textContent = count;
}

function debounce(fn,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        setTimeout(()=>{
            fn();
        },d);
    }
}

const updated = debounce(test,2000);