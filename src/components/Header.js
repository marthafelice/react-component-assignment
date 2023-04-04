import React from 'react'
import MenuLinks from './MenuLinks.jsx'
import { AppsLauncherIcon } from './AppsLauncherIcon'
import Avatar from './Avatar'

export default function Header() {
  return (
    <div style={{display:'flex', justifyContent:'flex-end',padding:'8px',alignItems:'center'}}>
      <div style={{display:'flex',gap:'5px'}}>
      <MenuLinks title={"Gmail"}/>
      <MenuLinks title={"Images"}/>
      <AppsLauncherIcon/>
      <Avatar/>
      </div>
     
    </div>
  )
}
