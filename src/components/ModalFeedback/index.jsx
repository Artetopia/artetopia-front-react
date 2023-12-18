import { Input} from "reactstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./modalFeedback.scss"
import { useState } from "react";
const ModalFeedback = () => {
    const [rate, setRate] = useState ();
    
    const handleRateChange = (e) => {
        setRate(e.target.value);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
       <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
          <div className="container d-flex justify-content-center mt-100">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body text-center"> 
                            <fieldset className="rating">
                                <Input 
                                    type="radio" 
                                    id="star5" 
                                    name="rating" 
                                    value="5" 
                                    checked={rate === 5 ? true : false}
                                    onChange={handleRateChange}/>
                                    <label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
                                <Input 
                                    type="radio" 
                                    id="star4half" 
                                    name="rating" 
                                    value="4.5" 
                                    onChange={handleRateChange}/>
                                    <label className="half" htmlFor="star4half" title="4.5 stars"></label>
                                <Input 
                                    type="radio" 
                                    id="star4" 
                                    name="rating" 
                                    value="4" 
                                    onChange={handleRateChange}/>
                                    <label className = "full" htmlFor="star4" title="4 stars"></label>
                                <Input 
                                    type="radio" 
                                    id="star3half" 
                                    name="rating" 
                                    value="3.5" 
                                    onChange={handleRateChange}/>
                                    <label className="half" htmlFor="star3half" title="3.5 stars"></label>
                                <Input 
                                    type="radio" 
                                    id="star3" 
                                    name="rating" 
                                    value="3" 
                                    onChange={handleRateChange}/>
                                    <label className = "full" htmlFor="star3" title="3 stars"></label>
                                <Input 
                                    type="radio"
                                    id="star2half" 
                                    name="rating" 
                                    value="2.5" 
                                    onChange={handleRateChange}/>
                                    <label className="half" htmlFor="star2half" title="2.5 stars"></label>
                                <Input 
                                    type="radio" 
                                    id="star2" 
                                    name="rating" 
                                    value="2" 
                                    onChange={handleRateChange}/>
                                    <label className = "full" htmlFor="star2" title="2 stars"></label>
                                <Input 
                                    type="radio" 
                                    id="star1half" 
                                    name="rating" 
                                    value="1.5" 
                                    onChange={handleRateChange}/>
                                    <label className="half" htmlFor="star1half" title="1.5 stars"></label>
                                <Input 
                                    type="radio" 
                                    id="star1" 
                                    name="rating" 
                                    value="1" 
                                    onChange={handleRateChange}/>
                                    <label className = "full" htmlFor="star1" title="1 star"></label>
                                <Input 
                                    type="radio" 
                                    id="starhalf" 
                                    name="rating" 
                                    value="0.5" 
                                    onChange={handleRateChange}/>
                                    <label className="half" htmlFor="starhalf" title="0.5 stars"></label>
                                <Input 
                                    type="radio" 
                                    className="reset-option" 
                                    name="rating" 
                                    value="reset" />
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Calificar
            </Button>
          </Modal.Footer>
        </Modal>
        
    </>
    )
}

export default ModalFeedback;