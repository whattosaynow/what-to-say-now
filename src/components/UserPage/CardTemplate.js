import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import logo from '../Nav/with-all-w2s.png'


class CardTemplate extends Component {

    handleClickLink = () => {
        this.props.history.push(``);
    }


    render() {
        return (

            <Card style={{ width: "250px", maxHeight: "400px", overflow: "auto" }} >
                <Image src={logo} alt='image' wrapped ui={false} />
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
                    {/* change this a a react Link instead of an a tag */}
                    <Link to={`/challenge/${this.props.content.role_id}/${this.props.content.week}/${this.props.content.ageGroup_id}`}>
                        <Icon name='user' />
                        Link to Content
                    </Link>
                </Card.Content>
            </Card>



        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState
  });
  
  export default withRouter(connect(mapStateToProps)(CardTemplate));
