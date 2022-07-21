import Vue from 'vue'

//months of the year
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

//const that will have a value parameter
//and will be returning the funciton formatDate(value) with value
//entered as an argument.
const dateFilter = value => {
  return formatDate(value); //format(value) => function to be executed.
};

//function that will format the date input
function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = months[month] + " " +  day + "," + " " + year; // month will select exact month within brackets from months const
  return formattedDate; //formatted date will be retunred
}

Vue.filter('date', dateFilter)
