import './index.css'

const FooterButton = ({ buttonTitle, children, setSection }) => {

  return (
    <button className='footer-button' onMouseEnter={() => setSection("is" + buttonTitle)}>
      {children}
      <span className='btn-title'>{buttonTitle}</span>
    </button>
  )
}

export default FooterButton
