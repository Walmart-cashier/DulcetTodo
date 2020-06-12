// datefns library
import {
    lightFormat,
    format,
    parse,
    isPast
} from 'date-fns'
import {
    generateHomepageContent
} from './dynamicHomePage.js'
import {
    generateHomepageEvents
} from './homePageEventListeners.js'
import {
    setQuote,setCurrentDate
} from './quotesGenerator.js'

// new issue when choosing old date then task doesnt get added
//later add little cute animation
//add feature when hovered over circle show the priority and its meaning
//on clearlist make an absolute position middle of screen button , to confirm delete all ! if yes then delete all .
//see wordpress or shopify tuts to create a food order app
//now i'll see if anything is edited on view page then set the changes to the object and go back
//somehow make the maindue date into march 1st 2nd etc

setQuote(format(new Date(), 'eee'));
setCurrentDate(format);
generateHomepageContent();
generateHomepageEvents();



export{format,parse,isPast}