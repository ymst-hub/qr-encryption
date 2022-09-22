import React from 'react';
import { useQRCode } from 'next-qrcode';

function MakeQR({text}) {
    const { Image } = useQRCode();
    if (text == '') text = ' '
    return (
        <Image
            text={text}
            options={{
                type: 'image/jpeg',
                quality: 0.8,
                level: 'M',
                margin: 1,
                scale: 4,
                width: 300,
                color: {
                    dark: '#000',
                    light: '#FFF',
                },
            }}
        />
    );
}

export default MakeQR;

