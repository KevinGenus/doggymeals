import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Meal from "./Meal";
import { max_number } from "../helper";

class App extends Component {
  constructor() {
    super();
    this.state = { meals: [] };
  }

  addMeal = () => {
    const { meals } = this.state;
    meals.push({ id: max_number(this.state.meals.map(meal => meal.id)) + 1 });
    this.setState({ meals });
  };

  removeMeal = id => {
    const meals = this.state.meals.filter(meal => meal.id !== id);
    this.setState({ meals });
  };

  render() {
    return (
      <div>
        <div>Doggy Meals</div>
        <div className="meal-list">
          {this.state.meals.map(meal => {
            return (
              <Meal key={meal.id} meal={meal} removeMeal={this.removeMeal} />
            );
          })}
        </div>
        <Button onClick={this.addMeal} className="btn-add">
          Add Doggy Meal
        </Button>
      </div>
    );
  }
}

export default App;
