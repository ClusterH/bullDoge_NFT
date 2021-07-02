
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'

import ButtonLink from 'components/UI/Buttons/ButtonLink'

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: 18,
    borderRadius: 10,
    textTransform: 'capitalize',
    border: `1px solid ${theme.palette.secondary.main}`
  },
  disabled: {
    opacity: 0.6,
    color: `${theme.palette.primary.main} !important`,
    border: `2px solid ${theme.palette.primary.main} !important`,
  }
}));

const OutlinedButton = React.forwardRef(({
  className,
  classes: propClasses = {},
  color = 'secondary',
  href,
  loading,
  disabled,
  children,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <Button
      ref={ref}
      href={href}
      component={href ? ButtonLink : 'button'}
      className={clsx(className, classes.root)}
      classes={{
        ...propClasses,
        disabled: classes.disabled
      }}
      color={color}
      variant='outlined'
      disabled={loading || disabled}
      {...rest}
    >
      {children}
    </Button>
  );
});

export default memo(OutlinedButton);
