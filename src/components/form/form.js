import React from 'react';

const Form = () => {
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
                        <form className="form" action="#">
                            <label className="label" for="form__name">Name</label>
                            <input className="form__name" id="form__name" placeholder="Your name" />

                        </form>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Form;