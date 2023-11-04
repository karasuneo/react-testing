import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";

afterEach(() => cleanup());

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<RenderInput />);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("Input form onChange event", () => {
  it("Should update input value correctly", () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText("Enter");

    // testをテキストボックスに入力する
    userEvent.type(inputValue, "test");
    // testという文字列が入力されていることを確認する
    expect(inputValue.value).toBe("test");
  });
});

describe("Console button conditionally triggered", () => {
  it("Should not trigger output function", () => {
    // outputConsoleという関数をモック化する
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    // ボタンのクリックイベントを発火させる
    userEvent.click(screen.getByRole("button"));
    // モック関数が呼び出されていないことを確認する
    expect(outputConsole).not.toHaveBeenCalled();
  });

  it("Should trigger output function", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText("Enter");
    // テキストボックスにtestという文字列を入力する
    userEvent.type(inputValue, "test");
    // ボタンのクリックイベントを発火させる
    userEvent.click(screen.getByRole("button"));
    // モック関数が呼び出されていることを確認する(1回呼び出されていること)
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
