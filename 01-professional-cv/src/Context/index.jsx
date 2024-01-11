import { createContext } from 'react'

const CVCartContext = createContext()

export const CVCartProvider = ({ children }) => {
  return (
    <CVCartContext.Provider>

      {children}

    </CVCartContext.Provider>

  )
}
