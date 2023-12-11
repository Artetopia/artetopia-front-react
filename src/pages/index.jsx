import CardCraftsman from "../components/CardCraftsman";
import "./dashboardClient.scss"

const DashboardClient = () => {
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
        categories: ['Joyeria', 'Cuero', 'Bolsas', 'Botas', 'Textil']
      }]

      
    return (
        <>
        <div className="title-head text-center">
            <h3 className='principal-title d-flex justify-content-center'>Las mejores artesanías de México</h3>
            <p className='subtitle-text d-flex justify-content-center'>+1000 artesanos de todas las partes de México</p>
        </div>
        <div className="d-flex justify-content-evenly">
            <button className='filter-buttons rounded-3'>Todos</button>
            <button className='filter-buttons rounded-3'>Tendencia</button>
            <button className='filter-buttons rounded-3'>Recientes</button>
        </div>
        <div className="d-flex justify-content-center">
        <div className="searchbar-container my-3">
            <input type="text" className="form-control border-1 rounded-5" placeholder='Buscar'/>
            <i className="fa fa-search"></i>
        </div>
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