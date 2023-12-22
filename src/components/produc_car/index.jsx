import { useState } from "react";
const ProductCard = ({imge,name_product,name_craftman,price,cantidad}) => {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className='row mt-3'>
                <div className='col-3'>
                    <img src={imge} alt="" className="rounded image_card w-100" />
                </div>
                <div className='col-6'>
                    <div className="d-flex flex-column justify-content-between">
                        <div className="mb-lg-3">
                            <h4>{name_product}</h4>
                            <h5>{name_craftman}</h5>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className={`heart-button ${active ? "active" : ""}`} onClick={() => setActive(!active)} >
                                <svg xmlns="http://www.w3.org/2000/svg" className="heart" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path className="heart" d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                </svg>
                            </button>
                            <button className="heart-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <h3>$ {price}</h3>
                    <hr className="hrcar" />
                    <div className="d-flex justify-content-around align-items-center car-add rounded w-100">
                        <button className="heart-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                            </svg>
                        </button>
                        <h5>{cantidad}</h5>
                        <button className="heart-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
