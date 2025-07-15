let counter = 0;

const numberInput = document.getElementById('numbers')

const handleOnChange = ()=> {

    counter = numberInput.value

}

function minus(){
    counter--;
    numberInput.value = counter;
    numberInput.style.color = 'red';
    
}
function refresh(){
    counter = 0;
    numberInput.value = counter;
    numberInput.style.color = 'black';
    
}
function plus(){
    counter++;
    numberInput.value = counter;
    numberInput.style.color = 'green';
    
}