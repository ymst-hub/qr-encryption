var crypto = require("crypto");


//暗号化がしっかりかかっているため、文字数が多くなり過ぎてしまう。
//シーザー暗号程度にセキュリティを落とす必要がある。
//全角5文字
//半角15文字まで
export function encry({text,pass}){
    if ( pass != ''){
        var cipher = crypto.createCipher('AES-256-CBC', String(pass))
        var ciphertex = cipher.update(String(text), 'utf8', 'hex')
        return String(ciphertex + cipher.final('hex'))
    }

    return text
}

export function decry({text2,pass2}){
    if (pass2 != '') {
        var decipher = crypto.createDecipher('AES-256-CBC', String(pass2))
        var deciphertex = decipher.update(String(text2), 'hex', 'utf8')
        try{
            return String(deciphertex + decipher.final('utf8'))
        }catch(e){
            return ""
        }
        
        
    }
    return text2
    
}