import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";

class Meal extends Component {
  constructor() {
    super();
    this.state = {
      dog: "",
      meal: ""
    };
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Dog</FormLabel>
            <FormControl
              className="input-dog"
              onChange={event => this.setState({ dog: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Meal</FormLabel>
            <FormControl
              className="input-dog-meal"
              onChange={event => this.setState({ meal: event.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-meal-remove"
          onClick={() => this.props.removeMeal(this.props.meal.id)}
        >
          Remove Meal
        </Button>
      </div>
    );
  }
}

export default Meal;
