import logoFacebook from '../../assets/facebook.png'
import logoTwitter from '../../assets/twitter.png'
import logoYoutube from '../../assets/youtube.png'
import logoLinkedin from '../../assets/linkedin.png'
import logoInstagram from '../../assets/instagram.png'
import s from './footer.module.scss'

export default function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href="https://www.facebook.com/vainaweb"><img src={logoFacebook} alt="" /></a>
                    <a href="https://x.com/vainaweb"><img src={logoTwitter} alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w"><img src={logoYoutube} alt="" /></a>
                    <a href="https://www.linkedin.com/company/vainaweb/posts/?feedView=all"><img src={logoLinkedin} alt="" /></a>
                    <a href="https://www.instagram.com/vainaweb/"><img src={logoInstagram} alt="" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}