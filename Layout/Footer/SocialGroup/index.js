import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TelegramIcon from 'components/Icons/TelegramIcon'
import TwitterIcon from 'components/Icons/TwitterIcon'
import MediumIcon from 'components/Icons/MediumIcon'

const useStyles = makeStyles((theme) => ({
  group: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'center'
  },
  socialIcon: {
    marginRight: theme.spacing(3)
  }
}));

const SocialGroup = () => {
  const classes = useStyles();

  return (
    <div className={classes.group}>
      <MediumIcon className={classes.socialIcon} />
      <TelegramIcon className={classes.socialIcon} />
      <TwitterIcon className={classes.socialIcon} />
    </div>
  );
};

export default memo(SocialGroup);
