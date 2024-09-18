import React, { useState } from 'react'
import Slider from '../Components/Slider'
import { amenities, colors, dropdown_options, Search_Filter, Search_Priority, sizes } from '../Data/DataModels'
import SearchBar from '../Components/SearchBar'

import "../Styles/SearchConfig.css"
import { generateTerms } from '../Data/SearchManager'
import SelectInput from '../Components/SelectInput'
import { MdOutlineCancel } from 'react-icons/md'
import Checkbox from '../Components/Checkbox'
import { BorderBevelButton } from '../Components/Buttons'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'




function SearchConfig() {
  const [searchTerm, setSearchTerm] = useState("")
  const [terms, setTerms] = useState([])
  const [filter, setFilter] = useState(Search_Filter)
  const [priority, setPriority] = useState(Search_Priority)

  const [amenitiesList, setamenitiesList] = useState(amenities)


  const deriveTerms = () => {
    const temp = { ...filter }
    const { _terms, _filter } = generateTerms(searchTerm, temp)
    setTerms(_terms)
    setFilter(_filter)
    console.log(_terms, _filter)
  }

  const changeValue = (key, value) => {
    if (value < 0) return
    const temp = { ...filter }
    temp[key] = value
    setFilter(temp)
  }

  const changePriority = (key, value) => {
    if (value < 0) return
    const temp = { ...priority }
    temp[key] = value
    setPriority(temp)
  }

  const addValue = (key, value) => {
    const temp = { ...filter }
    //make sure the value is not already in the list
    if (!temp[key].includes(value)) {
      temp[key].push(value)
      setFilter(temp)

      //remove the value from the list of options
      const tempOptions = [...amenitiesList]
      const index = tempOptions.indexOf(value)
      tempOptions.splice(index, 1)
      setamenitiesList(tempOptions)
    }



  }

  const removeValue = (key, value) => {
    const temp = { ...filter }
    temp[key] = temp[key].filter((item) => item !== value)
    setFilter(temp)
  }

  const UploadFilter = () => {

  }


  return (
    <div style={{ backgroundColor: colors.primary }}>

      <section className='set-filter'>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 10, width: "100%" }}>
          <div style={{ fontSize: sizes.FONT_MAX, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX }}>What Are You Looking For?</div>
          <SearchBar width="60%" text="Type the description of the home you want" border={true} value={searchTerm} onSearchBarChange={(input) => setSearchTerm(input)} onClick={deriveTerms} />

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            margin: sizes.MARGIN_MAX,

          }}>

            <div className='filter-parameters-container'>
              <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MIN }}>Set Up Your Filter</div>
              <NumberInput title={"Budget: (₦)"} value={filter.budget} onTextInputChange={(input) => changeValue("budget", input)} incrementValue={() => changeValue("budget", filter.budget + 1)} decrementValue={() => changeValue("budget", filter.budget - 1)} />
              <NumberInput title={"Bedrooms:"} value={filter.bedrooms} onTextInputChange={(input) => changeValue("bedrooms", input)} incrementValue={() => changeValue("bedrooms", filter.bedrooms + 1)} decrementValue={() => changeValue("bedrooms", filter.bedrooms - 1)} />
              <NumberInput title={"Bathrooms:"} value={filter.bathrooms} onTextInputChange={(input) => changeValue("bathrooms", input)} incrementValue={() => changeValue("bathrooms", filter.bathrooms + 1)} decrementValue={() => changeValue("bathrooms", filter.bathrooms - 1)} />
              <NumberInput title={"Living Room:"} value={filter.living_rooms} onTextInputChange={(input) => changeValue("living_rooms", input)} incrementValue={() => changeValue("living_rooms", filter.living_rooms + 1)} decrementValue={() => changeValue("living_rooms", filter.living_rooms - 1)} />
              <NumberInput title={"Kitchens:"} value={filter.kitchens} onTextInputChange={(input) => changeValue("kitchens", input)} incrementValue={() => changeValue("kitchens", filter.kitchens + 1)} decrementValue={() => changeValue("kitchens", filter.kitchens - 1)} />
            </div>
            <div className='filter-parameters-container'>

              <div>

                <Checkbox title={'Should be in an Estate'} defaultChecked={filter.inside_estate} onChange={(input) => changeValue("inside_estate", input)} />
                <Checkbox title={'Should be a Smart Home'} defaultChecked={filter.smart_home} onChange={(input) => changeValue("smart_home", input)} />
              </div>

              <div className='amenities-list-container'>
                <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MIN }}>Add Your Amenities</div>
                <ul className='amenities-list'>
                  {filter.amenities.map((amenity, index) => <div key={index} className='amenities-list-item'><div style={{ fontSize: sizes.FONT_MIN, marginRight: 5 }}>{amenity}</div><MdOutlineCancel onClick={() => removeValue("amenities", amenity)} /></div>)}
                </ul>
                <SelectInput options={amenitiesList} placeholder={"Type the amenity you are lookibng for "} onClick={(input) => addValue('amenities', input)} />
              </div>
            </div>
            <div className='filter-parameters-container-container'>
              <div className='filter-parameters-container'>
                <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MIN }}>Set Your Priorities</div>
                <Priority value={priority.price} title={'Budget Match'} onChange={(value) => changePriority('price', value)} />
                <Priority value={priority.bedroom_no} title={'Bedrooms Count'} onChange={(value) => changePriority('bedroom_no', value)} />
                <Priority value={priority.bathroom_no} title={'Bathrooms Count'} onChange={(value) => changePriority('bathroom_no', value)} />
                <Priority value={priority.living_room_no} title={'Living Rooms Count'} onChange={(value) => changePriority('living_room_no', value)} />
                <Priority value={priority.kitchen_no} title={'Kitchen Count'} onChange={(value) => changePriority('kitchen_no', value)} />
                <Priority value={priority.amenities} title={'Amenities Match'} onChange={(value) => changePriority('amenities', value)} />
                <Priority value={priority.location} title={'Location Match'} onChange={(value) => changePriority('loaction', value)} />
              </div>

              <div className='filter-parameters-container'>
                <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MIN }}>Set Your Preferred Location</div>
                <TextInput title={"Property Type:"} value={filter.property_type} onTextInputChange={(input) => changeValue("property_type", input)} />
                <TextInput title={"City:"} value={filter.city} onTextInputChange={(input) => changeValue("city", input)} />
                <TextInput title={"State:"} value={filter.state} onTextInputChange={(input) => changeValue("state", input)} />
                {
                  filter.inside_estate ? <TextInput title={"Estate:"} value={filter.estate} onTextInputChange={(input) => changeValue("estate", input)} /> : null
                }
              </div>

            </div>
          </div>
          <BorderBevelButton className='border-white-button' placeholder={"Update Filter"} onClick={UploadFilter} fontSize={sizes.BUTTON_FONT_SMALL} margin={sizes.MARGIN_MAX} align={"flex-end"} />
        </div>
      </section>
      <section className='about-filter-algorithm-priorities'>
        <div style={{ fontSize: sizes.FONT_MAX, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX }}>How This All Works</div>
        <div className='about-filter-algorithm-priorities-container'>
          <div style={{ fontSize: sizes.FONT_MIN, color: colors.text2, textWrap: "wrap", textAlign: "justify", margin: sizes.MARGIN_MAX, width: '30%' }} className='about-item'>
            <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX }} className='about-item-title'>About The Filter</div>
            <div>At SmartProp Africa, we make it easy for users to set up personalized filters to find their ideal home. Our platform allows you to customize your search based on various preferences, ensuring you see only the properties that meet your specific needs. You can filter your search by important factors like location, budget, property type, number of bedrooms, and amenities such as parking, swimming pools, or nearby schools.</div>
            <div>Setting up your personalized filters is simple. You start by selecting the key criteria that matter most to you, whether it's a particular neighborhood, a price range you're comfortable with, or specific features like proximity to public transport. These filters help our algorithm focus on the properties that fit your lifestyle and financial goals. As you refine your search, the platform tailors its recommendations, showing you the best options based on your preferences.</div>
            <div>This personalized filtering system ensures that your property search is efficient and focused. Instead of wasting time scrolling through irrelevant listings, you'll get a curated selection of homes that match your exact requirements, helping you make informed decisions more quickly and confidently.</div>
          </div>
          <div style={{ fontSize: sizes.FONT_MIN, color: colors.text2, textWrap: "wrap", textAlign: "justify", margin: sizes.MARGIN_MAX, width: '30%' }} className='about-item'>
            <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX }} className='about-item-title'>About The Algorithm</div>
            <div>At SmartProp Africa, we've developed an advanced search algorithm designed to simplify the home-buying process and deliver highly personalized property recommendations. By leveraging artificial intelligence, the algorithm processes thousands of property listings and analyzes millions of data points. It evaluates factors like market trends, neighborhood details, pricing, and amenities to provide tailored suggestions that meet the specific needs and preferences of each user.            </div>
            <div>The process begins when users input their property preferences, such as location, budget, number of bedrooms, and additional features. These preferences are crucial as they guide the algorithm in narrowing down the best options from a vast pool of listings. Whether it's finding a home in a bustling urban area or a quiet suburban neighborhood, the algorithm ensures that users see only the properties that match their exact requirements.</div>
            <div>Beyond basic filtering, our algorithm goes a step further by considering future market trends and property values, offering homes that provide not just immediate satisfaction but also long-term value. This personalized, data-driven approach saves time and enhances the user experience by presenting properties that align perfectly with their lifestyle and investment goals.</div>

          </div>
          <div style={{ fontSize: sizes.FONT_MIN, color: colors.text2, textWrap: "wrap", textAlign: "justify", margin: sizes.MARGIN_MAX, width: '30%' }} className='about-item'>
            <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", textAlign: "center", margin: sizes.MARGIN_MAX }} className='about-item-title'>About Your Priorities</div>
            <div>At SmartProp Africa, we offer users the ability to set personalized priorities that help refine and weigh the search algorithm to suit their unique preferences. When setting up your property search, you can not only choose basic filters like location and budget but also rank the importance of different criteria. For example, you can prioritize factors such as proximity to schools, access to public transportation, or having a spacious garden. This allows the algorithm to understand which features matter most to you and adjust its recommendations accordingly.</div>
            <div>As you assign weight to your priorities, the algorithm adapts, ensuring that the homes you see reflect these preferences. If being near a city center is your top priority, the algorithm will prioritize listings with central locations over other factors, even if they fall slightly outside your budget or lack other features. On the other hand, if having a modern kitchen or extra bedrooms is more important than location, those criteria will take precedence in your search results.</div>
            <div>By setting these restrictions and priorities, you have greater control over the home search process. It fine-tunes the algorithm to focus on what truly matters to you, helping you find the perfect property faster and with more precision. This personalized approach makes the home-buying experience efficient, tailored, and aligned with your specific lifestyle and needs.</div>
            
            

            

            
          </div>
        </div>
      </section>
    </div>
  )
}

