
import MAIN_DOGEN_ABI from 'libs/abis/main/dogen.json'
import TEST_DOGEN_ABI from 'libs/abis/test/dogen.json'
import { IS_MAINNET } from 'config'

const DOGEN_ABI = IS_MAINNET ? MAIN_DOGEN_ABI : TEST_DOGEN_ABI

export {
    DOGEN_ABI,
}