
import { memo } from 'react'
import { Typography } from '@material-ui/core'

import BullDialog from 'components/BullDialog'

const BullConfirmDialog = ({
  text = 'Are you sure to proceed this operation?',
  ...rest
}) => {
  return (
    <BullDialog {...rest}>
      <Typography color='textPrimary' variant='h5' align='center'>
        {text}
      </Typography>
    </BullDialog>
  );
}

export default memo(BullConfirmDialog)