import { Card, CardImg, CardImgOverlay, 
    CardTitle } from 'reactstrap';
import { Component } from 'react';
import DishdetailComponent from './DishdetailComponent ';


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

/*         if(this.state.selectedDish != null){
            console.log(this.state.selectedDish)
        }  */
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishdetailComponent  data={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu