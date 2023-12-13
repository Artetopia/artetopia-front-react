import "./CardCraftsman.scss"

const CardCraftsman = ({websiteName, profilePic, rate, categories}) => {
    return (
        <div className="col-12 col-lg-4 card-craftsman-container rounded-4 my-3 px-lg-2">
        <h5 className='website-name-label text-center py-3'>{websiteName}</h5>
            <img className='website-profilePic rounded-circle my-1 border-2 d-block' src={profilePic} alt={`Foto de perfil de ${websiteName}`}/>
            <div className='d-flex justify-content-center py-3 my-3 text-warning'>
                {rate == 0.5 ? <i className="mx-1 fa fa-star-half-empty"/> : rate >= 1 ? <i className="mx-1 fa fa-star"/> : <i className="mx-1 fa fa-star-o"/>}
                {rate == 1.5 ? <i className="mx-1 fa fa-star-half-empty"/> : rate >= 2 ? <i className="mx-1 fa fa-star"/> : <i className="mx-1 fa fa-star-o"/>}
                {rate == 2.5 ? <i className="mx-1 fa fa-star-half-empty"/> : rate >= 3 ? <i className="mx-1 fa fa-star"/> : <i className="mx-1 fa fa-star-o"/>}
                {rate == 3.5 ? <i className="mx-1 fa fa-star-half-empty"/> : rate >= 4 ? <i className="mx-1 fa fa-star"/> : <i className="mx-1 fa fa-star-o"/>}
                {rate == 4.5 ? <i className="mx-1 fa fa-star-half-empty"/> : rate >= 5 ? <i className="mx-1 fa fa-star"/> : <i className="mx-1 fa fa-star-o"/>}
            </div>
            <div className="container">
                <div className="row">
                    {categories.map(category => (
                        <div className='col d-flex justify-content-evenly justify-content-md-center mx-1' key={category}>
                            <button className='categories-button-container d-fill text-center rounded-2 my-3 px-1 mx-md-4 px-md-5 mx-lg-1 px-lg-2'>{category}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    )}
export default CardCraftsman;
