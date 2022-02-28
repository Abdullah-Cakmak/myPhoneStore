import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Search field test", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(<App />);

    const searchInput = queryByPlaceholderText(
      "25 milyondan fazla ürün içerisinde ara"
    );

    fireEvent.change(searchInput, { target: { value: "a" } });

    expect(searchInput.value).toBe("a");
  });
});
