import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Lama Chat</span>
            <div className="user">
                <img src="https://uploadfile.bizhizu.cn/2017/0701/20170701031430776.jpg" alt="" />
                <span>john</span>
                <button onClick={() => signOut(auth)}>退出登录</button>
            </div>
        </div>
    )
}

export default Navbar