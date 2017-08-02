import React from 'react';
import { Route, Link } from 'react-router-dom';

export default ({ label, to, activeOnlyWhenExact, style, key }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <li className={match ? 'active' : ''} key={key}><Link to={to} style={style}>{label}</Link></li>
  )}/>
)