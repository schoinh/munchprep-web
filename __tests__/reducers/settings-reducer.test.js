import settingsReducer from "./../../src/reducers/settings-reducer";
import constants from "./../../src/constants";
const { c, initialState } = constants;

describe("settingsReducer", () => {
  let action;

  test("Should return default state if no action type is recognized", () => {
    expect(settingsReducer({}, { type: null })).toEqual({});
  });

  // TODO: Update
  // test("Should update a category of grocery items when received from Firebase", () => {
  //     action = {
  //         type: c.RECEIVE_CATEGORY,
  //         categoryId: "1234",
  //         category: {
  //             name: "Produce"
  //         },
  //         items: {
  //             checked: false,
  //             name: "bananas",
  //             timestamp: 1570655483258
  //         }
  //     }

  //     expect(settingsReducer(initialState.shoppingList, action)).toEqual({
  //         1234: {
  //             name: "Produce",
  //             items: {
  //                 checked: false,
  //                 name: "bananas",
  //                 timestamp: 1570655483258
  //             }
  //         }
  //     });
  // });
});
