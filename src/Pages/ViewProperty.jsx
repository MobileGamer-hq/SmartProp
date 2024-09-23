import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import "../Styles/PropertyPage.css"

function ViewProperty() {
  const { id } = useParams();
  const [images, setImages] = useState([]);

  // Use the id to fetch property details or perform other actions
  console.log(id);
  return (
    <div className="property-page">
      <section className="view-property">
        <section className="property-info-container">
          <section className="view-property-image">
            <ul className="view-property-image-list-container">
              {
                images.map((image, index) => <img src={image}/>)
              }
            </ul>
          </section>
          <section className="view-property-info">
            <div className='view-property-info-description'></div>
            <div className='view-property-info-others'></div>
          </section>
        </section>
        <section className="view-seller-info">
          <div className='seller-info-container'></div>
        </section>
      </section>

      {/* Analysis Section */}
      <section className="analysis"></section>
    </div>

  )
}


function PropertyImage({ src, alt }) {
  return (
    <img src={src} alt={alt} />
  )
}

export default ViewProperty