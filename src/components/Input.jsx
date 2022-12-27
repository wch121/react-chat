import React from 'react'
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="请输入信息..." />
            <div className="send">
                <img src={Attach} alt="" />
                <input
                    type="file"
                    style={{ display: "none" }}
                />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button>发送</button>
            </div>
        </div>
    )
}

export default Input