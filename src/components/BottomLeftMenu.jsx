import React from 'react'
import MenuLinks from './MenuLinks'
import BottomRightMenu from './BottomRightMenu'

export default function BottomLeftMenu() {
  return (
    <div style={{ display:'flex', justifyContent:'space-between',paddingTop:'10px', backgroundColor:'#f8f9fa', gap:'10px'}}>
       <div style={{display:'flex',gap:'10px',paddingTop:'10px'}}>
       <MenuLinks title={'About'}/>
       <MenuLinks title={'Advertising'}/>
       <MenuLinks title={'Business'}/>
       <MenuLinks title={'How Search works'}/>
       </div>
       <div>
    <BottomRightMenu/>
    </div>
        </div>
  )
}
