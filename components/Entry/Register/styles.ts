import { createUseStyles } from 'react-jss';
import { MediaQuery, Shadow } from '@/styles/mixins';
import variables from '@/styles/variables';

export default createUseStyles({
  'register-container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f5f5f5'
  },
  'register-view': {
    width: 450,
    backgroundColor: '#fff',
    ...Shadow('0px 0px 10px rgba(0, 0, 0, 0.1)'),
    borderRadius: 4,
    padding: '20px 30px',
    ...MediaQuery.down({
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }).sm
  },
  'register-view__title': {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: variables.$colors.$main_more_dark
  },
  'need-account': {
    color: [variables.$paragraphGrey, '!important'],
    fontSize: [variables.$paragraphSize, '!important'],
    '& a': {
      cursor: 'pointer',
      textDecoration: 'underline',
      marginLeft: 5,
      color: 'inherit'
    }
  },
  'chip-container': {
    position: 'relative',
    '& .MuiChip-root': {
      position: 'absolute',
      left: '0',
      right: '0',
      width: '45px',
      borderRadius: '10px',
      margin: 'auto',
      top: '0',
      bottom: '0',
      background: '#fff'
    }
  }
});
