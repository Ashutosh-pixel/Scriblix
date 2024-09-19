import React from 'react'
import useStore from '../store/Store';

export default function NewFolderButton() {

  const setIsFolderOpen = useStore((state) => state.setIsFolderOpen);

  return (
    <div className='m-4'>
      <button onClick={() => setIsFolderOpen(true)}>NewFolderButton</button>
    </div>
  )
}
