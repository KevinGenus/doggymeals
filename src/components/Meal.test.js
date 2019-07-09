import React from "react";
import { shallow } from "enzyme";
import Meal from "./Meal";
import toJson from "enzyme-to-json";

describe("Meal", () => {
  const mockRemoveMeal = jest.fn();
  const id = 1;
  const props = { meal: { id }, removeMeal: mockRemoveMeal };
  const meal = shallow(<Meal {...props} />);

  it("renders properly", () => {
    expect(toJson(meal)).toMatchSnapshot();
  });

  it("initializes a person and present in `state`", () => {
    expect(meal.state()).toEqual({ dog: "", meal: "" });
  });

  describe("when typing into the dog input", () => {
    const dogName = "Scooby Doo";
    beforeEach(() => {
      meal
        .find(".input-dog")
        .simulate("change", { target: { value: dogName } });
    });

    it("updates the doggy in `state`", () => {
      expect(meal.state().dog).toEqual(dogName);
    });
  });

  describe("when typing into the meal input", () => {
    const dogMeal = "Scooby Snack";
    beforeEach(() => {
      meal
        .find(".input-dog-meal")
        .simulate("change", { target: { value: dogMeal } });
    });

    it("updates the meal in `state`", () => {
      expect(meal.state().meal).toEqual(dogMeal);
    });
  });

  describe("when clicking the `Remove Meal` button", () => {
    beforeEach(() => {
      meal.find(".btn-meal-remove").simulate("click");
    });

    it("calls the removeMeal callback", () => {
      expect(mockRemoveMeal).toHaveBeenCalledWith(id);
    });
  });
});
