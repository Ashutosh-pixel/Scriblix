import React, { useEffect } from 'react';
import FolderPageHader from './../component/FolderPageHader';
import FoldersContainer from './../component/FoldersContainer';
import NewFolderButton from './../component/NewFolderButton';
import Dialogbox from '../component/Dialogbox';
import useStore from '../store/Store';

export default function FoldersPage() {
  const isfolderopen = useStore((state) => state.isfolderopen);


  return (
    <div className="folderpage w-4/5 flex flex-col relative h-full">
      <div className="w-full flex flex-col items-center z-0">
        <FolderPageHader />
        <FoldersContainer />
        <NewFolderButton />
      </div>

      {/* Render the Dialogbox if folder creation is open */}
      {isfolderopen && (
        <>
          {/* Backdrop Layer */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

          {/* Dialog Box */}
          <div className="fixed z-50 flex items-center justify-center inset-0">
            <Dialogbox />
          </div>
        </>
      )}
    </div>
  );
}
