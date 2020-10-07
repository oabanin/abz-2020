import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch");
    //setState({ hasError: true });
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>В данном компоненте произошла ошибка, попробуйте перезагрузить страницу</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
