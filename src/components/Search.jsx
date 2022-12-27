import React from 'react'

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder='查找用户' />
            </div>
            <div className="userChat" >
                <img src="https://uploadfile.bizhizu.cn/2017/0701/20170701031430776.jpg" alt="" />
                <div className="userChatInfo">
                    <span>jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search