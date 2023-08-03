import React, { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout_container">
        {children}
      </div>
    </div>
  );
};

export default Layout