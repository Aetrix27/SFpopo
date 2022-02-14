// src/POPOSSpace.js
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    // Get the
    const { name, image, address, hours, id } = props
    return (
      <div className="POPOSSpace">
        <h1>{name}</h1>
        <Link to={`/details/${id}`}>
          <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
        </Link>
        <div>{address}</div>
        <div>{hours}</div>
     
      </div>
    )
  }

export default POPOSSpace