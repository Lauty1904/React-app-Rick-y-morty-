import React, { useState } from 'react'

export const Footer = () => {

  const [clicks, setClicks] = useState(0);
  const year = new Date().getFullYear();
  const companyName = 'Lucero Company'

  const handleCick = () => {
    console.log("click")
  }
  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <span>
    <img src='rick.png'
    height={52}
    className='app-logo'
    onClick={handleCick}
    />
    </span>
    <div className="col-md-4 d-flex align-items-center">
      
      <span className="mb-3 mb-md-0 text-muted">© {year} {companyName}, Inc</span>
    </div> 

  </footer>
</div>
  )
}


