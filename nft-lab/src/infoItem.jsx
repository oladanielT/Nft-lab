// import wallet from '../src/assets//images/wallet.png'
// import upload from '../src/assets/images/upload.png'
// import bookmark from '../src/assets/images/bookmark.png'
import React from 'react';
import {CiWallet} from 'react-icons/ci';
import {TbFileUpload} from 'react-icons/tb';
import {BsBookmarkDash} from 'react-icons/bs';

const info = [
    {
        id: 1,
        icon: <CiWallet className='text-white' size={50}/>,
        title:"Set up your wallet",
        description:"Begin your NFT journey by setting up a secure digital wallet, such as MetaMask. This wallet will be your gateway to connecting and transacting on OpenSea's vibrant NFT marketplace."
    },
    {
        id: 2,
        icon:<TbFileUpload className='text-white' size={50}/>,
        title:"Update and Create Collection",
        description:"Transform your digital creations into NFTs with ease. Upload your artwork, videos, or other content, and craft unique collections. Set your own prices, giving your art the value it deserves."
    },
    {
        id: 3,
        icon: <BsBookmarkDash className='text-white' size={40}/>,
        title:"List them for sale",
        description:"Once your NFTs are ready, present them to the world on OpenSea. List your collections for sale and engage with potential buyers. Connect, create, and sell your NFTs, turning your passion into profit on OpenSea's platform."
    }
]

export default info;