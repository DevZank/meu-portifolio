import './Home.css';
import GitHub from '../assets/Git.svg';
import Linkedin from '../assets/Linkedin.svg';
import Instagram from '../assets/Instagram.svg';
import HomeArt from '../assets/HomeArt.svg';

export function Home() {
    return (
        <div className='home'>
            <div className='homeGroupDiv'>
                <div className='infoDiv'>
                    <div className='textDiv'>
                        <p className='pHome'>Olá pessoas,</p>
                        <h1 className='h1Home'>EU SOU UM</h1>
                        <h1 className='h1Home'>PROGRAMADOR</h1>
                        <p className='pHome'>Seja bem-vindo ao meu portifólio website</p>
                    </div>

                    <div className='btnDiv'>
                        <button className='moreAbMe'><a  href='https://google.com'>Saiba mais sobre mim</a></button>
                    </div>
                    
                    <div className='socialDiv'>
                        <a href='https://github.com/DevZank' className='socialDiv'><img src={GitHub} alt=''/></a>
                        <a href='https://br.linkedin.com/in/isaac-martins-55a885284' className='socialDiv'><img src={Linkedin} alt=''/></a>
                        <a href='https://www.instagram.com/isaacbymartins_/' className='socialDiv'><img src={Instagram} alt=''/></a>
                    </div>
                </div>

                <div className='homeImgDiv'>
                    <img src={HomeArt} alt=''/>
                </div>
            </div>
        </div>
    )
}