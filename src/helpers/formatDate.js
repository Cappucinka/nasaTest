export const formatDate = (date) => {
  let result = date.split('-').reverse();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  let month = Number(result.splice(1, 1));
  return result[0] + ' ' + months[month - 1] + ', ' + result[1];
};
