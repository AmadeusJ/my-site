import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AeroChat from "./AeroChat";

describe("AeroChat Component", () => {
  it("renders initial messages", () => {
    const initialMessages = ["Hello!", "How are you?"];
    render(<AeroChat messages={initialMessages} onSendMessage={jest.fn()} />);

    // Check if the initial messages are rendered
    expect(screen.getByText("Hello!")).toBeInTheDocument();
    expect(screen.getByText("How are you?")).toBeInTheDocument();
  });

  it("adds a new message when '보내기' button is clicked", async () => {
    const mockOnSendMessage = jest.fn();
    render(<AeroChat messages={["Hello!"]} onSendMessage={mockOnSendMessage} />);

    const input = screen.getByPlaceholderText("메시지를 입력하세요...");
    const sendButton = screen.getByText("보내기");

    // Simulate user typing in the input field
    await userEvent.type(input, "New message");

    // Simulate clicking the '보내기' button
    fireEvent.click(sendButton);

    // Check if the onSendMessage function is called with the correct argument
    expect(mockOnSendMessage).toHaveBeenCalledWith("New message");
  });

  it("clears the input field after sending a message", async () => {
    const mockOnSendMessage = jest.fn();
    render(<AeroChat messages={[]} onSendMessage={mockOnSendMessage} />);

    const input = screen.getByPlaceholderText("메시지를 입력하세요...");
    const sendButton = screen.getByText("보내기");

    // Simulate user typing and sending a message
    await userEvent.type(input, "Message to send");
    fireEvent.click(sendButton);

    // Check if the input field is cleared
    expect(input).toHaveValue("");
  });

  it("renders sent messages correctly", () => {
    const messages = ["Sent message 1", "Sent message 2"];
    render(<AeroChat messages={messages} onSendMessage={jest.fn()} />);

    // Check if all messages are rendered
    messages.forEach((message) => {
      expect(screen.getByText(message)).toBeInTheDocument();
    });
  });

  it("checks animation is applied to new messages", () => {
    const messages = ["Message 1"];
    const { container } = render(<AeroChat messages={messages} onSendMessage={jest.fn()} />);

    // Check if the motion.div with the expected class exists
    const animatedMessage = container.querySelector(".message");
    expect(animatedMessage).toHaveClass("message");
  });
});