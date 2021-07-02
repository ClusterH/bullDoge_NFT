
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import { useCommonStyles } from 'styles/use-styles'
import SOCIALS from 'utils/constants/social'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(6, 0),
    backgroundColor: theme.custom.palette.lightOrange,
  },
  container: {
    width: '100%',
    margin: 0,
  },
  socialContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  socialButton: {
    fontSize: 24,
    minWidth: 200,
    margin: theme.spacing(2)
  }
}));

const HomeNFTs = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <section className={classes.root}>
      <div className={commonClasses.containerWidth}>
        <div className={classes.socialContainer}>
          <OutlinedButton
            href={SOCIALS.TELEGRAM.HREF}
            className={classes.socialButton}
            target='_blank'
            rel='noreferrer'
          >
            TELEGRAM
          </OutlinedButton>
          <OutlinedButton
            href={SOCIALS.TWITTER.HREF}
            className={classes.socialButton}
            target='_blank'
            rel='noreferrer'
          >
            TWITTER
          </OutlinedButton>
          <OutlinedButton
            href={SOCIALS.REDDIT.HREF}
            className={classes.socialButton}
            target='_blank'
            rel='noreferrer'
          >
            REDDIT
          </OutlinedButton>
        </div>
      </div>
    </section>
  );
};

export default memo(HomeNFTs);