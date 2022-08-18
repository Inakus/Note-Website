import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #15133C;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EC994B;
`;

const Title = styled.h3`
  margin-left: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Title>Note</Title>
    </Container>
  );
};

export default Navbar;
