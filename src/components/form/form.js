import React, {useState, useEffect} from 'react';

import {useForm} from 'react-hook-form';

import {getPositions} from '../../services/api';

//import useForm from './hooks/useForm';
//import FormValidationRules from './formValidationRules';




const Form = () => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = data => console.log(data);
  //const {handleChange, handleSubmit, values, errors} = useForm(()=> console.log('submitted'), FormValidationRules);
  //const {name, email, phone, position_id} = values;

  //const entries = Object.entries(values);

  const [fetchedPositions, setFetchedPositions] = useState([]);
  console.log(errors)
   useEffect( ()=> {
    const fetchData = async () => {
      const pos = await getPositions();
      setFetchedPositions(pos);

    }
    fetchData();

   }, [])


    return (
        <section className="form">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 className="form__title">Register to get a work</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <p className="form__subtitle">Attention! After successful registration and alert, update the list of users in the block from the top</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={handleSubmit(onSubmit)} action="#" noValidate>
                            <div className="form__field">
                                <label htmlFor="form__name">Name</label>
                                <input
                                  className={errors.name ? "form__name--error" : "form__name"}
                                  id="form__name"
                                  name="name"
                                  placeholder="Your name"
                                  ////onChange={handleChange}
                                  //value={values.name || ''}

                                  ref={register({ required: 'Name is required'})}
                                />
                                {errors.name && <div className="form__feedback error">{errors.name.message}</div>}
                            </div>

                            <div className="form__field">
                                <label htmlFor="form__email">Email</label>
                                <input
                                  className={errors.email ? "form__email--error" : "form__email"}
                                  id="form__email"
                                  placeholder="Your email"
                                  name="email"
                                  type="email"
                                  ////onChange={handleChange}
                                  //value={values.email || ''}
                                  //required
                                />
                                {errors.email && <div className="form__feedback error">{errors.email}</div>}
                            </div>

                            <div className="form__field">
                                <label htmlFor="form__phone">Phone number</label>
                                <input
                                  className="form__phone"
                                  className={errors.phone ? "form__phone--error" : "form__phone"}
                                  id="form__phone"
                                  name="phone"
                                  //onChange={handleChange}
                                  //value={values.phone || ''}
                                  placeholder="+380 XX XXX XX XX"
                                  type="phone"
                                />
                                {errors.phone && <div className="form__feedback error">{errors.phone}</div>}
                            </div>
                            <p className="form__radioTitle">Select your position</p>

                            {typeof fetchedPositions ==="object" && fetchedPositions.map(position=>(
                              <div key={position.id} className="form__radioWrapper">
                                <input
                                  className="form__radio"
                                  id={`form__radio${position.id}`}
                                  type="radio"
                                  name="position_id"
                                  //onChange={handleChange}
                                  //value={position.id}
                                />
                                <label className="form__radioLabel" htmlFor={`form__radio${position.id}`}>{position.name}</label>
                              </div>)
                            )}
                            {errors.position_id && <div className="form__feedback error">{errors.position_id}</div>}
                            {typeof fetchedPositions ==="string" && <div className="form__feedback error">{fetchedPositions}</div>}

                            <p className="form__uploadTitle">Photo</p>
                            <div className="form__uploadWrapper">
                              <label className="form__labelUpload" htmlFor="form__upload">
                                  <input
                                    className="form__upload"
                                    id="form__upload"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    //required
                                  />
                                  <div className="form__uploadPlaceholder">Upload your photo</div>
                                  <div className="form__uploadButtonWrapper">
                                    <span>Browse</span>
                                  </div>
                              </label>
                            </div>
                            <input className="button form__submit" value="Sing up now" type="submit"/>
                        </form>
                    </div>
                </div>


            </div>

        </section>
    )

}

export default Form;
