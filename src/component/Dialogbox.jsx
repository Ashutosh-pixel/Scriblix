import React, { useEffect, useState } from 'react'
import useStore from '../store/Store';


export default function Dialogbox() {

    const [foldername, setFoldername] = useState('');
    const [offScreenBottom, setOffScreenBottom] = useState(0);
    const [move, setMove] = useState(false);


    const setIsFolderOpen = useStore((state) => state.setIsFolderOpen);
    const addFolder = useStore((state) => state.addFolder);


    useEffect(() => {
        // Get the viewport height dynamically
        const viewport = window.innerHeight;

        // Calculate starting position (just below the screen)
        const offscreenposition = viewport*0.5;

        // Set the calculated bottom position
        setOffScreenBottom(-offscreenposition);

        console.log(offScreenBottom);
        

        setTimeout(() => setMove(true), 100);
    }, [])
  
    const onOkHandler = () => {
        const trimfolder = foldername.trim();
        setFoldername(trimfolder);
        if(trimfolder !== '') addFolder(trimfolder);
        setIsFolderOpen(false);
    }

    return (
    <div className='dialogbox w-full flex items-center flex-col bg-white rounded-3xl mt-2 select-none absolute transition-bottom transform duration-300 ease-linear' 
    style={{ bottom: `${offScreenBottom}px` }}>
        <div className='mt-3 m-2'>New folder</div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <input type="text" 
            placeholder='folder name...'
            value={foldername}
            onChange={(e) => setFoldername(e.target.value)}
            className="w-64 p-2 bg-gray-100 rounded-xl focus:outline-none focus:border-orange-400 focus:border-2 m-2"
            />
        </form>
        <div className='flex w-10/12 justify-between m-2 mb-4'>
            <div className=' bg-orange-400 pt-2 pb-2 pl-14 pr-14 flex justify-center items-center rounded-full w-5/12 cursor-pointer select-none' onClick={() => setIsFolderOpen(false)}>
                Cancel
            </div>
            <div className='bg-orange-400 pt-2 pb-2 pl-14 pr-14 flex justify-center items-center rounded-full w-5/12 cursor-pointer select-none' onClick={onOkHandler}>
                OK
            </div>
        </div>
    </div>
  )
}
