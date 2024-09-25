import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { colors, sizes, User } from '../Data/DataModels';
import '../Styles/Profile.css'
import { BorderBevelButton } from '../Components/Buttons';
import profile_pic from '../Images/profile-icon.png'
import { getData } from '../Data/FirebaseManager';
import { fetchUserById } from '../Data/Server';

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate()

  const [user, setUser] = useState(User);
  useEffect(() => {
    //get the user data from firebase
    fetchUserById(id).then((data) => {
      setUser(data);
      console.log(data);
    });


  }, [])

  


  return (
    <div className='profile-page'>
      <section className='profile-section'>
        <div className='profile-section-left-container'>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <img src={profile_pic} id='profile-section-pic' />
            <div className='profile-section-user-info'>
              <div style={{ fontSize: sizes.FONT_MID, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX }}>{user.name}</div>
              <div style={{ fontSize: sizes.FONT_MIN, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX }}>{user.contact_info.contact_email || user.login.email}</div>
              <div style={{ fontSize: sizes.FONT_MIN, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX }}>{user.contact_info.contact_phone_number}</div>
              <div style={{ fontSize: sizes.FONT_MIN, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX }}>Role: {user.role == 'buyer' ? 'Buyer' : user.role == 'seller' ? 'Seller' : 'Admin'}</div>
            </div>
          </div>
          <div>

          </div>


        </div>
        <div className='profile-section-right-container'>
          <div className='profile-section-right-top'>
            Top
          </div>
          <div id='strike' />
          <div className='profile-section-right-bottom'>
            <BorderBevelButton placeholder="My Search Filter" width={180} onClick={() => navigate(`/search-config/${id}`)} className='border-white-button' />
          </div>
        </div>
      </section>

    </div>

  )
}

export default Profile;