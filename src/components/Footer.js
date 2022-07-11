import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer>
                <p>Google-Keep.copyright © {year}</p>
            </footer>
        </>
    )
}

export default Footer