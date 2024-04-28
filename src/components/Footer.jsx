// Importation des éléments dont on a besoin
import React from 'react'
import WhiteLogo from '../assets/images/whiteLogo.png'

function Footer() {
    
    return (
        
       <footer className='footer'>
        <img src={WhiteLogo} alt="Logo de Kasa" className='img' />

        <p className='info'>© 2020 Kasa. All rights reserved</p>
       </footer>
    )
}

export default Footer