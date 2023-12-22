import CardCraftsman from "../../components/CardCraftsman";
import Searchbar from "../../components//Searchbar";
import "./dashboardClient.css"

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
      },
      { 
        name: 'FLOR DE CANELA',
        profilePic: 'https://img.freepik.com/foto-gratis/bodegon-herramientas-ceramica-alfareria_23-2150197287.jpg?w=360&t=st=1702434457~exp=1702435057~hmac=a87e51552a2df4bd5ea943d5d2b2c87cdae059fe60fbe12bef97830145f45490',
        rate: '4',
        categories: ['Arcilla', 'Ceramica', 'Cristal', 'Decoracion', 'Plastico']
      }
    ]

      
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
                                    <button className='categories-button-container text-center rounded-1 my-1 me-1'>{category}</button>
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
        <div className="content-craftsman-container d-flex justify-content-center py-3 px-3 px-lg-1">
            <div className="container px-1 mx-4">
                <div className="row d-flex justify-content-lg-between">
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
                    <CardCraftsman
                    websiteName={websites[2].name}
                    profilePic={websites[2].profilePic}
                    rate={websites[2].rate}
                    categories={websites[2].categories}
                    />
                    <CardCraftsman
                    websiteName={websites[1].name}
                    profilePic={websites[1].profilePic}
                    rate={websites[1].rate}
                    categories={websites[1].categories}
                    />
                </div>
            </div>
        </div>
        </>
    )}

export default DashboardClient;