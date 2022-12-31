import React from 'react'

const Sidenavcard = ({image}) => {
  return (
    <div>
        <div className='navcardcontainer'>
            <img src={image} alt="" />
            <p className={navcardcontent}>{content}</p>
        </div>
    </div>
  )
}

export default Sidenavcard