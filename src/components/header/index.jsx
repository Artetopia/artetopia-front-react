// HeaderComponent.js
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '/assets/hero-image.svg';
import imagePlayButtton from '/assets/play-button.svg';
import topDescription from '/assets/top_descripcion.svg';
import Navbare from '../../components/navbar';
import AnimationButton from '../../components/animation_button';
import ButtonAction from '../buttonAction';

function HeaderComponent() {
    return (
        <div>
            {/* Hero Section */}
            <div className='container hero_section_desktop' id='nosotros'>
                <section className='hero_section'>
                    <div className='top_description'>
                        <img src={topDescription} alt='checkmark icon' />
                        <p className='paragraph_top_description'>
                            El marketplace de artesanías mas confiable
                        </p>
                    </div>
                    <h1 className='heroSection_title'>
                        Bienvenido a{' '}
                        <span className='pink_artetopia'>ARTETOPIA</span>
                    </h1>
                    <p className='intro_hero'>
                        Un espacio donde la creatividad y la artesanía se
                        fusionan. Explora nuestra amplia selección de productos
                        únicos, cuidadosamente elaborados a mano por talentosos
                        artesanos de México.
                    </p>
                    <div className='hero_flex_button_icon'>
                        <ButtonAction buttonClass="button-primary mt-3" text="Registrarse" action="./register"></ButtonAction>
                        <div className='desktop_video'>
                            <img
                                src={imagePlayButtton}
                                alt='Icono para visualisar video'
                                className='desktop_video_icon'
                            />
                            <span className='video_description'>Ver Video</span>
                        </div>
                    </div>
                </section>
                <img src={image} alt='Artesana' className='hero_image' />
            </div>
        </div>
    );
}

export default HeaderComponent;
