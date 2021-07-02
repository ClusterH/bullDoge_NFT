
import {
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      light: '#4791db',
      main: '#F19E4A',
      dark: '#ecebed',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
    },
    danger: {
      main: '#eb196e',
    },
    background: {
      default: '#FC8B23',
      primary: '#C06817',
      secondary: '#7e4e22'
    },
    text: {
      primary: '#7E4E22',
      secondary: '#FFFAF2'
    },
  },
  custom: {
    palette: {
      white: '#FFFFFF',
      lightOrange: '#F8C477',
      orange: '#FAAA60',
      topMenu: '#C99E77',
      footer: '#FFEFB5'
    },
    layout: {
      maxDesktopWidth: 1260,
      topAppBarHeight: 80
    },
  }
}));

export default theme;