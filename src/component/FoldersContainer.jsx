import React, { useEffect, useState } from 'react'
import useStore from '../store/Store';
import { useNavigate } from 'react-router-dom';
import { event } from '@tauri-apps/api';

export default function FoldersContainer() {

  let folderArray = useStore((state) => state.folderArray);


  const [isEditable, setIsEditable] = useState(Array(folderArray.length).fill(false));
  const [duplicateArray, setDuplicateArray] = useState(['All']);


  const clickHandler = (e, index) => {
    const updatedArray = [...folderArray];
    const newvalue = e.target.value;
    updatedArray[index] = e.target.value;
    setDuplicateArray(updatedArray);
    folderArray[index] = e.target.value;
    console.log("folderArray ", folderArray);
  }

  const toggleEditable = (index, item) => {
    const updatedEditableState = [...isEditable];
    updatedEditableState[index] = !updatedEditableState[index];  // Toggle the specific item's editability
    setIsEditable(updatedEditableState);
    folderArray[index] = item.trim();
  };

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
