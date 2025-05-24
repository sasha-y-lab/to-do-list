export const formatDate = () => {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    
    const formattedTodaysDate = `${year}, ${month}, ${day}`;
    console.log(formattedTodaysDate);


    const { format } = require("date-fns");

   // format(new Date(2025, 5, 11), "MMM dd ''yy");
    //=> 'May 11 '25' //
    
    const todayDate = format(new Date(formattedTodaysDate), "MMM dd ''yy");
        
      console.log(todayDate);

     // const dueDate = format(new Date(dateforminput), "MMM dd ''yy");

      return { formattedTodaysDate, todayDate };

}


export const distanceOfDueDate = () => {

const formattodaydate = formatDate();

    const result = formatDistance(formattodaydate.todayDate, new Date(2025, 8, 1));

    console.log(result);
}
