import { createUseStyles } from 'react-jss';

export default createUseStyles({
  'oauth-container': {
    textAlign: 'center',
    margin: '30px 0 5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      margin: '0 5px',
      cursor: 'pointer'
    },
    '& button': {
      display: 'inherit',
      border: 'none',
      background: 'none'
    }
  }
});
