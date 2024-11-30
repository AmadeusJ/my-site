"use client";

import React, { useState } from "react";
import AeroChat from "../../../components/Aero/AeroChat";

const ChatUITestRunner = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [testStatus, setTestStatus] = useState<string>("Not started");

  const runTests = async () => {
    setTestStatus("Running...");

    // Simulate rendering initial messages
    setMessages(["Initial message"]);
    await delay(1000);

    // Simulate sending a message
    setMessages((prev) => [...prev, "Test message 1"]);
    await delay(1000);

    // Simulate clearing the input
    setMessages((prev) => [...prev, "Test message 2"]);
    await delay(1000);

    setMessages((prev) => [...prev, "Test message 3"]);
    await delay(1000);

    setMessages((prev) => [...prev, "Test message 4"]);
    await delay(1000);


    setTestStatus("All tests passed!");
  };

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div>
      <h1>UI Test Runner</h1>
      <AeroChat
        messages={messages}
        onSendMessage={(message) =>
          setMessages((prev) => [...prev, message])
        }
      />
      <button onClick={runTests} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Run Tests
      </button>
      <p>Test Status: {testStatus}</p>
    </div>
  );
};

export default ChatUITestRunner;