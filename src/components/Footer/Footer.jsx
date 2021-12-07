import React from 'react'
import './Footer.css';


function Footer() {
    return (
        <div className="Footer">
            <div className="footer-group">
                <p>Despre noi</p>
                <p>Procedură retur</p>
                <p>Livrare în 48h</p>
            </div>
            <div className="footer-group">
                <p>Cum comand</p>
                <p>Garanții</p>
                <p>Plata cu cardul</p>
            </div>
            <div className="footer-group">
                <p>Contactează-ne</p>
                <p>Sesizări</p>
                <p>ANPC</p>
            </div>
        </div>
    )
}

export default Footer
