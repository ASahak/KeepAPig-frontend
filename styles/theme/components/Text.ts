export default {
  sizes: {
    sm: {
      fontSize: '12px'
    }
  },
  variants: {
    errorMessage: ({ colorScheme: c }: { colorScheme: string }) => ({
      color: `${c}.500`
    }),
    base: ({ colorScheme: c }: { colorScheme: string }) => ({
      color: c || '#fff'
    })
  }
};
