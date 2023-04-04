import React from 'react'
import BottomLeftMenu from './BottomLeftMenu'
import Location from './Location'



export default function Footer() {
  return (
    <div>
        <div style={{paddingTop:'280px'}}> 
        <Location/>
        <BottomLeftMenu/>
        </div>
    </div>
  )
}
