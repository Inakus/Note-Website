import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 40vw;
  background-color: #73777b;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 25px;
  color: #15133c;
`;

const Date = styled.h3``;

const Content = styled.div``;

const Note = ({ content, date }) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Content>{content}</Content>
    </Container>
  );
};

export default Note;
