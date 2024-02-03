import './About.css';
import Photo from '../assets/Photo.jpg';
import Star from '../assets/star.png';
import StarF from '../assets/starF.png';

export function About() {
    return (
        <div className='about'>
            <div className='groupAbout'>
                <div className='aboutMe'>
                    <img className='imgAbout' src={Photo} alt=''/>
                    <h1 className='nameAbout'>
                        Isaac&nbsp; 
                        <strong>
                             Martins
                        </strong>
                    </h1>
                    <p className='textAbout'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.</p>
                </div>
                <div className='mySkills'>
                    <h1 className='nameSkills'>
                        Hard&nbsp;
                        <strong>
                            Skills
                        </strong>
                    </h1>
                    <div className='groupSkills'>
                        <div className='skills'>
                            <div className='skill'> <p>Python</p>  <img src={Star} alt=''/> <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={StarF} alt=''/> </div>
                            <div className='skill'> <p>HTML</p> <img src={Star} alt=''/> <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/> </div>
                            <div className='skill'> <p>React</p> <img src={Star} alt=''/> <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/> </div>
                            <div className='skill'> <p>C#</p> <img src={Star} alt=''/> <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/> </div>
                        </div>

                        <div className='skills'>
                            <div className='skill'> <p>JavaScript</p>  <img src={Star} alt=''/> <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={StarF} alt=''/> </div>
                            <div className='skill'> <p>CSS</p> <img src={Star} alt=''/> <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/> </div>
                            <div className='skill'> <p>MySQL</p> <img src={Star} alt=''/> <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/> </div>
                            <div className='skill'> <p>Postgres</p> <img src={Star} alt=''/> <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/>  <img src={Star} alt=''/> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

