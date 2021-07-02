
import { makeStyles } from '@material-ui/core/styles'

const useCommonStyles = makeStyles(theme => ({
  containerWidth: {
    position: 'relative',
    width: '100%',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    maxWidth: theme.custom.layout.maxDesktopWidth,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  breakWords: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflowWrap: 'break-word',
  }
}));

export {
  useCommonStyles
};
