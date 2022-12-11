
import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishdetailComponent  extends Component {

    constructor(props) {
        super(props);
    }


    renderDish = (dish) => {

        if (this.props.data != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
         else
            return(
                <div></div>
            );
    };

    renderComments = (comment) => {
        if (comment != null){
            return (
                <div  className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    {comment.map((com) => {
                        return (
                            <p key={com.id}>{com.comment} <br />-- {com.author} {com.date}</p>
                        )
                    })}                    
                </div>
            )
        }
    }

  render() { 

    if(this.props.data != null){
        return (
            <div className="row">
                {this.renderDish(this.props.data)}
                {this.renderComments(this.props.data.comments)}
            </div>
        );
    }else{
        <div></div>
    }
  }
}

export default DishdetailComponent