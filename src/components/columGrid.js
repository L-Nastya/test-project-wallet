
export const colums = [
    {
        field: 'date', type: 'date', headerName: 'Date', width: 120, headerAlign: 'left', sort: 'desc',
    },
    { field: 'type', headerName: 'Type', width: 120, headerAlign: 'center', sortable: false },
    { field: 'category', headerName: 'Category', width: 100, headerAlign: 'left', sortable: false },
    { field: 'comment', headerName: 'Comment', width: 145, headerAlign: 'left' , sortable: false},
    { field: 'sum', headerName: 'Sum', width: 110, headerAlign: 'right', sortable: false },
    { field: 'balance', headerName: 'Balance', width: 110, headerAlign: 'right', sortable: false },
];


// function dateComparator(date1, date2) {
//   var date1Number = monthToComparableNumber(date1);
//   var date2Number = monthToComparableNumber(date2);
//   if (date1Number === null && date2Number === null) {
//     return 0;
//   }
//   if (date1Number === null) {
//     return -1;
//   }
//   if (date2Number === null) {
//     return 1;
//   }
//   return date1Number - date2Number;
// }
// function monthToComparableNumber(date) {
//     if (date === undefined || date === null || date.length !== 10) {
//         return null;
//     }
//     var yearNumber = date.substring(6, 10);
//     var monthNumber = date.substring(3, 5);
//     var dayNumber = date.substring(0, 2);
//     var result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
//     return result;
// }