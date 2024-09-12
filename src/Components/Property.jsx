import React from 'react'
import "../Styles/PropertyStyles.css"
import proper_image from "../Images/property-example.png"
import {sizes, colors} from '../Data/DataModels'
import { IoBedOutline, IoCarSportOutline, IoHeart, IoHeartOutline } from 'react-icons/io5';
import { LuBath } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';


const items = [
    'Item 1', 'Item 2', 'Item 3',
    'Item 4', 'Item 5', 'Item 6',
    'Item 4', 'Item 5', 'Item 6'
];

export function MiniPropertyList({properties}) {
  return (
    <div className='mini-list-container'>
        {properties.map((item, index) => (
        <Property key={index} property={item} />
      ))}
      </div>
  )
}

export function MidPropertyList({properties}) {
  
    return (
      <div className='mid-list-container'>
        {items.map((item, index) => (
        <Property key={index} property={item} />
      ))}
      </div>
    )
}


function Property({property}) {
  const navigate = useNavigate()
  let link = `view-property/${12}`
  return (
    <div className='property' onClick={() => navigate(link)}>
      <img src={proper_image} alt={property} style={{width: 150, height: 150}}/>
      <div className='property-info'>
        <div>
          <div style={{fontSize: sizes.FONT_MID}}>2 Bedroom Flat</div>
          <div style={{fontSize: sizes.FONT_MIN}}>Lekki</div>
        </div> 
        <div style={{display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-between", padding: 10}}>
          <div className='property-info-mini'>
            <IoCarSportOutline id='property-info-icon'/>
            <div style={{fontSize: sizes.FONT_MIN-3, marginLeft: 5}}>{2}</div>
          </div>
          <div className='property-info-mini'>
            <IoBedOutline id='property-info-icon'/>
            <div style={{fontSize: sizes.FONT_MIN-3, marginLeft: 5}}>{2}</div>
          </div>
          <div className='property-info-mini'>
            <LuBath id='property-info-icon'/>
            <div style={{fontSize: sizes.FONT_MIN-3, marginLeft: 5}}>{2}</div>
          </div>
        </div>
        <div id='strike'/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #000', paddingTop: 10}}>
          <IoHeartOutline id='property-heart-icon'/>
          <div style={{fontSize: sizes.FONT_MID-3}}>₦50,000,000</div>
        </div>
      </div>
    </div>
  )
    
}


