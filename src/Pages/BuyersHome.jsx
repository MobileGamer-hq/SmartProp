import React, { useState } from 'react';
import "../Styles/Home.css"
import SearchBar from '../Components/SearchBar';
import { colors, sizes } from '../Data/DataModels';
import { useNavigate } from 'react-router-dom';
import { BorderBevelButton, FlatButton } from '../Components/Buttons';
import { IoIosArrowForward } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';



function BuyersHome({ }) {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  return (
    <div className='buyers-home'>

      <section className='buyers-home-top'>
        <div style={{ fontSize: 80, color: colors.secondary, textWrap: "wrap", width: 700, textAlign: "center", marginBottom: 20 }}>Find Your Dream HOME</div>
        <SearchBar width="60%" text="Search For Properties" border={true} value={searchTerm} onSearchBarChange={(input) => setSearchTerm(input)} />
      </section>
      <section className='buyers-featured-homes'>
        <div>
          <div style={{ fontSize: sizes.FONT_MAX, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX}}>Featured Homes</div>

        </div>

        <div className='featured-container'>

        </div>
        <BorderBevelButton className='border-white-button' placeholder={"See More"} fontSize={sizes.BUTTON_FONT_SMALL} margin={sizes.MARGIN_MAX} align={"flex-end"}/>
      </section>
      <section className='buyers-suggested'></section>
      <ProfileIcon/>
    </div>
  )
}

function ProfileIcon({onClick}) {

  return(
    <div className='profile-icon' onClick={onClick} style={{
      position: 'fixed',
      left: 50,
      bottom: 30,
      borderRadius: sizes.MAX,
    }} >
      <FaUser id='profile-icon'/>
    </div>
  )
}



export default BuyersHome