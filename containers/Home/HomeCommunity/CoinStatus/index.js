
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: -180,
    width: 'calc(100% - 64px)',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: 'unset',
      width: 'calc(100% + 40px)',
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    borderRadius: 10,
    backgroundColor: theme.palette.background.primary,
    boxShadow: '0px 0px 10px rgba(201, 158, 119, 0.5)'
  },
  label: {
    fontSize: 18,
    marginBottom: theme.spacing(1)
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  }
}));

const CoinStatus = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.card}>
          <Typography
            color='textSecondary'
            className={classes.label}
          >
            Current Price
          </Typography>
          <Typography
            color='textSecondary'
            className={classes.value}
          >
            0.000007725
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.card}>
          <Typography
            color='textSecondary'
            className={classes.label}
          >
            Holders
          </Typography>
          <Typography
            color='textSecondary'
            className={classes.value}
          >
            2,008,188
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.card}>
          <Typography
            color='textSecondary'
            className={classes.label}
          >
            Supply
          </Typography>
          <Typography
            color='textSecondary'
            className={classes.value}
          >
            584,856,880,613,862.5
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.card}>
          <Typography
            color='textSecondary'
            className={classes.label}
          >
            Market Cap
          </Typography>
          <Typography
            color='textSecondary'
            className={classes.value}
          >
            $4,518,019,402.74
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default memo(CoinStatus);