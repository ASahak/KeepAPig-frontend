export default {
  sizes: {},
  variants: {
    'google-auth-btn': {
      backgroundColor: '#fff',
      border: '1px solid #dadce0',
      borderRadius: '4px',
      color: '#3c4043',
      height: '32px',
      position: 'absolute',
      left: '0',
      zIndex: 2,
      width: '100%'
    },
    darcula: () => ({
      borderRadius: 3,
      bg: 'darculaDark.600',
      color: 'white',
      _hover: {
        _disabled: {
          bg: 'darculaDark.700'
        },
        bg: 'darculaDark.700'
      }
    })
  }
};
