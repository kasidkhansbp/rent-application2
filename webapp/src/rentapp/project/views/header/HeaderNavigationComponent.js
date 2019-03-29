import React, {useState} from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';

import appConfig from '../../config/appConfig';
import { Route } from '../../types/Route';

export default function HeaderNavigationComponent() {
    
    const [activeKey, setActiveKey] = useState(Route.SearchBarComponent);
    console.log(activeKey);
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>{appConfig.appName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" activeKey = {activeKey} onSelect = {selectedKey => setActiveKey(selectedKey)}>
                <Nav.Link href={Route.AdPostComponent}>{appConfig.routes.route1}</Nav.Link>
                <Nav.Link href={Route.SearchBarComponent}>{appConfig.routes.route2}</Nav.Link>
                
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                {/* <SearchBarComponent></SearchBarComponent> */}
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
            </Navbar>
    );
}