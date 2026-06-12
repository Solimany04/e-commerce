import React from 'react';
import '../../layout.css';
function Layout({children}) {
    return <div className='app-layout'>{children}</div>;
}

export default Layout;