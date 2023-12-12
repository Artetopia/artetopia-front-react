import './styles/app.scss';
import bgArtesano from './assets/bgArtesano.png';
import HeaderComponent from './components/header';
import Footer from './components/footer';
import ButtonAction from './components/buttonAction';
import CardsAbout from './components/cards_about';
import { Row } from 'reactstrap';
function App() {
    return (
        <>
            <header>
                <HeaderComponent></HeaderComponent>
            </header>

            <section id='hero-section'></section>

            <section id='about' className='mb-4'>
                <h2 className='text-center heading_primary'>
                    ¿Por qué Artetopia?
                </h2>
                <div className='container'>
                    <Row lg='3' md='1' sm='1' xs='1' className='text-center'>
                        <CardsAbout
                            background_img='card_artetopia1'
                            title='Autenticidad cultural'
                            text='Comprar en un marketplace de artesanos mexicanos te brinda acceso a productos auténticos y representativos de la cultura mexicana.'
                        />

                        <CardsAbout
                            background_img='card_artetopia2'
                            title='Apoyo a comunidades locales'
                            text='Tu compra contribuye al sustento de pequeñas comunidades y familias de artesanos, ayudando a preservar tradiciones y apoyar la economía local.'
                        />

                        <CardsAbout
                            background_img='card_artetopia3'
                            title='Calidad y exclusividad'
                            text='Los productos artesanales mexicanos son reconocidos por su alta calidad y atención al detalle, ofreciendo piezas únicas y exclusivas que no encontrarás en grandes cadenas comerciales.'
                        />
                    </Row>
                </div>
            </section>

            <section id='artesanos'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center heading_primary'>
                            Nuestros artesanos
                        </h2>
                        <form>
                            <div className='form-group d-flex flex-column align-items-center'>
                                <label htmlFor='exampleInputEmail1'>
                                    Filtrar por categoría
                                </label>
                                <select
                                    name='category'
                                    id='category'
                                    className='form-select input_primary'
                                >
                                    <option value=''></option>
                                    <option value=''>Test</option>
                                    <option value=''>Test1</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className='row mt-5'>
                        <div className=' col-12 col-md-6 col-lg-4 mb-4'>
                            <div className='card artesano-card shadow border-0'>
                                <div className='card-img-block'>
                                    <img
                                        className='img-fluid w-100 h-100 rounded-top'
                                        src={bgArtesano}
                                        alt='Card image cap'
                                    />
                                </div>
                                <div className='card-body position-relative padding-top__65'>
                                    <div className='d-flex flex-row profile-container w-100 position-absolute align-items-center'>
                                        <img
                                            src='https://randomuser.me/api/portraits/men/64.jpg'
                                            alt='profile-image'
                                            className='profile h-100'
                                        />
                                        <h5 className='card-title m-0 p-0'>
                                            Landon Hunt
                                        </h5>
                                    </div>
                                    <p className='card-text'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. A fugiat esse iusto
                                        labore et cumque impedit eum dicta
                                        pariatur dolorum voluptas tempore
                                    </p>
                                    <div className='row g-2'>
                                        <div className='col mb-2'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                        <div className='col mb-2'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                    </div>
                                    <div className='row g-2'>
                                        <div className='col'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                        <div className='col'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 mb-4'>
                            <div className='card artesano-card shadow border-0'>
                                <div className='card-img-block'>
                                    <img
                                        className='img-fluid w-100 h-100 rounded-top'
                                        src={bgArtesano}
                                        alt='Card image cap'
                                    />
                                </div>
                                <div className='card-body position-relative padding-top__65'>
                                    <div className='d-flex flex-row profile-container w-100 position-absolute align-items-center'>
                                        <img
                                            src='https://randomuser.me/api/portraits/men/64.jpg'
                                            alt='profile-image'
                                            className='profile h-100'
                                        />
                                        <h5 className='card-title m-0 p-0'>
                                            Landon Hunt
                                        </h5>
                                    </div>
                                    <p className='card-text'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. A fugiat esse iusto
                                        labore et cumque impedit eum dicta
                                        pariatur dolorum voluptas tempore
                                    </p>
                                    <div className='row g-2'>
                                        <div className='col mb-2'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                        <div className='col mb-2'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                    </div>
                                    <div className='row g-2'>
                                        <div className='col'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                        <div className='col'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 mb-4'>
                            <div className='card artesano-card shadow border-0'>
                                <div className='card-img-block'>
                                    <img
                                        className='img-fluid w-100 h-100 rounded-top'
                                        src={bgArtesano}
                                        alt='Card image cap'
                                    />
                                </div>
                                <div className='card-body position-relative padding-top__65'>
                                    <div className='d-flex flex-row profile-container w-100 position-absolute align-items-center'>
                                        <img
                                            src='https://randomuser.me/api/portraits/men/64.jpg'
                                            alt='profile-image'
                                            className='profile h-100'
                                        />
                                        <h5 className='card-title m-0 p-0'>
                                            Landon Hunt
                                        </h5>
                                    </div>
                                    <p className='card-text'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. A fugiat esse iusto
                                        labore et cumque impedit eum dicta
                                        pariatur dolorum voluptas tempore
                                    </p>
                                    <div className='row g-2'>
                                        <div className='col mb-2'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                        <div className='col mb-2'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                    </div>
                                    <div className='row g-2'>
                                        <div className='col'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                        <div className='col'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 mb-4'>
                            <div className='card artesano-card shadow border-0'>
                                <div className='card-img-block'>
                                    <img
                                        className='img-fluid w-100 h-100 rounded-top'
                                        src={bgArtesano}
                                        alt='Card image cap'
                                    />
                                </div>
                                <div className='card-body position-relative padding-top__65'>
                                    <div className='d-flex flex-row profile-container w-100 position-absolute align-items-center'>
                                        <img
                                            src='https://randomuser.me/api/portraits/men/64.jpg'
                                            alt='profile-image'
                                            className='profile h-100'
                                        />
                                        <h5 className='card-title m-0 p-0'>
                                            Landon Hunt
                                        </h5>
                                    </div>
                                    <p className='card-text'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. A fugiat esse iusto
                                        labore et cumque impedit eum dicta
                                        pariatur dolorum voluptas tempore
                                    </p>
                                    <div className='row g-2'>
                                        <div className='col mb-2'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                        <div className='col mb-2'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                    </div>
                                    <div className='row g-2'>
                                        <div className='col'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                        <div className='col'>
                                            <img
                                                src='https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp'
                                                alt='image 1'
                                                className='w-100 rounded-3'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <ButtonAction
                                buttonClass='button-primary'
                                text='Ver más'
                            ></ButtonAction>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id='call-to-action'
                className='d-flex justify-content-center mt-5'
            >
                <div className='row bg_secondary p-4 p-md-5 max__width rounded d-flex align-items-center'>
                    <div className='col-md-8'>
                        <h3 className='text-white'>
                            Crea tu propio sitio web facil y rapido desde{' '}
                            <strong className='heading_primary'>
                                Artetopia
                            </strong>{' '}
                            y comienza a vender tus artesanias.
                        </h3>
                    </div>
                    <div className='col-md-4 text-center'>
                        <ButtonAction
                            buttonClass='button-primary'
                            text='Registrate'
                        ></ButtonAction>
                    </div>
                </div>
            </section>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
}

export default App;
