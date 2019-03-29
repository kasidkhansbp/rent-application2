import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { AdType } from '../../types/AdType';

interface Props extends AdType {

}

export default class SearchResultCard extends React.PureComponent<Props> {

    render() {
        return (
            <Card className = "Search-result-card">                
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        );
    }
}