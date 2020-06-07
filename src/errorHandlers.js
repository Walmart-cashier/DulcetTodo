

const setError=(text)=>{
    const span=document.querySelector('#errorSpan');
    span.textContent=text;
}
const clearError=()=>{
    const span=document.querySelector('#errorSpan');
    span.textContent="";
}

const checkError=(event,parse,isPast)=>{
    const dateElement=document.querySelector('#duedate');
    clearError();
    let dateValue=parse(dateElement.value,'yyyy-MM-dd',new Date());
    if(isPast(dateValue))
    {
        event.preventDefault();
        setError('Due date already passed ,set new date');
        return false;
    }
    else if(dateElement.validity.valueMissing){
        event.preventDefault();
        setError('set a due date for your task');
    }
}



export {setError,clearError,checkError}