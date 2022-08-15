import { createTheme } from '@mui/material/styles';
import variables from '@/styles/variables';

export default createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&:not(.Mui-error)': {
            color: variables.$input.$hoverBorderColor + ' !important'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFormHelperText-root': {
            '&.Mui-error': {
              marginLeft: 0,
              marginRight: 0
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:not(.Mui-error).Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: variables.$input.$hoverBorderColor
          },
          '&:hover': {
            '&:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: variables.$input.$hoverBorderColor
            }
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontSize: variables.$paragraphSize,
            color: variables.$paragraphGrey
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: variables.$colors.$main + ' !important'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {},
        containedPrimary: {
          backgroundColor: variables.$colors.$main,
          '&:hover': {
            backgroundColor: variables.$colors.$main_more_dark
          }
        }
      }
    }
  }
});
