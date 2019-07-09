import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import toJson from "enzyme-to-json";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(toJson(app)).toMatchSnapshot();
  });

  it("initializes the `state` with an empty list of meals", () => {
    expect(app.state().meals).toEqual([]);
  });

  describe("when clicking the `add-meal` button", () => {
    const id = 1;
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ meals: [] });
    });

    it("adds a new gift to `state` when clicking the `add meal` button", () => {
      expect(app.state().meals).toEqual([{ id }]);
    });

    it("adds a new meal to the rendered list when clicked the `add meal` button", () => {
      expect(app.find(".meal-list").children().length).toEqual(1);
    });

    it("creates a Meal component", () => {
      expect(app.find("Meal").exists()).toBe(true);
    });

    describe("and the user wants to remove the added meal", () => {
      beforeEach(() => {
        app.instance().removeMeal(id);
      });

      it("removes the meal from `state`", () => {
        expect(app.state().meals).toEqual([]);
      });
    });
  });
});
