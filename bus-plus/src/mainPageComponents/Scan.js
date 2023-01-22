import React from 'react';
import Barcode from 'react-barcode';
import './Scan.css';
const Scan = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}} className='scanYourCode'>
            <Barcode value="1234567890" />
            <h1>Scan Your code</h1>
        </div>
    );
}

export default Scan;