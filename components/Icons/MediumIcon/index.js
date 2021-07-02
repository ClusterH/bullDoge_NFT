
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

const MediumIcon = ({
  className
}) => {
  const classes = useStyles();

  return (
    <Link href={SOCIALS.MEDIUM.HREF}>
      <a aria-label={SOCIALS.MEDIUM.LABEL} target='_blank' rel='noreferrer'>
        <img
          alt={SOCIALS.MEDIUM.LABEL}
          src={SOCIALS.MEDIUM.ICON}
          className={clsx(classes.root, className)}
        />
      </a>
    </Link>
  )
}

export default memo(MediumIcon);
