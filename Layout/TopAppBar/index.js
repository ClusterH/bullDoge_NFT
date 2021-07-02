
import { memo } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import Logo from 'components/Logo'
import NavBarMenu from './NavBarMenu'
import ConnectWallet from './ConnectWallet'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: theme.custom.layout.topAppBarHeight,
    backgroundColor: theme.palette.text.secondary
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menu: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const TopAppBar = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <AppBar
      position='relative'
      className={classes.appBar}
    >
      <Toolbar className={clsx(classes.toolBar, commonClasses.containerWidth)}>
        <div className={classes.menu}>
          <Logo />
          <NavBarMenu />
        </div>
        <ConnectWallet />
      </Toolbar>
    </AppBar>
  );
};

export default memo(TopAppBar);