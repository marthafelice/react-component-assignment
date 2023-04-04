import React from 'react'
import GoogleLogo from '../components/GoogleLogo'
import SearchBar from './SearchBar'
import Button from './Button'

export default function SearchSection() {
  return (
    <div >
     <div style={{ display:'grid',justifyContent:'center', paddingTop:'30px'}}>
      <GoogleLogo/>
      </div>
     
      <div style={{ display:'grid',justifyContent:'center', paddingTop:'10px'}}>
      <SearchBar/>
      </div>
      
      <div style={{ display:'flex',justifyContent:'center', paddingTop:'10px', gap:'10px'}}>
        <Button title={" Google Search"}/>
        <Button title={"I'm feeling lucky"}/>
      </div>
    </div>
  )
}
