import '../footer/footer-styles.css';
import FacebookLogo from '../social-media/FacebookLogo';
import InstagramLogo from '../social-media/InstagramLogo';
import LindekinLogo from '../social-media/LinkedinLogo';
import TiktokLogo from '../social-media/TiktokLogo';
import WhatsappLogo from '../social-media/WhatsappLogo';
import TwitterLogo from '../social-media/TwitterLogo';

const Footer = () => {
    return (
        <>
            <hr className='footer-divider border-3 opacity-75' />
            <div className='container footer-container'>
                <div className='row'>
                    <div className='row col-lg-4 about-artetopia'>
                        <img
                            className='col-lg-2 logo-artetopia-footer rounded-5'
                            src='https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png'
                            alt='artetopia logo'
                        />
                        <h2 className='artetopia col-lg-1 text-start fw-semibold'>
                            Artetopia
                        </h2>
                        <p className='text-start lh-sm my-3 mt-lg-4'>
                            Nuestra misión es crear un mercado de artesanías
                            vibrante que celebre la habilidad, la pasión y la
                            creatividad de los artesanos en todo el mundo.
                        </p>
                        <div className='row row-cols-auto m-0 p-0 d-flex align-items-center social-media-container'>
                            <FacebookLogo />
                            <TwitterLogo />
                            <InstagramLogo />
                            <WhatsappLogo />
                            <LindekinLogo />
                            <TiktokLogo />
                        </div>
                    </div>

                    <div className='col-lg-2 mt-3 ms-lg-4 menu-section'>
                        <p className='sections-footer fw-bolder'>Menu</p>
                        <a
                            href='http://www.kodemia.com'
                            title='inicio'
                            className='link-footer'
                        >
                            <p>Inicio</p>
                        </a>
                        <a
                            href='http://www.kodemia.com'
                            title='nosotros'
                            className='link-footer'
                        >
                            <p>Nosotros</p>
                        </a>
                        <a
                            href='http://www.kodemia.com'
                            title='artesanos'
                            className='link-footer'
                        >
                            <p>Artesanos</p>
                        </a>
                    </div>
                    <div className='col-lg-3 useful-pages-section d-none d-lg-block'>
                        <p className='sections-footer fw-bolder'>
                            Paginas utiles
                        </p>
                        <a
                            href='http://www.kodemia.com'
                            title='aviso-privacidad'
                            className='link-footer'
                        >
                            <p>Aviso de privacidad</p>
                        </a>
                        <a
                            href='http://www.kodemia.com'
                            title='terminos-condiciones'
                            className='link-footer'
                        >
                            <p>Términos y condiciones</p>
                        </a>
                    </div>
                    <div className='col-lg-3 col-md-5 col-8 contact-section'>
                        <p className='sections-footer'>Contactanos</p>
                        <div className='container'>
                            <div className='row contact-container rounded-3'>
                                <div className='col-1 email-container rounded-3 d-flex justify-content-center align-items-center'>
                                    <svg
                                        className='mail-vector'
                                        width='100px'
                                        height='40px'
                                        viewBox='0 -3.5 32 32'
                                        version='1.1'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='#ffffff'
                                    >
                                        <g id='SVGRepo_bgCarrier'></g>
                                        <g id='SVGRepo_tracerCarrier'></g>
                                        <g id='SVGRepo_iconCarrier'>
                                            {' '}
                                            <title>mail</title>{' '}
                                            <desc>
                                                Created with Sketch Beta.
                                            </desc>{' '}
                                            <defs> </defs>{' '}
                                            <g
                                                id='Page-1'
                                                stroke='none'
                                                fill='none'
                                            >
                                                {' '}
                                                <g
                                                    id='Icon-Set-Filled'
                                                    transform='translate(-414.000000, -261.000000)'
                                                    fill='#ffffff'
                                                >
                                                    {' '}
                                                    <path
                                                        d='M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z'
                                                        id='mail'
                                                    >
                                                        {' '}
                                                    </path>{' '}
                                                </g>{' '}
                                            </g>{' '}
                                        </g>
                                    </svg>
                                </div>
                                <div className='col-2'>
                                    <p className='contact-container-text contact-text fw-medium lh-1'>
                                        Email
                                    </p>
                                    <p className='contact-container-text direct-info-contact fw-bold lh-1'>
                                        artetopia@arte.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row contact-container rounded-3'>
                                <div className='col-4 phone-container rounded-3 position-relative '>
                                    <svg
                                        className='phone-vector'
                                        fill='#ffffff'
                                        width='36px'
                                        height='36px'
                                        viewBox='0 0 32 32'
                                        version='1.1'
                                        xmlns='http://www.w3.org/2000/svg'
                                        stroke='#ffffff'
                                    >
                                        <g id='SVGRepo_bgCarrier'></g>
                                        <g id='SVGRepo_tracerCarrier'></g>
                                        <g id='SVGRepo_iconCarrier'>
                                            {' '}
                                            <title>phone</title>{' '}
                                            <path d='M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z'></path>{' '}
                                        </g>
                                    </svg>
                                </div>
                                <div className='col-8'>
                                    <p className='contact-container-text contact-text fw-medium lh-1'>
                                        Telefono
                                    </p>
                                    <p className='contact-container-text direct-info-contact fw-bold lh-1'>
                                        55-ARTETOPIA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container more-info-container'>
                    <div className='row d-flex justify-content-lg-center'>
                        <div className='row col-lg-2 col-md-3 col-5 more-info-button rounded-2 ms-2 me-2 d-flex '>
                            <button
                                type='button'
                                className='btn btn-labeled btn-default more-info-text d-flex justify-content-center align-items-center fs-4 ps-0'
                            >
                                Artesanos
                                <span className='btn-label ms-1 pr-0'>
                                    <i className='fa fa-chevron-right'></i>
                                </span>
                            </button>
                        </div>
                        <div className='row col-lg-2 col-md-3 col-5 more-info-button rounded-2 ms-2 d-flex '>
                            <button
                                type='button'
                                className='btn btn-labeled btn-default more-info-text  d-flex justify-content-center align-items-center fs-4 ps-0'
                            >
                                Materiales
                                <span className='btn-label ms-1 pr-0'>
                                    <i className='fa fa-chevron-right'></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='footer-divider border-1 opacity-75 ms-2 me-2' />
                <small className='copyright-text  d-flex flex-wrap justify-content-center'>
                    {' '}
                    Copyright de equipo{' '}
                    <p className='name-artetopia'> Artetopia </p> | Todos los
                    derechos reservados
                </small>
            </div>
        </>
    );
};

export default Footer;
