import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class CardTemplate extends Component {
    

    render() {
        return (

            <Card style={{ width: "250px" }} >
                <Image src={this.props.content.image} alt='mountain' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Week 1</Card.Header>
                    <Card.Meta>
                        <span className='date'>Challenge Phrase:</span>
                    </Card.Meta>
                    <Card.Description>
                        {this.props.content.phrase}
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

