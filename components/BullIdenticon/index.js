import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Identicon from 'react-identicons'
import clsx from 'clsx'

import COLORS from 'utils/constants/colors'

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '50%'
  }
}));

const BullIdenticon = React.forwardRef(({
  value = 'Not found',
  size = 16,
  className
}, ref) => {
  const classes = useStyles();

  return (
    <Identicon
      ref={ref}
      className={clsx(classes.root, className)}
      string={value}
      size={size}
      padding={1}
      palette={COLORS}
      count={4}
      bg='#ffb418'
    />
  );
});

export default memo(BullIdenticon)