import { createUseStyles } from 'react-jss';

export default createUseStyles({
  '@global': {
    'body, *': {
      fontFamily: 'Roboto',
      margin: '0',
      boxSizing: 'border-box',
      padding: '0'
    },
    '.Toastify__toast-body': {
      fontSize: 14
    }
  }
});
