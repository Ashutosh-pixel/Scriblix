import React from 'react'
import useStore from '../store/Store';
import { Link } from 'react-router-dom';

export default function FoldersContainer() {

  const folderArray = useStore((state) => state.folderArray);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);


  const clickHandler = (newcategory) => {
    setSelectedCategory(newcategory);
  }

  return (
    <div className='folderscontainer mt-4 w-full flex flex-col gap-2 select-none'>
      {folderArray.map((item, index) => {
        return <Link to={'/'}><div key={index} onClick={() => clickHandler(item)} className='parent w-full bg-white rounded-md h-10 flex justify-center items-center shadow-md cursor-pointer hover:bg-slate-100'>
          <div className='w-11/12 flex justify-between items-center'>
            <span className='text-lg'>
              {item}
            </span>
            <span className='text-sm'>
              0
            </span>
          </div>
        </div>
        </Link>
      })}
    </div>
  )
}
