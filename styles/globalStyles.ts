export default {
  global: {
    '#__next': {
      height: '100vh'
    },
    'body, *': {
      fontFamily: 'Roboto',
      margin: '0',
      boxSizing: 'border-box',
      padding: '0'
    },
    '.Toastify__toast-body': {
      fontSize: 14
    },
    '.form__full-width': {
      width: '100%'
    },
    '#custom-loader': {
      width: '48px',
      height: '48px',
      border: '5px solid #FFF',
      borderBottomColor: 'transparent',
      borderRadius: '50%',
      display: 'inline-block',
      boxSizing: 'border-box',
      animation: 'rotation 1s linear infinite'
    },
    '@keyframes rotation': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    }
  }
};
