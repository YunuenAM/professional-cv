import { useContext } from 'react'
import { CVCartContext } from '../Context'

export const useAuthContext = () => {
  const context = useContext(CVCartContext)

  if (context === undefined) {
    throw new Error('useAuthContext should be used inside the AuthProvider')
  }
  return context
}
