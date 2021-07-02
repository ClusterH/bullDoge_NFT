
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'
import clsx from 'clsx'

import ContainedButton from 'components/UI/Buttons/ContainedButton'
import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import {
  BULLDOGE_FACE_ICON_PATH,
  HOME_HEADER_BONE_BACKGROUND_PATH
} from 'utils/constants/image-paths'
import LINKS from 'utils/constants/links'
import SOCIALS from 'utils/constants/social'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(15, 0),
    backgroundImage: `url(${HOME_HEADER_BONE_BACKGROUND_PATH})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.background.secondary,
  },
  container: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    }
  },
  title: {
    fontSize: 96,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: 64,
    },
  },
  description: {
    fontSize: 18,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  buttonContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  nftButton: {
    fontSize: 24,
    minWidth: 180,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.text.secondary,
  },
  buyButton: {
    fontSize: 24,
    marginLeft: theme.spacing(3),
    minWidth: 180,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: theme.spacing(2.5),
    }
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    maxWidth: 500,
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2.5),
    }
  }
}));

const HomeHeader = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <section className={classes.root}>
      <Grid container className={clsx(classes.container, commonClasses.containerWidth)} >
        <Grid item sm={12} md={7}>
          <Typography
            variant='h5'
            color='textSecondary'
          >
            Farm
          </Typography>
          <Typography
            variant='h1'
            color='textSecondary'
            className={classes.title}
          >
            BullDoge
          </Typography>
          <Typography
            color='textSecondary'
            className={classes.description}
          >
            The BullDoge Protocol is a community driven, fair launched DeFi Token
            with an NFT Farm where users stake BullDoge to get Rice and use Rice
            to buy a limited-edition 3D NFT of a BullDoge intended for use in VR.
          </Typography>

          <div className={classes.buttonContainer}>
            <ContainedButton
              href={LINKS.NFT_FARM.HREF}
              className={classes.nftButton}
            >
              Farm 3D NFT
            </ContainedButton>
            <OutlinedButton
              href={SOCIALS.PANCAKE_SWAP.HREF}
              className={classes.buyButton}
              target='_blank'
              rel='noreferrer'
            >
              Buy BullDoge
            </OutlinedButton>
            <OutlinedButton
              href={SOCIALS.MAKE_LP.HREF}
              className={classes.buyButton}
              target='_blank'
              rel='noreferrer'
            >
              Make LP
            </OutlinedButton>
          </div>
        </Grid>
        <Grid item sm={12} md={5} className={classes.imageContainer} >
          <img
            alt='bulldoge face'
            src={BULLDOGE_FACE_ICON_PATH}
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default memo(HomeHeader);