
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import HomeHeader from './HomeHeader'
import HomeCommunity from './HomeCommunity'
import DogeInfo from './DogeInfo'
import HomeNFTs from './HomeNFTs'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HomeHeader />
      <HomeCommunity />
      <DogeInfo />
      <HomeNFTs />
    </div>
  )
}

export default memo(Home)