function Importance({ value }) {
  const importance = {
    5: "Essential",
    4: "Important",
    3: "Preferred",
    2: "Optional",
    1: "Flexible"
  }

  return <div>{value == 5 ? importance[5] : value == 4 ? importance[4] : value == 3 ? importance[3] : value == 2 ? importance[2] : importance[1]}</div>

}

function Priority({ min = 0, max = 5, value, onChange, title }) {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {title}
        <Importance value={value} />
      </div>
      <Slider min={min} max={max} value={value} onChange={onChange} />

    </div>
  )
}

function NumberInput({
  width = '80%',
  size = sizes.BUTTON_FONT_MEDIUM - 1,
  text = '.....',
  margin = sizes.MARGIN_MID,
  onTextInputChange,
  onKeyDown = () => { },
  align = 'flex-start',
  value = '',
  wrap = false,
  border = false,
  message,
  title,
  step = 1,
  min = 1,
  max = 10,
  incrementValue,
  decrementValue
}) {

  const [active, setActive] = useState(false)

  const handleInputFocus = () => {
    setActive(true)
  }

  const handleInputBlur = () => {
    setActive(false)
  }

  return (

    <div
      style={{
        fontSize: size,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: margin,
        padding: sizes.PADDING_MIN,
        width: width,
        color: colors.text2
      }}

      className='fiter-input-number'
    >
      <div style={{ display: 'flex', flexDirection: 'row', fontSize: sizes.FONT_MID }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
        <BiLeftArrow id='input-arrow-icons' onClick={decrementValue} />
        <input
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: sizes.FONT_MIN,
            color: colors.text2,
            textAlign: 'center', // Center the text inside the input
            whiteSpace: 'pre-wrap',
            flexWrap: 'wrap',
            width: '100%',
            padding: sizes.PADDING_MIN
          }}
          type={"number"}
          step={step}
          min={min}
          max={max}
          placeholder={text}
          value={value}
          onChange={(e) => {
            onTextInputChange(e.target.value);
          }}
          onKeyDown={onKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <BiRightArrow id='input-arrow-icons' onClick={incrementValue} />
      </div>
    </div>
  );
}


