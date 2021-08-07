import React, { useEffect } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';

import styles from './NotFound.module.css';

//import { Breadcrumbs } from '../components/breadcrumbs';
//import { HOME_CRUMB } from '../services/breadcrumbs';

export default function NotFound404Page() {
  const history = useHistory();
  const { pathname } = useLocation();

  // useEffect(() => {
  //   //const errorBreadcrumb = [HOME_CRUMB, { path: pathname, url: pathname, title: '404' }];
  //   history.replace({ state: errorBreadcrumb });
  // }, [history, pathname])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.content}>
          <h1>Oops! 404 Error</h1>
          <p>The page you requested does not exist</p>
          <br />
          <br />
          <p>check the address or try <Link to='/' className={styles.link}>homepage</Link></p>
        </div>
      </div>
    </div>
  );
}
