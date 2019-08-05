import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class CardTemplate extends Component {


    render() {
        return (

            <Card style={{ width: "250px", maxHeight: "325px", overflow: "hidden" }} >
                <Image src={this.props.content.image} alt='image' wrapped ui={false} />
                <Card.Content extra style={{ overflow: "auto", height: "117px" }}>
                    <Card.Header>Week {this.props.content.week}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Challenge Phrase:</span>
                    </Card.Meta>
                    <Card.Description >
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

