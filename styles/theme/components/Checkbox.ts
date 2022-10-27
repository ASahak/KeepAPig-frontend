export default {
  sizes: {},
  variants: {
    darcula: () => ({
      control: {
        borderColor: 'gray.200',
        _checked: {
          borderColor: 'darculaDark.700',
          bg: 'darculaDark.700',
          color: 'white',
          _hover: {
            borderColor: 'darculaDark.700',
            bg: 'darculaDark.700',
            color: 'white'
          }
        }
      }
    })
  }
};
