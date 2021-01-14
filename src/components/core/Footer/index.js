
import './styles.scss';

export default function Footer(props) {

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__company">
                    <div className="footer__innerContent">
                        <h3>Fyrirtækið</h3>
                        <ul>
                            <li>Kosmos & Kaos</li>
                            <li>
                                <a href="https://www.kosmosogkaos.is/">Heimasíða</a>
                            </li>
                            <li>
                                <a href="https://www.kosmosogkaos.is/about-us">Um Kosmos & Kaos</a>
                            </li>
                            <li>
                                <a href="mailto:hello@kosmosogkaos.is">hello@kosmosogkaos.is</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__info">
                    <div className="footer__innerContent">
                        <h3>Upplýsingar</h3>
                        <ul>
                            <li>Hjalti Geir Garðarsson</li>
                            <li>
                                <a href="mailto:hjaltigeir@gmail.com">hjaltigeir@gmail.com</a>
                            </li>
                            <li>666-0369</li>
                            <li>
                                <a href="https://github.com/slowpokesheep">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}






