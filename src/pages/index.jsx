import "./dashboardClient.scss"

const DashboardClient = ({websiteName, profilePic, rate, categories}) => {
 
    return (
        <>
        <div className="title-head text-center">
            <h3 className='principal-title  d-flex justify-content-center'>Las mejores artesanías de México</h3>
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
        <div className="content-craftsman-container pt-4 pb-1 px-1">
            <div className="card-craftsman-container rounded-4">
                <h5 className='website-name-label text-center'>{websiteName}</h5>
                <p>{profilePic}</p>
                <p>{rate}</p>
                <p>{categories}</p>
            </div>
        </div>
        
        </>
    )}

export default DashboardClient;