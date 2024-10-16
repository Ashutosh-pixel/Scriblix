import React, { useEffect, useState } from 'react';
import useStore from '../store/Store';
import { BaseDirectory, createDir } from '@tauri-apps/api/fs';

export default function Dialogbox() {
    const [foldername, setFoldername] = useState('');
    const [offScreenBottom, setOffScreenBottom] = useState(0);
    const [move, setMove] = useState(false);

    const setIsFolderOpen = useStore((state) => state.setIsFolderOpen);
    const addFolder = useStore((state) => state.addFolder);
    let foldersMap = useStore((state) => state.foldersMap);

    useEffect(() => {
        const viewport = window.innerHeight;
        const offscreenposition = viewport * 0.4;
        setOffScreenBottom(offscreenposition);
        setTimeout(() => setMove(true), 100);
    }, []);


    // folder name button
    const onOkHandler = () => {
        const trimfolder = foldername.trim();
        setFoldername(trimfolder);
        if (trimfolder !== '' && !foldersMap.has(trimfolder)) {
            foldersMap.set(trimfolder, 1);
            createDirectory(trimfolder);
            addFolder(trimfolder);
        }
        else {
            console.log('folder already exists');
        }
        setIsFolderOpen(false);
    };


    // create folders in local storage
    async function createDirectory(folder) {
        try {
            await createDir(`noteapp/folder/${folder}`, { dir: BaseDirectory.Home, recursive: true });
            console.log('Directory created successfully!');
        } catch (error) {
            console.error('Failed to create directory:', error);
        }
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0  bg-opacity-50 z-40"
                onClick={() => setIsFolderOpen(false)}
            />

            {/* Dialog Box */}
            <div
                className={`dialogbox rounded-full flex w-full justify-center items-center bg-slate-500 fixed z-50 transition-top transform duration-300 ease-linear ${move ? 'translate-y-0' : 'translate-y-full'
                    }`}
                style={{ bottom: `${offScreenBottom}px` }}
            >
                <div className="w-full flex items-center flex-col bg-white select-none rounded-3xl">
                    <div className="mt-3 m-2">New folder</div>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="folder name..."
                            value={foldername}
                            onChange={(e) => setFoldername(e.target.value)}
                            className="w-64 p-2 bg-gray-100 rounded-xl focus:outline-none focus:border-orange-400 focus:border-2 m-2"
                        />
                    </form>
                    <div className="flex w-10/12 justify-between m-2 mb-4">
                        <div
                            className="bg-orange-400 pt-2 pb-2 pl-14 pr-14 flex justify-center items-center rounded-full w-5/12 cursor-pointer select-none"
                            onClick={() => setIsFolderOpen(false)}
                        >
                            Cancel
                        </div>
                        <div
                            className="bg-orange-400 pt-2 pb-2 pl-14 pr-14 flex justify-center items-center rounded-full w-5/12 cursor-pointer select-none"
                            onClick={onOkHandler}
                        >
                            OK
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
