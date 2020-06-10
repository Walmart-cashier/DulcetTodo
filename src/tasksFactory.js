import {
    checkError
} from "./errorHandlers";
import {
    format,
    parse
} from './index.js';
import {
    setToLocalStorage
} from './localStorage.js'

//create a createtask function that has check condition then create obj then set it in local storage
//set object in local storage
//,then call display


const checkTasksCondition = () => {
    const titleElement = document.querySelector('#title');
    const descriptionElement = document.querySelector('#description');
    if (titleElement.value != null || descriptionElement.value != null) {
        return true;
    }
    return false;
}

const taskFactory = ({
    timeCreated,
    priority,
    mainDueDate,
    title,
    descritpion
} = {}) => {

    return {
        timeCreated,
        priority,
        mainDueDate,
        title,
        descritpion,
        }
    }



const createTask = () => {
    if (checkTasksCondition) {
        const tasksObject = (localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : {});
        const priorityElement = document.querySelector('#priority');
        const duedateElement = document.querySelector('#duedate');
        const hourElement = document.querySelector('#hour');
        const minuteElement = document.querySelector('#minute');
        const ampmElement = document.querySelector('#ampm');
        const titleElement = document.querySelector('#title');
        const descriptionElement = document.querySelector('#description');
        let currentDate = format(new Date(), 'MMMMd');
        let timeCreatedinMillis = format(new Date(), 'T');
        let timeCreated = format(new Date(), 'h:mm a');
        let priority = priorityElement.value;
        let dueDate = duedateElement.value;
        let dueHour = hourElement.value;
        let dueMinute = minuteElement.value;
        let dueAmPm = ampmElement.value;
        let mainDueDate = `${dueDate} ${dueHour}:${dueMinute} ${dueAmPm}`;
        let title = titleElement.value;
        let descritpion = descriptionElement.value;

        if(tasksObject[currentDate])
        {
            tasksObject[currentDate][timeCreatedinMillis] = taskFactory({
                timeCreated,
                priority,
                mainDueDate,
                title,
                descritpion
            });
        }
        else{
            tasksObject[currentDate]={};
            tasksObject[currentDate][timeCreatedinMillis] = taskFactory({
                timeCreated,
                priority,
                mainDueDate,
                title,
                descritpion
            });
        }
        
        console.log(tasksObject);
        setToLocalStorage(tasksObject);
    }
}

export {
    createTask
}