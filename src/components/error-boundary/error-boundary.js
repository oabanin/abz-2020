import React from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, info) { 
    console.log('Logging ', error, info); 
  }

    render() {
    if (this.state.hasError) {
      return (
      <section className="error">
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="error__title">Error in Component</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 offset-md-3">
              <p className="error__subtitle">Try to reload page</p>
            </div>
          </div>
        </div>
      </section>);

    }
    return this.props.children;
  }
}

export default ErrorBoundary;
