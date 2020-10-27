import * as ERROR_MESSAGES from 'firebase/customErrorMessages';

export const generateUnicId = () => String(Math.floor(Math.random() * 10 ** 20));

export const getFormatDate = (dataInMiliSecond) => {
  const result = new Date(dataInMiliSecond);

  const year = result.getFullYear();
  const month = result.getMonth() + 1;
  const day = result.getDate();

  // return 14-10-2020

  return `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`;
};

export const getCurrentMonth = () => {
  const date = new Date();
  const options = { month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('pl-PL', options).format(date);
};

export const getFirebaseErrorMessage = (code) => {
  let message = null;

  console.log(`HELLO: ${code}`);

  switch (code) {
    case 'auth/user-not-found':
      message = ERROR_MESSAGES.USER_NOT_FOUND;
      break;

    case 'auth/email-already-in-use':
      message = ERROR_MESSAGES.EMAIL_ALREADY_EXIST;
      break;

    case 'auth/internal-error':
      message = ERROR_MESSAGES.INTERNAL_ERROR;
      break;

    case 'auth/invalid-credential':
      message = ERROR_MESSAGES.INVALID_CREDENTIAL;
      break;

    case 'auth/invalid-email':
      message = ERROR_MESSAGES.INVALID_EMAIL_FORMAT;
      break;

    case 'auth/wrong-password':
      message = ERROR_MESSAGES.INVALID_PASSWORD_FORMAT;
      break;

    default:
      message = ERROR_MESSAGES.DEFAULT_MESSAGE;
      break;
  }
  return message;
};

export const getColor = (index) => {
  const colors = [
    '#2C73D2',
    '#7ac77f',
    '#FF6F91',
    '#f3d790',
    '#c5ee5a',
    '#57b9e1',
    '#f09950',
    '#d74946',
    '#c3a9b7',
  ];

  let colorIndex = index;

  if (index > colors.length - 1) {
    colorIndex = Math.floor(Math.random() * colors.length);
  }

  return colors[colorIndex];
};
