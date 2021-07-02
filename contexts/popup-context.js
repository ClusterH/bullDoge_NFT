import { createContext, useState, useCallback, useContext } from 'react'

import BullConfirmDialog from 'parts/BullConfirmDialog'

const initInfo = {
  title: 'Alert',
  text: '',
  cancelLabel: 'Ok'
}
const PopupContext = createContext(null)

const PopupProvider = ({ children }) => {

  const [open, setOpen] = useState(false)
  const [popupInfo, setPopupInfo] = useState(initInfo)

  const closePopUpHandler = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <PopupContext.Provider
      value={{
        setOpen,
        setPopupInfo,
      }}
    >
      {open &&
        <BullConfirmDialog
          open={open}
          title={popupInfo?.title}
          text={popupInfo?.text}
          cancelLabel={popupInfo?.cancelLabel}
          onCancel={closePopUpHandler}
          onClose={closePopUpHandler}
        />
      }
      {children}
    </PopupContext.Provider>
  )
}

const usePopup = () => {
  const {
    setOpen,
    setPopupInfo
  } = useContext(PopupContext)

  const setPopUp = useCallback((data) => {
    setPopupInfo({
      ...initInfo,
      ...data
    })
    setOpen(true)
  }, [setPopupInfo, setOpen])

  return {
    setPopUp
  }
}

export {
  PopupProvider,
  usePopup
}