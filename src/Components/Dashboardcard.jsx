import '../Stylesheets/Dashboardcard.scss'

const Dashboardcard = ({imgsrc, content, data, alt}) => {
  return (
    <div className='usercardcontainer'>
        <img src={imgsrc} alt={alt} />
        <p className='usercardcontent'>{content}</p>
        <p className='usercarddata'>{data}</p>
    </div>
  )
}

export default Dashboardcard