//jshint esversion:6

module.exports.getDate = getDate;
exports.getDay = getDay;

function getDate(){
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}


function getDay(){
  let today = new Date();

  let options = {
    weekday: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}
