import './landing_2.css';
import { websitesInfo, workInfo } from '../../auxiliary/workInfo';
import DisplayMenu from '../../components/displayMenu/displayMenu';

export default function Landing_2() {

    
    function scrollTo(part) {
        const element = document.getElementById(part).getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: element,
            behavior: 'smooth'
        });
    }

    function NavBarItem({ itemName }) {
        return <div className='navbar__items__item' onClick={() => scrollTo(itemName)}>
            {itemName}
        </div>
    }

    return (
        <div className='landing_v2'>
            <section className='home' id='home'>
                <div className='container'>
                    <div className='navbar'>
                        <div className='navbar__logo'>
                            Acudav
                        </div>
                        <div className='navbar__items'>
                            <NavBarItem itemName={'home'} />
                            <NavBarItem itemName={'experience'} />
                            <NavBarItem itemName={'websites'} />
                            <NavBarItem itemName={'contact'} />
                        </div>
                    </div>
                    <div className='home__content'>
                    <h1 className='home__title'>Hi! I am David Acuña</h1>
                    <p className='home__description'>Web developer and A/B tester working in development field for 4 years so far, specialize UI and UX</p>
                    <div className='home__button' onClick={() => scrollTo('contact')}>Hire Me</div>
                </div>
                </div>
            </section>
            <section className='section container' id='experience'>
                <h2 className='section__title'>Work experience</h2>
                <DisplayMenu info={workInfo} title={'My responsabilities:'} />
            </section>
            <section className='section container' id='websites'>
                <h2 className='section__title'>Websites where I contributed</h2>
                <div className='websites__items'>
                    {websitesInfo.map((website, index) => <a key={index} href={website.URL} target='blank'>
                        <div className='websites__item' style={{backgroundColor: website.bgColor}}>
                        <img className='websites__item__image' src={website.img} alt='project__image'></img>
                    </div>
                    </a>)}
                </div>
            </section>
            <section className='section container' id='contact'>
                <h2 className='section__title'>Ready To Get Started?</h2>
                <h3 className='contact__subtitle'>AVAILABLE FOR NEW PROJECT</h3>
                <h4 className='contact__email'>Want to discuss about your project?</h4>
                <h4 className='contact__email'>Feel free to mail me: <a href= "mailto: acudav20@gmail.com?Subject=Portfolio">acudav20@gmail.com</a></h4>
                <p className='contact__text'>{'Also I am available on '}
                    <a href='https://www.linkedin.com/in/david-andr%C3%A9s-acu%C3%B1a-rojas-a5530319a/' target='blank'>LinkedIn</a> 
                    {' and '}  
                    <a href='https://www.upwork.com/freelancers/~015559287f3faf91cb' target='blank'>Upwork</a> 
                </p>
            </section>
            <footer>
                My Portfolio
            </footer>
        </div>
    )
}