import React, { useState, createContext, useContext } from 'react';

const RouterContext = createContext();

export const Router = ({ children }) => {
  const getPath = () => {
    const hash = window.location.hash;
    return hash ? hash.slice(1) : '/';
  };

  const [currentPath, setCurrentPath] = useState(getPath());

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPath());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = `#${path}`;
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Route = ({ path, component: Component }) => {
  const { currentPath } = useContext(RouterContext);
  return currentPath === path ? <Component /> : null;
};

export const Link = ({ to, children, className }) => {
  const { navigate } = useContext(RouterContext);
  return (
    <a
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
      className={className}
    >
      {children}
    </a>
  );
};