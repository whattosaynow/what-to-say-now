import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class CardTemplate extends Component {

    handleClickLink = () => {
        this.props.history.push('/challenge');
    }


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
                    <a onClick={this.handleClickLink}>
                        <Icon name='user' />
                        Link to Content
            </a>
                </Card.Content>
            </Card>



        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState
  });
  
  export default withRouter(connect(mapStateToProps)(CardTemplate));
