import React, { useState } from "react";
import { encry } from "../lib/encryption";
import MakeQR from "../lib/qrcode";

export default function Make(){
    const [text, setText] = useState('')
    const [pass, setPass] = useState('')

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleChangePass = (e) => {
        setPass(e.target.value)
    }
    return(
        <>
            <h1>QRcode 暗号化</h1>

            <p>暗号文　　：{encry({ text, pass })}</p>
            <textarea placeholder="本文" onChange={handleChangeText} />
            <textarea placeholder="パスワード" onChange={handleChangePass} />

            <MakeQR text={encry({ text, pass })} />
        </>
    )
}