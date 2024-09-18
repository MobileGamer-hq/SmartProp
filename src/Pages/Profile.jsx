import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate()

  return (
    <div>Profile: {id}
      <button onClick={() => navigate(`/search-config/${id}`)} >Search Config</button>
    </div>

  )
}

export default Profile;