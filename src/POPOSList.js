// src/POPOSList.js
import data from './sfpopos-data.json'
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';


const titles = data.map((obj) => {
    return <h1>{obj.title}</h1>

  })
  
console.log(titles)

function POPOSList() {
    // deconstruct hours here
    const spaces = data.map(({ title, address, images, hours }) => {

        return (
        <POPOSSpace
            key={title}
            name={title}
            address={address}
            image={images[0]}
            hours={hours} // add a new prop for hours here
        />
        )
    })
    
      return (
        <div className="POPOSList">
          { spaces }
        </div>
      )
  }
  
 
  export default POPOSList