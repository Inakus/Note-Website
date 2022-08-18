import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 40vw;
  background-color: #73777b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 25px;
`;

const Text = styled.h1`
  font-weight: 500;
  margin-bottom: 10px;
  flex: 1;
  color: #15133c;
`;

const Form = styled.div`
  margin-bottom: 10px;
  display: flex;
  background-color: #f0d9ff;
  justify-content: center;
  flex-direction: column;
  flex: 8;
  border: 1px solid #7f7c82;
`;

const TextArea = styled.textarea`
  flex: 8;
  width: 75vw;
  background-color: #f1eee9;
  border: none;
  resize: none;
  color: #15133c;
`;

const Button = styled.button`
  border: none;
  background-color: #ec994b;
  color: #15133c;

  &:hover {
    background-color: #ec994bb9;
  }
`;

const TextForm = ({ createNote }) => {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  function formatDate(date) {
    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }

    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join("-") +
      " " +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(":")
    );
  }

  return (
    <Container>
      <Text>Bellow write your notes</Text>
      <Form>
        <TextArea
          onChange={(e) => {
            setContent(e.target.value);
            setDate(formatDate(new Date()));
          }}
          value={content}
        ></TextArea>
        <Button
          onClick={() => {
            createNote(content, date);
            setContent("");
          }}
        >
          Add new note
        </Button>
      </Form>
    </Container>
  );
};

export default TextForm;
