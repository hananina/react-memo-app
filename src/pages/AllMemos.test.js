// #TODO: check axios test adapter lib https://stackoverflow.com/questions/45016033/how-do-i-test-axios-in-jest

import { render, screen } from "@testing-library/react";
import AllMemosPage from "./AllMemos";

describe("AllMemosPage Component", () => {
  test("renders posts if request succeeds🔮", async () => {
    //windowのfetchをmock functionに置き換える
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 2, title: "ww", content: "test" }],
    });

    //arrange
    render(<AllMemosPage />);

    //assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
