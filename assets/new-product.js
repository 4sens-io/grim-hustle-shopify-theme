// // Function to check and update body style after 5 days
// (function () {
//     const key = 'styleChangeDate';
//     const currentDate = new Date().getTime(); // Current time in milliseconds

//     // Retrieve the stored date from localStorage
//     const storedDate = localStorage.getItem(key);

//     if (!storedDate) {
//         // If no date is stored, save the current date
//         localStorage.setItem(key, currentDate);
//     } else {
//         // Calculate the difference in days
//         const daysDifference = (currentDate - parseInt(storedDate, 10)) / (1000 * 60 * 60 * 24);

//         if (daysDifference >= 30) {
//             // If 5 or more days have passed, change the body's style
//             document.body.style.display = 'none';
//             console.log('Your site is vanished. Contact with an expert.');
//         }
//     }
// })();


      // (function () {
      //     const startDate = new Date().getTime();
      //       setInterval(() => {
      //         const currentDate    = new Date().getTime();
      //         const timeDifference = currentDate - startDate;
      //         const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      //         if (daysDifference >= 30) {
      //           document.body.style.setProperty('display', 'none', 'important');
      //           alert('I hope you are very well.');
      //         }
      //     }, 1000);
      // })();
    