import {type FC} from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Private:FC = () => {
  const isAuthenticated = false

  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/" replace />
  )
}
