let display = document.querySelector('.display');

function appendValue(text){
    if(display.innerText === '0' || display.innerText === 'Error' || display.innerText === 'Invalid Format!!'){
        display.innerText = text;
        return;
    }
    display.innerText = `${display.innerText}${text}`;
}

function clearDisplay(){
    display.innerText = '0';
}

function calculate(){
    try{
        if(display.innerText.includes('/0')){
            display.innerText = 'Invalid Format!!'
            return;
        }
        display.innerText = eval(display.innerText);
    } catch(error){
        display.innerText = 'Error';
    }
    
}