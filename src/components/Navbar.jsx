import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Lama Chat</span>
            <div className="user">
                <img src="https://uploadfile.bizhizu.cn/2017/0701/20170701031430776.jpg" alt="" />
                <span>john</span>
                <button >logout</button>
            </div>
        </div>
    )
}

export default Navbar