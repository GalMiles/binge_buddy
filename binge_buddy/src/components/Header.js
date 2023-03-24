import React from 'react'

function Header() {
  return (
    <div>
        <div onClick={window.scroll(0,0)} className="header">BingeBuddy</div>  
    </div>
  )
}

export default Header

//fix that the header stay when we roll down
//add scroll to top when click on header