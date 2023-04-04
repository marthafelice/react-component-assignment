import React from 'react'
import BottomLeftMenu from './BottomLeftMenu'
import BottomRightMenu from './BottomRightMenu'
import Location from './Location'

export default function FooterText() {
  return (
    <div>
        
        <Location/>
        <BottomLeftMenu/>
        <BottomRightMenu/>
    </div>
  )
}
