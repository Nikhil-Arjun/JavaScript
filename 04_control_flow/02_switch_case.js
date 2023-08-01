// Syntax ->
// switch (key) {
//      case value

//          break;

//       default:
//            break;
// }

// const month = 3;
const month = 'March';

switch (month) {
  case 'January':
    console.log('January');
    break;

  case 'February':
    console.log('February');
    break;

  case 'March':
    console.log('March');
    break;

  case 'April':
    console.log('April');
    break;

  case 'May':
    console.log('May');

  default:
    console.log('Remaining months');
    break;
}
