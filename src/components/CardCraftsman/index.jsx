import "./CardCraftsman.scss"

const CardCraftsman = ({websiteName, profilePic, rate, categories}) => {
    return (
        <div className="content-craftsman-container pt-4 pb-1 px-2">
            <div className="card-craftsman-container rounded-4">
                <h5 className='website-name-label text-center'>{websiteName}</h5>
                <img className='website-profilePic rounded-circle border-2 d-block' src={profilePic} alt={`Foto de perfil de ${websiteName}`}/>
                <p>{rate}</p>
                <p>{categories}</p>
            </div>
        </div>
    )}

export default CardCraftsman;
