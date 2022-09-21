import MakeQR from "../lib/qrcode";
import { encry, decry } from "../lib/encryption";
import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState('')
  const [pass, setPass] = useState('')

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value)
  }

  const [text2, setText2] = useState('')
  const [pass2, setPass2] = useState('')


  const handleChangeText2 = (e) => {
    setText2(e.target.value)
  }

  const handleChangePass2 = (e) => {
    setPass2(e.target.value)
  }


  return (
    <div className="wraper">
      <h1>QRcode 暗号化</h1>

      <p>暗号文　　：{encry({ text, pass })}</p>
      <textarea placeholder="本文" onChange={handleChangeText} />
      <textarea placeholder="パスワード" onChange={handleChangePass} />
      
      <MakeQR text={encry({ text, pass })} />

      <h1>QRcode 復号化</h1>
      
      <p>復号文　　：{decry({ text2, pass2 })}</p>
      <textarea placeholder="暗号文" onChange={handleChangeText2} />
      <textarea placeholder="パスワード" onChange={handleChangePass2} />
      
    </div>
  )
}
