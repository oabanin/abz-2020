import React from 'react';

const Form = () => {

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
                        <form className="form" onSubmit={handleSubmit} action="#">
                            <label className="label" htmlFor="form__name">Name</label>
                            <input className="form__name" id="form__name" placeholder="Your name" />
                            <label className="label" htmlFor="form__email">Email</label>
                            <input className="form__email" id="form__email" placeholder="Your email" type="email" />
                            <label className="label" htmlFor="form__phone">Phone number</label>
                            <input className="form__phone" id="form__phone" placeholder="+380 XX XXX XX XX" type="email" />
                            <p>Select your position</p>
                            <label className="label"><input className="form__radio" name="form__radio" type="radio"/>Frontend developer</label>
                            <label className="label"><input className="form__radio" name="form__radio" type="radio"/>Backend developer</label>
                            <label className="label"><input className="form__radio" name="form__radio" type="radio"/>Designer</label>
                            <label className="label"><input className="form__radio" name="form__radio" type="radio"/>QA</label>
                            <p>Photo</p>
                            <input className="button form__submit" value="Sing up now" type="submit"/>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Form;
