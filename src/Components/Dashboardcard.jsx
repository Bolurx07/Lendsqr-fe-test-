import React from 'react'

const Dashboardcard = ({imgsrc, content, data}) => {
  return (
    <div>
        <img src={imgsrc} alt="" />
        <p>{content}</p>
        <p>{data}</p>
    </div>
  )
}

export default Dashboardcard