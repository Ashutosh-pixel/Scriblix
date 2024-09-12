import React from 'react'
import FolderPageHader from './../component/FolderPageHader';
import FoldersContainer from './../component/FoldersContainer';
import NewFolderButton from './../component/NewFolderButton';
import Dialogbox from '../component/Dialogbox';
import useStore from '../store/Store';

export default function FoldersPage() {

  const isfolderopen = useStore((state) => state.isfolderopen);

  return (
    <div className="w-4/5 flex flex-col items-center">
        <FolderPageHader/>
        <FoldersContainer/>
        <NewFolderButton/>
        {isfolderopen? <Dialogbox/>:<></>}
    </div>
  )
}
