import React from 'react'
import './ViewUser.css'
const ViewUser = () => {
  return (
    <div className='user-info'> 
    <button className='user-info-btn'>
      <img src={invitepic} alt="" />
      <p>Invite via Email</p>
    </button>
    <div>
    <div className='users-img-icon'>
   <img src={camera} alt="" className='users-icon-img'/>
    </div>
    <p>Upload photo</p>
    </div>
    <div>
      <p>Staff Number</p>
      <input
        
        placeholder="8H6TRW3"
        className="staff-details-box"
      />
    </div>
    <div>
      <p>Email</p>
      <input
        
        placeholder="danbaraza@rainblue.com"
        className="staff-details-box"
      />
    </div>
    <div>
      <p>First Name</p>
      <input
        
        placeholder="Dan"
        className="staff-details-box"
      />
    </div>
    <div>
      <p>Last Name</p>
      <input
        
        placeholder="Baraza"
        className="staff-details-box"
      />
    </div>
    <div>
      <p>Company Url</p>
      <input
        
        placeholder="rainblue.com"
        className="staff-details-box"
      />
    </div>
    <div>
      <p>Role</p>
      <input
        
        placeholder="Auctioneering Manager"
        className="staff-manager-box"
      />
    </div>
  
      <button className='view-user-btn004'>
          <p>View User</p>
      </button>
  </div>
  )
}

export default ViewUser
