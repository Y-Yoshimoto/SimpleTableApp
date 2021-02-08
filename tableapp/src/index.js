import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Container } from 'react-bootstrap';

import MainTable from './maintable';
import NavbarHeader from './navbarheader';

class Tablesapp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavbarHeader />
                <Container className="justify-content-md-center" >
                    <MainTable />
                </Container >
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Tablesapp />,
    document.getElementById('root')
);