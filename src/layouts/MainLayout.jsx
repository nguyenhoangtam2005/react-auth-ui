import React from 'react';
import './MainLayout.scss';

function MainLayout({ header, sidebar, children }) {
  return (
    <div className="layout">
      {header && <header className="layout-header">{header}</header>}
      <div className="layout-body">
        {sidebar && <aside className="layout-sidebar">{sidebar}</aside>}
        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
