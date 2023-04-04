import React from 'react'
import MenuLinks from './MenuLinks'

export default function BottomRightMenu() {
  return (
    <div  style={{ display:'flex',  backgroundColor:'#f8f9fa', gap:'10px'}}>
      <MenuLinks title={'Privacy'} />
      <MenuLinks title={'Terms'}/>
      <MenuLinks title={'Settings'}/>
    </div>
  )
}
