import FooterSelection from './FooterSelection'
import './index.css'

const Footer = ({setSection}) => {
  return (
    <section className='footer-container' >
      <button className='footer-btnProfile'><img src="src/assets/icons/Footer-ProfileIcon.png" alt="" /></button>
      <FooterSelection 
      setSection={setSection}
      />
    </section>
  )
}

export default Footer
