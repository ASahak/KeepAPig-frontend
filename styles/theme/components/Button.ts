export default {
  sizes: {},
  variants: {
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
