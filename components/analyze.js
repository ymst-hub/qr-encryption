import { QrReader } from 'react-qr-reader';
import { decry } from "../lib/encryption";
import React, { useState } from "react";

export default function Analyze() {
    const [text2, setText2] = useState('')
    const [pass2, setPass2] = useState('')


    const handleChangeText2 = (e) => {
        setText2(e.target.value)
    }

    const handleChangePass2 = (e) => {
        setPass2(e.target.value)
    }
    const handleError = (e) => {

    }
    return (
        <div>
            <h1>QRcode 復号化</h1>

            <p>復号文　　：{decry({ text2, pass2 })}</p>
            <textarea placeholder="暗号文" onChange={handleChangeText2} value={text2} />
            <textarea placeholder="パスワード" onChange={handleChangePass2} />

            <h2>画像から復号文を入力する</h2>
            <QrReader delay={3000}
                onResult={(result, error) => {
                    if (!!result) {
                        setText2(result?.text);
                        alert(`読み取り完了\n復号文に反映します\n${result?.text}`)
                    }
                    if (!!error) {
                        console.info(error);
                    }
                }}
                className="video"
            />
        </div>
    )
}