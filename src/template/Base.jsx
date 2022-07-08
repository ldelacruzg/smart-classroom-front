import React from 'react'
import Header from './Header'
import { Outlet } from "react-router-dom"

const Base = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default Base