function TextInput({
  width = '90%',
  size = sizes.BUTTON_FONT_MEDIUM - 1,
  text = '.....',
  margin = sizes.MARGIN_MIN,
  onTextInputChange,
  onKeyDown = () => { },
  align = 'flex-start',
  value = '',
  wrap = false,
  border = false,
  message,
  title,
  step = 1,
  min = 1,
  max = 10,
  incrementValue,
  decrementValue
}) {

  const [active, setActive] = useState(false)

  const handleInputFocus = () => {
    setActive(true)
  }

  const handleInputBlur = () => {
    setActive(false)
  }

  return (

    <div
      style={{
        fontSize: size,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: margin,
        padding: sizes.PADDING_MIN,
        width: width,
        color: colors.text2,
        border: '1px  solid white',
      }}

    // className='fiter-input-number'
    >
      <div style={{ fontSize: sizes.FONT_MIN }}>
        {title}
      </div>
      <input
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          fontSize: sizes.FONT_MIN,
          color: colors.text2,
          textAlign: 'flex-start', // Center the text inside the input
          whiteSpace: 'pre-wrap',
          flexWrap: 'wrap',
          // width: '100%',
          padding: sizes.PADDING_MIN,
          paddingLeft: sizes.PADDING_MID
        }}
        type={"text"}
        step={step}
        min={min}
        max={max}
        placeholder={text}
        value={value}
        onChange={(e) => {
          onTextInputChange(e.target.value);
        }}
        onKeyDown={onKeyDown}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
}

export default SearchConfig