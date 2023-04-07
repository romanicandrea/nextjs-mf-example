import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: pink;
  color: black;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const RButton = () => {
  const [clicker, setClicker] = useState(0);

  return (
    <>
      <StyledButton onClick={() => setClicker((s) => s + 1)}>
        Click me: {clicker}
      </StyledButton>
    </>
  );
};

export default RButton;
