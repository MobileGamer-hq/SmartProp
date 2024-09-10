import React, {useState} from 'react';
import "../Styles/Home.css"
import SearchBar from '../Components/SearchBar';
import { colors, sizes } from '../Data/DataModels';



function BuyersHome({}) {
  const [searchTerm, setSearchTerm] = useState('')  
  return (
    <div className='buyers-home'>
      <section className='buyers-home-top'>
      <div style={{ fontSize: 80, color: colors.secondary, textWrap: "wrap", width: 700, textAlign: "center", marginBottom: 20}}>Find Your Dream HOME</div>
        <SearchBar width="60%" text="Search For Properties" border={true} value={searchTerm} onSearchBarChange={(input) => setSearchTerm(input)}/>
      </section>
      <section></section>
    </div>
  )
}

export default BuyersHome