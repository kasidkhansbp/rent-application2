import React from 'react';
import { 
    Form, 
    Button 
} from 'react-bootstrap';
import api from '../../remote/api';
import { AdType } from '../../types/AdType';

interface Props {

}

interface State extends AdType {
    
}

export default class AdPostComponent extends React.Component<Props, State> {

    state: State = {
        email: '',
        title: '',
        description: '',
        address: '',
        pincode: ''
    }

    submitAd = async (evt: any) => {
        evt.preventDefault();
        const {email, title, description, address, pincode} = this.state;
        console.log('email', email)
        let resp = await api.postAd({email, title, description, address, pincode});
        console.log('post', resp);
        
    }

    handleTitle = (evt: any) => {
        this.setState({title: evt.target.value});
    }

    handleAddress = (evt: any) => {
        this.setState({address: evt.target.value});
    }

    handleDesc = (evt: any) => {
        this.setState({description: evt.target.value});
    }

    handleEmail = (evt: any) => {
        this.setState({email: evt.target.value});
    }

    handlePin = (evt: any) => {
        this.setState({pincode: evt.target.value});
    }

    render() {
        return (
            <Form onSubmit = {this.submitAd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required value = {this.state.email} onChange = {this.handleEmail}/>
                    <Form.Text className="text-muted">
                        This would be used to contact you
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" required value = {this.state.title} onChange = {this.handleTitle}/>
                    <Form.Text className="text-muted">
                        Please enter a relevant title
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" required value = {this.state.description} onChange = {this.handleDesc}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" required value = {this.state.address} onChange = {this.handleAddress}/>
                    <Form.Text className="text-muted">
                        Please enter a valid address
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>PIN</Form.Label>
                    <Form.Control type="text" placeholder="PIN" required value = {this.state.pincode} onChange = {this.handlePin}/>
                    <Form.Text className="text-muted">
                        Please enter a valid address
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}