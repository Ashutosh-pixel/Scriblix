import React, { useState } from 'react'
import useStore from '../store/Store';


export default function Dialogbox() {

    const [foldername, setFoldername] = useState('');
    const setIsFolderOpen = useStore((state) => state.setIsFolderOpen);
  
    return (
    <div>
        <div>New folder</div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <input type="text" 
            placeholder='folder name'
            value={foldername}
            onChange={(e) => setFoldername(e.target.value)}
            />
        </form>
        <div onClick={() => setIsFolderOpen(false)}>
            <p>Cancel</p>
        </div>
        <div onClick={() => setIsFolderOpen(false)}>
            <p>OK</p>
        </div>
    </div>
  )
}
