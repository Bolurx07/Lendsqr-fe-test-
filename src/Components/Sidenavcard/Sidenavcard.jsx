import './Sidenavcard.scss'

const Sidenavcard = ({image, content, alt, active}) => {
  return (
    <div className={active === true ? 'background' : 'nobackground'} >
        <div className='navcardcontainer'>
            <img src={image} alt={alt} />
            <a href="#" className='navcardcontent'>{content}</a>
        </div>
    </div>
  )
}

export default Sidenavcard