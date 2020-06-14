
import {
    format,
    parse,
    isTomorrow
} from './index.js';
import {
    setToLocalStorage
} from './localStorage.js';
   
const checkTasksCondition = () => {
    const titleElement = document.querySelector('#title');
    const descriptionElement = document.querySelector('#description');
    if (titleElement.value != "" || descriptionElement.value != "") {
        return true;
    }
    return false;
}

const taskFactory = ({
    timeCreated,
    priority,
    mainDueDate,
    title,
    description
} = {}) => {

    return {
        timeCreated,
        priority,
        mainDueDate,
        title,
        description,
        }
    }

const doSomethingWithTime=(dueDate,dueHour,dueMinute,dueAmPm)=>{
    let dueDateArr=dueDate.split('-');
    let testHour=(dueAmPm=='PM'&&dueHour!=12)?dueHour+12:dueHour;
    
    if(isTomorrow(new Date(dueDateArr[0],dueDateArr[1]-1,dueDateArr[2],testHour,dueMinute)))
    {
        return `Tomorrow ${dueHour}:${dueMinute} ${dueAmPm}`;
    }
    else if(dueDate==null)
    {
        return ``;
    }

    let testDate=format(new Date(dueDateArr[0],dueDateArr[1]-1,dueDateArr[2],testHour,dueMinute),'MMMMdo h:mm a');
    return testDate;
    
}


const createTask = () => {
    if (checkTasksCondition()) {
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
        // dueMinute=(dueMinute=='')?'':`:${dueMinute}`;
        let dueAmPm = ampmElement.value;
        // let mainDueDate = `${dueDate} ${dueHour} ${dueMinute} ${dueAmPm}`;
        let mainDueDate=doSomethingWithTime(dueDate,dueHour,dueMinute,dueAmPm);
        let title = titleElement.value;
        let description = descriptionElement.value;
        if(tasksObject[currentDate])
        {
            tasksObject[currentDate][timeCreatedinMillis] = taskFactory({
                timeCreated,
                priority,
                mainDueDate,
                title,
                description
            });
        }
        else{
            tasksObject[currentDate]={};
            tasksObject[currentDate][timeCreatedinMillis] = taskFactory({
                timeCreated,
                priority,
                mainDueDate,
                title,
                description
            });
        }
        setToLocalStorage(tasksObject);
    }
}

export {
    createTask
}