
import { memo } from 'react'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import LINKS from 'utils/constants/links'
import { LOGO_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
  picture: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'unset'
  },
  img: {
    height: 58,
    objectFit: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1,
    marginLeft: theme.spacing(1)
  }
}));

const Logo = ({
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Link href={LINKS.HOME.HREF}>
      <a className={clsx(classes.container, className)}>
        <picture className={classes.picture} {...rest}>
          <source srcSet={LOGO_IMAGE_PATH} />
          <img
            className={classes.img}
            src={LOGO_IMAGE_PATH}
            alt='logo'
          />
        </picture>
        <Typography color='textPrimary' className={classes.title}>
          BullDoge
        </Typography>
      </a>
    </Link>
  )
}

export default memo(Logo);
