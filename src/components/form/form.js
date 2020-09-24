import React, {useState, useEffect} from 'react';

import Position from './components/position';

import {getPositions} from '../../services/api';

const Form = () => {

  const [positions, setPositions] = useState([]);
  const [position_id, setPosition_id]=useState();


   useEffect( ()=> {
    const fetchData = async () => {
      const pos = await getPositions();
      setPositions(pos);
    }
    fetchData();

   }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
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
                        <form onSubmit={handleSubmit} action="#">
                            <div className="form__field">
                                <label htmlFor="form__name">Name</label>
                                <input className="form__name" id="form__name" placeholder="Your name" />
                            </div>

                            <div className="form__field">
                                <label htmlFor="form__email">Email</label>
                                <input className="form__email" id="form__email" placeholder="Your email" type="email" />
                            </div>
                            <div className="form__field">
                                <label htmlFor="form__phone">Phone number</label>
                                <input className="form__phone" id="form__phone" placeholder="+380 XX XXX XX XX" type="email" />
                            </div>
                            <p className="form__radioTitle">Select your position</p>

                            {positions.length && positions.map(position=>(
                                <div key={position.id} className="form__radioWrapper">
                                <input className="form__radio" name="form__radio"
                                id={`form__radio${position.id}`} type="radio"
                                onChange={()=>setPosition_id(position.id)}
                                />
                                <label className="form__radioLabel" htmlFor={`form__radio${position.id}`}>{position.name}</label>
                            </div>)
                            )}

                            <p className="form__uploadTitle">Photo</p>
                            <div className="form__uploadWrapper">
                              <label className="form__labelUpload" htmlFor="form__upload">
                                  <input className="form__upload" id="form__upload" type="file"  accept=".jpg, .jpeg, .png"/>
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
            Selected position: {position_id}
        </section>
    )

}

export default Form;
