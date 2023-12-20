import React, { useState, Fragment } from 'react';
import "./multistep.scss"
import { useForm } from 'react-hook-form';
import Page3 from "../../pages/Page3"
import Page4 from '../../pages/Page4';


const MultiStepForm = () => {
const { register, handleSubmit, formState: {errors} } = useForm();  



  const [step, setStep] = useState(3);
  // const [formData, setFormData] = useState({});

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // handle form submission
  // };
  // onSubmit = handleSubmit((data) => {
  //   console.log(data)
  // })


const onSubmit = (data) => {
  console.log('data', data)
}
  return (
    <div>
        {/* <form onSubmit={handleSubmit(() => {
            console.log("Formulario enviado")
          })}>
          <label htmlFor='productName' className='body-text d-flex '>Nombre del articulo <p className='asterisk'> *</p></label> 
            <input 
            name='productName'
            className="border-input-text rounded-5" 
            type="text" 
            {...register('productName ', {
              required: {
                value: true,
                message: "Titulo requerido"
              },
              minLength: 2,
              maxLength: 20
            }
            )}
            />
            {errors?.productName?.type === 'minLength' && <span>El nombre debe tener al menos 2 caracteres</span>}
          </form> */}
        

    {/* <Page3 /> */}
    <Page4 />     
    </div>
  );
};

export default MultiStepForm;