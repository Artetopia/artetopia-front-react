import "./index.css";

const Footer = () => {
    return (
        <>
            <h1>Footer</h1>
            <hr className='footer-divider border-3'/>
            <div className="container  footer-container">
                <div className="row">
                    <div className='row col-lg-5 about-artetopia'>
                        <img className='col-lg-3 logo-artetopia-footer rounded-4' src='https://us.123rf.com/450wm/topicha/topicha1701/topicha170100155/70371032-logotipo-colorido-abstracto-con-cruzar-l%C3%ADneas-anaranjadas-y-rojas-plantilla-de-logotipo-gen%C3%A9rico.jpg' alt='logo-artetopia'/>
                        <h2 className='artetopia col-lg-9 text-start fw-semibold'>Artetopia</h2>
                        <p className='text-start'>Nuestra misión es crear un mercado de artesanías vibrante que celebre la habilidad, la pasión y la creatividad de los artesanos en todo el mundo.</p>
                    </div>  

                    <div className='col-lg-1 menu-section'>
                        <p className='sections-footer'>Menu</p>
                        <p className='link-footer'>Inicio</p>
                        <p className='link-footer'>Nosotros</p>
                        <p className='link-footer'>Artesanos</p>
                    </div>
                    <div className='col-lg-2 useful-pages-section'>
                        <p className='sections-footer'>Paginas utiles</p >
                        <p>Aviso de privacidad</p>
                        <p>Términos y condiciones</p>
                    </div>
                    <div className='col-lg-4 contact-section'>
                        <p className='sections-footer'>Contactanos</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;