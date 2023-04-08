import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/vendor/flaticon.css';
import './css/vendor/fontawesome.min.css';
import './css/vendor/themify-icons.css';

import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';

import About_us from './pages/About_us';
import Services from './pages/Services';
import Services_details from './pages/Services_details';
import Blog_classic from './pages/Blog_classic';
import Blog_grid from './pages/Blog_grid';
import Blog_details from './pages/Blog_details';
import Contact_01 from './pages/Contact_01';
import Contact_02 from './pages/Contact_02';
import Job_list from './pages/Job_list';
import Job_details from './pages/Job_details';
import Carrer_01 from './pages/Carrer_01';
import Error_404 from './pages/Error_404';
import Error_405 from './pages/Error_405';
import Employers_list from './pages/Employers_list';
import Employers_details from './pages/Employers_details';
import Candidate_list from './pages/Candidate_list';
import Candidate_details from './pages/Candidate_details';
import Login from './pages/Login';
import Register from './pages/Register';


import ScrollToTop from './components/layout/Gotop';


function App() {
 
  return (
    <div className="page">
      <Router> 
        
        <Route exact path='/' component={ Home } />
        <Route exact path='/Home2' component={ Home2 } /> 
        <Route exact path='/Home3' component={ Home3 } /> 

        <Route exact path= '/About_us' component={ About_us } /> 
        <Route exact path='/services' component={ Services } />
        <Route exact path='/Services_details' component={ Services_details } />
        <Route exact path='/Blog_classic' component={ Blog_classic } />
        <Route exact path='/Blog_grid' component={ Blog_grid } />
        <Route exact path='/Blog_details' component={ Blog_details } />
        <Route exact path='/Contact_01' component={ Contact_01 } />
        <Route exact path='/Contact_02' component={ Contact_02 } />
        <Route exact path='/Job_list' component={ Job_list } />
        <Route exact path='/Job_details' component={ Job_details } />
        <Route exact path='/Carrer_01' component={ Carrer_01 } />
        <Route exact path='/Error_404' component={ Error_404 } />
        <Route exact path='/Error_405' component={ Error_405 } />
        <Route exact path='/Employers_list' component={ Employers_list } />
        <Route exact path='/Employers_details' component={ Employers_details } />
        <Route exact path='/Candidate_list' component={ Candidate_list } />
        <Route exact path='/Candidate_details' component={ Candidate_details } />
        <Route exact path='/Login' component={ Login } />
        <Route exact path='/Register' component={ Register } />
       

        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;


