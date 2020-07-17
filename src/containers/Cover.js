import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { Footer } from '../components/Footer.jsx';

import './Cover.css';

class Cover extends React.Component {

    render(){
        return( 
            <div className="coverReact cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default Cover;