import React from 'react'
import useStore from '../store/Store';

export default function NewFolderButton() {

  const setIsFolderOpen = useStore((state) => state.setIsFolderOpen);

  return (
    <div onClick={() => setIsFolderOpen(true)}>NewFolderButton</div>
  )
}
