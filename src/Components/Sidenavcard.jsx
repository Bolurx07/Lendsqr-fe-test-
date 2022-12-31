import '../Stylesheets/Sidenavcard.scss'

const Sidenavcard = ({image, content, alt, active}) => {
  return (
    <div className={active === true ? 'background' : 'nobackground'} >
        <div className='navcardcontainer'>
            <img src={image} alt={alt} />
            <p className={navcardcontent}>{content}</p>
        </div>
    </div>
  )
}

export default Sidenavcard