import React from 'react';
import { useQRCode } from 'next-qrcode';

function MakeQR({text}) {
    const { Canvas } = useQRCode();
    if (text == '') text = ' '
    return (
        <Canvas
            text={text}
            options={{
                type: 'image/jpeg',
                quality: 0.2,
                level: 'H',
                margin: 1,
                scale: 4,
                width: 300,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF',
                },
            }}
        />
    );
}

export default MakeQR;