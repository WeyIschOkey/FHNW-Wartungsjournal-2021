import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { MaschinenVerwaltung } from './components/MaschinenVerwaltung';
import { Zaehler } from './components/Zaehler';

import './custom.css'
export default class App extends Component {


  static displayName = App.name;

//verlinkungen der Seiten
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/MaschinenVerwaltung' component={MaschinenVerwaltung} />
        <Route path='/Zaehler' component={Zaehler} />
        
      </Layout>
    );
  }
}
