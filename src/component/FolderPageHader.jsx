import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FolderPageHader() {


  return (
    <div className='folderhader w-full flex justify-between'>
      <NavLink to={'/'}>
        back
      </NavLink>
      <div>Folders</div>
      <div>del</div>
    </div>
  )
}
