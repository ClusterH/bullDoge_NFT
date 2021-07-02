import { memo, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { injected } from 'libs/web3-connectors'
import BullIdenticon from 'components/BullIdenticon'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import useEagerConnect from 'utils/hooks/useEagerConnect'
import useInactiveListener from 'utils/hooks/useInactiveListener'
import getEllipsis from 'utils/helpers/getEllipsis'

const useStyles = makeStyles((theme) => ({
  account: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: `2px dashed ${theme.palette.primary.main}`,
    padding: theme.spacing(0.5, 1.5)
  },
  connect: {
    margin: theme.spacing(0, 1)
  }
}));

const ConnectWallet = () => {
  const classes = useStyles()
  const [activatingConnector, setActivatingConnector] = useState();

  const {
    account,
    connector,
    activate,
    deactivate,
    active,
    error
  } = useWeb3React();

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const walletHandler = () => {
    if ((active || error)) {
      deactivate();
      return
    }
    setActivatingConnector(injected);
    activate(injected);
  }

  return (
    (active || error)
      ? (
        <div
          className={classes.account}
          onClick={walletHandler}
        >
          <Typography
            variant='body2'
            color='primary'
          >
            {getEllipsis(account || '')}
          </Typography>
          <BullIdenticon value={account} />
        </div>
      ) : (
        <ContainedButton
          className={classes.connect}
          onClick={walletHandler}
        >
          Connect Wallet
        </ContainedButton>
      )
  );
};

export default memo(ConnectWallet);
