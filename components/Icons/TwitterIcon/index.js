
import { memo } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import SOCIALS from 'utils/constants/social'

const useStyles = makeStyles(() => ({
  root: {
    width: 40,
    height: 40
  }
}));

const TwitterIcon = ({
  className,
}) => {
  const classes = useStyles();

  return (
    <Link href={SOCIALS.TWITTER.HREF}>
      <a aria-label={SOCIALS.TWITTER.LABEL} target='_blank' rel='noreferrer'>
        <img
          alt={SOCIALS.TWITTER.LABEL}
          src={SOCIALS.TWITTER.ICON}
          className={clsx(classes.root, className)}
        />
      </a>
    </Link>
  )
}

export default memo(TwitterIcon);
