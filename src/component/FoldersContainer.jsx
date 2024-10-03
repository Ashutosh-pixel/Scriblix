import React, { useEffect, useState } from 'react'
import useStore from '../store/Store';
import { useNavigate } from 'react-router-dom';
import { event } from '@tauri-apps/api';
import { createDir, BaseDirectory, renameFile, readDir } from '@tauri-apps/api/fs';

export default function FoldersContainer() {

  let folderArray = useStore((state) => state.folderArray);
  const addFolder = useStore((state) => state.addFolder);
  const foldersMap = useStore((state) => state.foldersMap);


  const [isEditable, setIsEditable] = useState(Array(folderArray.length).fill(false));
  const [duplicateArray, setDuplicateArray] = useState([]);

  const [oldpath, setOldpath] = useState('');
  let [newpath, setNewpath] = useState('');


  const clickHandler = (e, index) => {
    const updatedArray = [...folderArray];
    updatedArray[index] = e.target.value;
    setDuplicateArray(updatedArray);
    folderArray[index] = e.target.value;
  }


  // rename button 
  const toggleEditable = (index, item) => {
    const updatedEditableState = [...isEditable];
    updatedEditableState[index] = !updatedEditableState[index];
    setIsEditable(updatedEditableState);
    folderArray[index] = item.trim();
    if (!isEditable[index]) {
      setOldpath(folderArray[index]);
    }
    else {
      if (!foldersMap.has(folderArray[index])) {
        foldersMap.delete(oldpath);
        newpath = folderArray[index];
        setNewpath(newpath);
        renameFolder(oldpath, newpath);
        console.log(folderArray);
        foldersMap.set(folderArray[index], 1);
      }
      else {
        console.log("already exists");
        folderArray[index] = oldpath;
      }
    }
  };


  // render the all folders names from local storage
  async function getAllFolders() {
    try {
      const entries = await readDir('noteapp/folder/', { dir: BaseDirectory.Home, recursive: true });
      entries.forEach(folder => {
        if (!foldersMap.has(folder.name)) {
          addFolder(folder.name);
          foldersMap.set(folder.name, 1);
          console.log('Folder name:', folder);
        }
      });
    } catch (error) {
      console.log('Error in reading folder name', error);
    }
  }

  useEffect(() => {
    getAllFolders();
  }, [])

  async function renameFolder(oldfoldername, newfoldername) {
    try {
      const oldpath = `noteapp/folder/${oldfoldername}`;
      const newpath = `noteapp/folder/${newfoldername}`;

      await renameFile(oldpath, newpath, { dir: BaseDirectory.Home })
      console.log(`Folder renamed from '${oldpath}' to '${newpath}'`);
    } catch (error) {
      console.error('Error renaming folder:', error);
    }

  }

  return (
    <div className='folderscontainer mt-4 w-full flex gap-2 select-none flex-wrap'>
      {folderArray.map((item, index) => {
        return <div key={index} className='parent w-1/6 bg-white rounded-md h-52 flex flex-col justify-evenly items-center shadow-md cursor-pointer'>
          <img className='w-32' src="/src/assets/foldericon.png" alt="" />
          <div className='flex items-center justify-center gap-2'>
            <span className='foldername w-2/3'>
              <input className={`w-full text-center ${isEditable[index] ? 'focus:outline-none border-b border-transparent focus:border-orange-400' : 'border-transparent cursor-pointer'} focus:outline-none`} value={!isEditable[index] ? item.trim() : item} placeholder={!item ? "Untitled" : ""} onChange={(e) => clickHandler(e, index)} readOnly={!isEditable[index]} type="text" name="" id="" />
            </span>
            <span onClick={() => toggleEditable(index, item)}>
              {isEditable[index] ? 'S' : ':'}
            </span>
          </div>
        </div>
      })}
    </div >
  )
}
