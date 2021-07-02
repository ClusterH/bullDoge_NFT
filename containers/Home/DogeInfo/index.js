
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'
import clsx from 'clsx'

import { HOME_HEADER_BONE_BACKGROUND_PATH } from 'utils/constants/image-paths'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(5, 0),
    backgroundImage: `url(${HOME_HEADER_BONE_BACKGROUND_PATH})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.custom.palette.orange,
  },
  container: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(5, 0),
  },
  label: {
    fontSize: 18,
    marginBottom: theme.spacing(1)
  },
  value: {
    fontSize: 36,
    fontWeight: 'bold',
  }
}));

const DogeInfo = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <section className={classes.root}>
      <Grid container className={clsx(classes.container, commonClasses.containerWidth)} >
        <Grid item sm={12} md={4}>
          <div className={classes.card}>
            <Typography
              color='textSecondary'
              align='center'
              className={classes.label}
            >
              Holders
            </Typography>
            <Typography
              color='textSecondary'
              align='center'
              className={classes.value}
            >
              2,008,188
            </Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className={classes.card}>
            <Typography
              color='textSecondary'
              align='center'
              className={classes.label}
            >
              Tokens Burned
            </Typography>
            <Typography
              color='textSecondary'
              align='center'
              className={classes.value}
            >
              415,140,144,540,339
            </Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className={classes.card}>
            <Typography
              color='textSecondary'
              align='center'
              className={classes.label}
            >
              Liquidity
            </Typography>
            <Typography
              color='textSecondary'
              align='center'
              className={classes.value}
            >
              $274,549,672
            </Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default memo(DogeInfo);