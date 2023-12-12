import CardCraftsman from "../components/CardCraftsman";
import Searchbar from "../components/Searchbar";
import "./dashboardClient.scss"

const DashboardClient = () => {
    const categories = ['Joyería', 'Textil', 'Cerámica', 'Ropa', 'Zapatos', 'Decoración', 'Accesorios']
    const websites = [{ 
        name: 'ARTE | SANO',
        profilePic: 'https://img.freepik.com/foto-gratis/florero-pintura-hombre-vista-frontal_23-2149644938.jpg?w=740&t=st=1702256764~exp=1702257364~hmac=04e5c3574d858e57c9a80d7af4d76e807685950d856b190ae64ff59f8f2ac88c',
        rate: '3.5',
        categories: ['Accesorios', 'Ropa', 'Bolsas', 'Mantel', 'Textil']
      },
      { 
        name: 'ARTESANOS LEON',
        profilePic: 'https://img.freepik.com/foto-gratis/sastre-creativo-trabajando-taller_23-2148970726.jpg?w=740&t=st=1702279290~exp=1702279890~hmac=234009d0e7d4fe552e54f27a6d2efaa680f75e4b09addae1436d0d7959a078a9',
        rate: '1.5',
        categories: ['Cuero', 'Bolsas', 'Botas', 'Textil']
      }]

      
    return (
        <>
        <div className="d-flex justify-content-center">
            <div className="top-categories-container d-none d-lg-block">
                <hr className="horizontal-row-container" />
                <div className="container">
                    <div className="row">
                        <div className='col d-flex justify-content-between align-items-center'>
                            {categories.map(category => (
                                <div key={category}>
                                    <button className='categories-button-container text-center rounded-1 my-1 px-1'>{category}</button>
                                </div>
                            ))}
                            <Searchbar  />
                        </div>
                    </div>
                </div>
                <hr className="horizontal-row-container" />
            </div>
        </div>
        <div className="title-head text-center">
            <h3 className='principal-title d-flex justify-content-center'>Las mejores artesanías de México</h3>
            <p className='subtitle-text d-flex justify-content-center'>+1000 artesanos de todas las partes de México</p>
        </div>
        <div className="d-flex justify-content-evenly justify-content-md-center my-lg-5">
            <button className='filter-buttons rounded-3 mx-md-4'>Todos</button>
            <button className='filter-buttons rounded-3 mx-md-4'>Tendencia</button>
            <button className='filter-buttons rounded-3 mx-md-4'>Recientes</button>
        </div>
        <div className="d-flex justify-content-center d-lg-none">
            <Searchbar />
        </div>
        <CardCraftsman
        websiteName={websites[0].name}
        profilePic={websites[0].profilePic}
        rate={websites[0].rate}
        categories={websites[0].categories}
        />

        <CardCraftsman
        websiteName={websites[1].name}
        profilePic={websites[1].profilePic}
        rate={websites[1].rate}
        categories={websites[1].categories}
        />
        
        
        </>
    )}

export default DashboardClient;