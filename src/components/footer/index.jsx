import "./index.css";

const Footer = () => {
    return (
        <>
            <h1>Footer</h1>
            <hr className='footer-divider border-3 opacity-75'/>
            <div className="container footer-container">
                <div className="row">
                    <div className='row col-lg-4 about-artetopia'>
                        <img className='col-lg-3 logo-artetopia-footer rounded-4' src='https://us.123rf.com/450wm/topicha/topicha1701/topicha170100155/70371032-logotipo-colorido-abstracto-con-cruzar-l%C3%ADneas-anaranjadas-y-rojas-plantilla-de-logotipo-gen%C3%A9rico.jpg' alt='logo-artetopia'/>
                        <h2 className='artetopia col-lg-9 text-start fw-semibold'>Artetopia</h2>
                        <p className='text-start lh-sm'>Nuestra misión es crear un mercado de artesanías vibrante que celebre la habilidad, la pasión y la creatividad de los artesanos en todo el mundo.</p>
                    </div>  

                    <div className='col-lg-2 menu-section'>
                        <p className='sections-footer'>Menu</p>
                        <p className='link-footer'>Inicio</p>
                        <p className='link-footer'>Nosotros</p>
                        <p className='link-footer'>Artesanos</p>
                    </div>
                    <div className='col-lg-3 useful-pages-section'>
                        <p className='sections-footer'>Paginas utiles</p >
                        <p className='link-footer'>Aviso de privacidad</p>
                        <p className='link-footer'>Términos y condiciones</p>
                    </div>
                    <div className='col-lg-3 contact-section'>
                        <p className='sections-footer'>Contactanos</p>
                        <div className="container">
                            <div className="row contact-container">
                                <div className="col-4 email-container">
                                </div>
                                <div className="col-8">
                                    <p className='email-text fw-medium lh-1'>Email</p>
                                    <p className='direct-info-contact lh-1'>artetopia@arte.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row contact-container">
                                <div className="col-4 phone-container">
                                </div>
                                <div className="col-8">
                                    <p className='phone-text fw-medium lh-1'>Telefono</p>
                                    <p className='direct-info-contact lh-1'>55-ARTETOPIA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container more-info-container">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-3 more-info-button">
                            <p className="more-info-text">Artesano</p>
                        </div>
                        <div className="col-3 more-info-button">
                            <p className="more-info-text">Materiales</p>
                        </div>
                    </div>
                </div>
                <hr className='footer-divider border-3 opacity-75'/>  
                <small className='copyright-text d-flex justify-content-center'> Copyright <p className='name-artetopia'> Artetopia </p> 2023 | Todos los derechos reservados</small> 
                    
                
            </div>
        </>
    )
}

export default Footer;