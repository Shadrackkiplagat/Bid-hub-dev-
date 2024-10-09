import React from 'react'
import './dashboard.css'
import logo from '../../assets/logo.jpeg'
import bell from '../../assets/icon/jam-icons/outline & logos/bell.svg'
import home from '../../assets/Building Blocks/icon/jam-icons/outline & logos/home.jpg'

const dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='top-nav'>
            <div className='dashboard-container'>
            <img src={logo} alt="" className='logo' />
                <div className='nation-container'>
                    <span><p className='nation-name'>Nation Media</p></span>
                    <p className='date'>Friday,4th Oct 2024</p>
                </div>
            </div>
            <div className='superadmin'>
            <div className='notification-container'>
                <img src={bell} alt="" />
            </div>
                <button className='superadmin-btn'>
                 <span><p className='greetings'>Good Afternoon!</p></span> 
                 <h4 className='admin-tittle'>SuperAdmin</h4>

                </button>
            </div>
            </div>
            <div className='side-nav'>
            
            <button className='home-dashboard' >
                <img src={home} alt="" className='homepic'/>
                <p className='home-text'>Dashboard</p>
            </button>
            <button className=''>

            </button>

            </div>
            <div className=''>

            </div>


        </div>
    )
}

export default dashboard
