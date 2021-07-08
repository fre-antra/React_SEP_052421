import React from 'react';

let MyRouteInstances = [];

function routerRegister(routeInstance) {
  MyRouteInstances.push(routeInstance);

  const handlePopstate = () => {
    routeInstance.forceUpdate();
  };

  window.addEventListener('popstate', handlePopstate);

  return function unRegister() {
    MyRouteInstances = MyRouteInstances.filter(
      (instance) => instance !== routeInstance
    );
    window.removeEventListener(handlePopstate);
  };
}

const pathMatch = (path, exact) => {
  const locationPath = window.location.pathname;
  if (exact) {
    return locationPath === path;
  }
  return locationPath.includes(path);
};

export class MyRoute extends React.Component {
  render() {
    const { path, children, exact = false, component, render } = this.props;
    if (pathMatch(path, exact)) {
      if (component) {
        return React.createElement(component, {}, null);
      }
      if (render) {
        return render();
      }
      if (children) {
        return children;
      }
    }
    return null;
  }

  componentWillUnmount() {
    console.log('unmount');
    this.unRegister();
  }

  componentDidMount() {
    this.unRegister = routerRegister(this);
  }
}

export class MyLink extends React.Component {
  handleClicked = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', this.props.to);
    MyRouteInstances.forEach((instance) => {
      instance.forceUpdate();
    });
  };

  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.handleClicked}>
        {children}
      </a>
    );
  }
}
