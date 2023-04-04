import React from 'react'
import Icon from '../components/images/search-icon.jpg'
import GoogleLens from '../components/images/GoogleLens.png'
import Microphone from '../components/images/microphone.png'
import { useState } from 'react';
export default function SearchBar() {

  const [searchKeyword, setSearchKeyword] = useState('');

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setSearchKeyword(event.target.value);
      event.target.value = '';
    }
  }

  
  return (
    <div>
      <input style={{borderRadius:'10px', width:'400px',height:'25px', margin:'10px',border:'1px solid grey'}} type="text" placeholder="Search..." onKeyDown={handleKeyDown} />
      
      <div style={{display:'flex', justifyContent:'space-between', width:'350px' , position:'relative', top:'-35px', left:'40px'}} >
        <div>
          <img src={Icon} alt='Search Icon' style={{width:'20px', height:'20px'}}/>
        </div>
        
        <div style={{display:'flex', gap:'9px'}}>
        <div>
        <img src={Microphone} alt='Search Icon' style={{width:'20px', height:'20px'}}/>
        </div>

        <div>
        <img src={GoogleLens} alt='Search Icon' style={{width:'20px', height:'20px'}}/>
        </div>

        </div>
      </div>
    
    
      <div>{searchKeyword}</div>
    </div>
    
    
  )
}
