import * as ERROR_MESSAGES from './customErrorMessages';

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
