import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Readerring", () => {
  it("Shoulf render all the elements correctly", () => {
    render(<Render />);
    // screen.debug();
    // screen.debug(screen.getByRole("heading"));
    // expectは、jestの関数 画面に要素があるかどうかを確認する
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Udemy")).toBeTruthy();
    expect(screen.queryByText("Udeeemy")).toBeNull();
    // IDを取得する場合は、getByTestIdを使う
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
