import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import withall from './WithAllLogo.png';

class CardTemplate extends Component {
    

    render() {
        return (

            <Card style={{ width: "250px" }} >
                <Image src={withall} alt='mountain' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Week 1</Card.Header>
                    <Card.Meta>
                        <span className='date'>Challenge:</span>
                    </Card.Meta>
                    <Card.Description>
                        “Healthy, athletic bodies come in all shapes and sizes.”
            </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        Link to Content
            </a>
                </Card.Content>
            </Card>



        )
    }
}

export default CardTemplate;

