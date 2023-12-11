import "./CardCraftsman.scss"

const CardCraftsman = ({websiteName, profilePic, rate, categories}) => {

    return (
        <div className="content-craftsman-container pt-4 pb-1 px-2">
            <div className="card-craftsman-container rounded-4">
                <h5 className='website-name-label text-center py-3'>{websiteName}</h5>
                <img className='website-profilePic rounded-circle my-1 border-2 d-block' src={profilePic} alt={`Foto de perfil de ${websiteName}`}/>
                <div className='d-flex justify-content-center py-3'>
                    {rate == 0.5 ? <i className="text-warning fa fa-star-half-empty"/> : rate >= 1 ? <i className="text-warning fa fa-star"/> : <i className="text-warning fa fa-star-o"/>}
                    {rate == 1.5 ? <i className="text-warning fa fa-star-half-empty"/> : rate >= 2 ? <i className="text-warning fa fa-star"/> : <i className="text-warning fa fa-star-o"/>}
                    {rate == 2.5 ? <i className="text-warning fa fa-star-half-empty"/> : rate >= 3 ? <i className="text-warning fa fa-star"/> : <i className="text-warning fa fa-star-o"/>}
                    {rate == 3.5 ? <i className="text-warning fa fa-star-half-empty"/> : rate >= 4 ? <i className="text-warning fa fa-star"/> : <i className="text-warning fa fa-star-o"/>}
                    {rate == 4.5 ? <i className="text-warning fa fa-star-half-empty"/> : rate >= 5 ? <i className="text-warning fa fa-star"/> : <i className="text-warning fa fa-star-o"/>}
                </div>
                <p>{categories}</p>
                {/* {categories.forEach(category =>  console.log(category ) )} */}
            </div>
            
        </div>
    )}
export default CardCraftsman;
