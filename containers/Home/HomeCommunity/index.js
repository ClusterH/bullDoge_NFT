
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'

import CoinStatus from './CoinStatus'
import { COIN_GROUP_ICON_PATH } from 'utils/constants/image-paths'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(15, 0),
  },
  container: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    }
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)
  },
  description: {
    fontSize: 16,
    marginBottom: theme.spacing(2)
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    maxWidth: 440,
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2.5),
    }
  }
}));

const HomeCommunity = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <section className={classes.root}>
      <div className={commonClasses.containerWidth}>
        <CoinStatus />
        <Grid container className={classes.container} >
          <Grid item sm={12} md={6}>
            <Typography
              color='textSecondary'
              className={classes.header}
            >
              BULLDOGE Token
            </Typography>

            <Typography
              color='textSecondary'
              className={classes.title}
            >
              Community Driven
            </Typography>
            <Typography
              color='textSecondary'
              className={classes.description}
            >
              Community driven & fair lauch. 100% of the supply was airdropped to
              DOGEN holders and the BullDoge team locked the initial liquidity forever.
            </Typography>

            <Typography
              color='textSecondary'
              className={classes.title}
            >
              Automatic LP
            </Typography>
            <Typography
              color='textSecondary'
              className={classes.description}
            >
              Every trade contributes towards automatically generating liquidity
              that goes into multiple pools.
            </Typography>

            <Typography
              color='textSecondary'
              className={classes.title}
            >
              RFI Static Rewards
            </Typography>
            <Typography
              color='textSecondary'
              className={classes.description}
            >
              Holders earn passive reward through static reflection as they watch
              their balance of BullDoge grow indefinitely.
            </Typography>

            <Typography
              color='textSecondary'
              className={classes.title}
            >
              3D NFT Yield
            </Typography>
            <Typography
              color='textSecondary'
              className={classes.description}
            >
              BullDoge holders support featured artists by staking BullDoge LP to earn
              certifiably-rare quality digital 3D models of the BullDoge intended for
              use in VR.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} className={classes.imageContainer} >
            <img
              alt='coin group'
              src={COIN_GROUP_ICON_PATH}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default memo(HomeCommunity);