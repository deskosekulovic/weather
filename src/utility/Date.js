const myDate = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const date = new Date();
  const num = date.getDate();

  let res = num % 10;

  switch (res) {
  case 1:
  case 21:
  case 31:
    res = num + 'st';
    break;
  case 2:
  case 22:
    res = num + 'nd';
    break;
  case 3:
  case 23:
    res = num + 'rd';
    break;
  default:
    res = num + 'th';
  }

  return months[date.getMonth()] + ' ' + res;
};

export default myDate;
