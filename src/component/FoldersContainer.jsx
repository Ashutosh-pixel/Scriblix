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
    <div className='folderscontainer mt-4 w-full flex flex-col gap-2 select-none'>
      {folderArray.map((item, index) => {
        return <div key={index} className='parent w-full bg-white rounded-md h-10 flex justify-center items-center shadow-md cursor-pointer'>
          <span className='w-28 flex justify-between items-center'>
            <input value={item} onChange={(e) => clickHandler(e, index)} readOnly={!isEditable[index]} className='w-full' type="text" name="" id="" />
          </span>
          <span className='text-sm' onClick={() => toggleEditable(index, item)}>
            {isEditable[index] ? 'Save' : 'Rename'}
          </span>
        </div>
      })}
    </div >
  )
}
