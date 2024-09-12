import React from 'react'
import { useParams } from 'react-router-dom';
import "../Styles/PropertyPage.css"

function ViewProperty() {
  const { id } = useParams();

  // Use the id to fetch property details or perform other actions
  console.log(id);
  return (
    <div className="property-page">
      <section className="view-property">
        <section className="property-info-container">
          <section className="property-image"></section>
          <section className="view-property-info"></section>
        </section>
        <section className="seller-info"></section>
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