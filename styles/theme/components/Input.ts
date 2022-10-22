export default {
  sizes: {
  },
  variants: {
    whiteTinted: () => ({
      field: {
        bg: 'white',
        borderRadius: 3,
        color: 'gray.800',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray.300',
        _hover: {
          borderColor: 'gray.400'
        }
      }
    }),
  },
};
