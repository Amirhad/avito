import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => props.width};
  padding: 8px;
  border-radius: 8px;
  border: 1px solid gray;
  background-color: gray;
  color: white;

  &::-webkit-input-placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
export const Input = (props) => {
  return (
    <div>
      <StyledInput
        placeholder={props.placeholder}
        type={props.type}
        {...props}
      />
    </div>
  );
};
