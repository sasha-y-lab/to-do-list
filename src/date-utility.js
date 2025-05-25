import { mytoDOs } from "./todo-logic.js";

import { formatDistance, format, isAfter } from 'date-fns';

export const formatDate = () => {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    
    const formattedTodaysDate = `${year}, ${month}, ${day}`;
    console.log(formattedTodaysDate);


   // const { format } = require("date-fns");

   // format(new Date(2025, 5, 11), "MMM dd ''yy");
    //=> 'May 11 '25' //
    
    const todayDate = format(new Date(formattedTodaysDate), "MMM dd ''yy");
        
      console.log(todayDate);

     // const dueDate = format(new Date(dateforminput), "MMM dd ''yy");

      return { formattedTodaysDate, todayDate };

}


export const distanceOfDueDate = () => {



const formattodaydate = formatDate();

    const result = formatDistance(formattodaydate.todayDate, format(new Date(2025, 8, 1), "MMM dd ''yy"));

    console.log("what is the distance in days from today to Augut 1st 2025?:", result);
}


export const upcomingTasksDueDates = () => {

    const formattodaydate = formatDate();

    const tasks = mytoDOs.filter(item => item.type === 'task' && item.completed === false && item.dueDate > formattodaydate.todayDate);
console.log(tasks);

const upcomingDueDates = tasks.length;

  console.log(upcomingDueDates);


  const tasksDueDates = mytoDOs.find(item => item.type === 'task' && item.completed === false);

    const result = isAfter(new Date(tasksDueDates.dueDate), Date.now());

    console.log("upcoming tasks is after today: ", result);

    return { upcomingDueDates };

}