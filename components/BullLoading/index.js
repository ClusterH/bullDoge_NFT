
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import LoadingSpinner from './LoadingSpinner'

const useStyles = makeStyles((theme) => ({
  root: props => ({
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: props.height ? props.height : '100%'
  })
}));

const BullLoading = ({
  loading,
  height,
  size = 100
}) => {
  const classes = useStyles({ height });

  return (
    <div className={classes.root}>
      <LoadingSpinner
        loading={loading}
        size={size} />
    </div>
  );
};

export default memo(BullLoading);