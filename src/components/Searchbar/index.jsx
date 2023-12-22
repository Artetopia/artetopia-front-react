import "./searchbar.scss";

const Searchbar = () => { 
    return (
        <div className="searchbar-container my-3">
            <input type="text" className="form-control border-1 rounded-5" placeholder='Buscar'/>
            <i className="fa fa-search"></i>
        </div>
    )
}

export default Searchbar;
