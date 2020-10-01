import React, {useState, useEffect} from 'react';

import {useForm} from 'react-hook-form';

import {getPositions} from '../../services/api';

//import useForm from './hooks/useForm';
//import FormValidationRules from './formValidationRules';




const Form = () => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = data => console.log(data);

  const [fetchedPositions, setFetchedPositions] = useState([]);
  const [choosedFilename, setchoosedFilename] = useState(null);

   useEffect( ()=> {
    const fetchData = async () => {
      const pos = await getPositions();
      setFetchedPositions(pos);

    }
    fetchData();

   }, [])

   const onChooseFile = (e) => {
    setchoosedFilename(e.target.files[0].name);
   }
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
                                  ref={register({
                                    required: 'Name is required',
                                    maxLength : {
                                      value: 60,
                                      message: 'Max length is 60 characters'
                                    },
                                    minLength : {
                                      value: 2,
                                      message: 'Min length is 2 characters'
                                    }
                                  })}
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
                                  ref={register({
                                        required: 'Name is required',
                                        pattern: {
                                          value: /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/,
                                          message: 'Email address must be according to RFC2822'
                                          }
                                        })
                                      }

                                />
                                {errors.email && <div className="form__feedback error">{errors.email.message}</div>}
                            </div>

                            <div className="form__field">
                                <label htmlFor="form__phone">Phone number</label>
                                <input
                                  className={errors.phone ? "form__phone--error" : "form__phone"}
                                  id="form__phone"
                                  name="phone"
                                  ref={register({
                                          required: 'Phone is required',
                                          maxLength : {
                                            value: 20,
                                            message: 'Max length is 20 characters'
                                          },
                                          minLength : {
                                            value: 10,
                                            message: 'Min length is 10 characters'
                                          },
                                          validate: {
                                              checkNumber: value => /^(\+38)?0\d{9}$/.test(value.replace(/[^+\d]/g, "")) || 'Phone number should start with code of Ukraine +380 or just with 0',
                                          },

                                        })
                                      }
                                  placeholder="+380 XX XXX XX XX"
                                  type="phone"
                                />
                                {errors.phone && <div className="form__feedback error">{errors.phone.message}</div>}
                            </div>
                            <p className="form__radioTitle">Select your position</p>

                            {typeof fetchedPositions ==="object" && fetchedPositions.map(position=>(
                              <div key={position.id} className="form__radioWrapper">
                                <input
                                  className="form__radio"
                                  id={`form__radio${position.id}`}
                                  type="radio"
                                  name="position_id"
                                  value={position.id}
                                  ref={register({required: 'Position is required'})}
                                />
                                <label className="form__radioLabel" htmlFor={`form__radio${position.id}`}>{position.name}</label>
                              </div>)
                            )}
                            {errors.position_id && <div className="form__feedback error">{errors.position_id.message}</div>}
                            {typeof fetchedPositions ==="string" && <div className="form__feedback error">{fetchedPositions}</div>}

                            <p className="form__uploadTitle">Photo</p>
                            <div className="form__uploadWrapper">
                              <label className={errors.file ? "form__labelUpload--error": "form__labelUpload"} htmlFor="form__upload">
                                  <input
                                    className="form__upload"                          
                                    id="form__upload"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    name="file"
                                    onChange={onChooseFile}
                                    ref={register({required: 'File is required'})}
                                  />
                                  <div className="form__uploadPlaceholder">{choosedFilename ? choosedFilename : "Upload your photo"}</div>
                                  <div className="form__uploadButtonWrapper">
                                    <span>Browse</span>
                                  </div>
                              </label>
                            </div>
                            
                            {errors.file && <div className="form__feedback error">{errors.file.message}</div>}

                            <input className="button form__submit" value="Sing up now" type="submit"/>
                        </form>
                    </div>
                </div>


            </div>

        </section>
    )

}

export default Form;
