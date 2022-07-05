import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';
import hero from '../images/image-hero-desktop.png';
const Content = () => {
    return (
        <>
            <section className='article'>
                <div className='top'>
                    <h1>Make<br /> remote work</h1>
                    <p>Get your team in sync, no matter your location.<br />
                        Streamline processes, create team rituals, and<br />
                        watch productivity soar.
                    </p>
                    <button className='learn-more'>Learn More</button>
                </div>
                <div className='sponsors'>
                    <img src={databiz} alt="databiz" />
                    <img src={audiophile} alt="audiophile" />
                    <img src={meet} alt="meet" />
                    <img src={maker} alt="maker" />
                </div>
            </section>
            <section className='hero'>
                <img src={hero} alt="hero" className='hero-image' />
            </section>
        </>
    );
}

export default Content;