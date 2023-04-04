import React from 'react'
import MenuLinks from './MenuLinks'

export default function LanguageLink() {
  return (
    <div style={{ display:'flex',justifyContent:'center', paddingTop:'10px',gap:'9px'}}>
         Google offered in : <MenuLinks title={'Hausa'} /> <MenuLinks title={'Igbo'}/> <MenuLinks title={'Ede Yoruba'}/> <MenuLinks title={'Nigerian Pidgin'}/>
    </div>
  )
}
