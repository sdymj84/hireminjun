import React from "react";
import { Button } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";
import styled from "styled-components";

const StyledContainer = styled.div`
  .LoaderButton .spinning {
    margin-right: 5px;
    animation: spin 1s infinite linear;
  }
  @keyframes spin {
    from {
      transform: scale(1) rotate(0deg);
    }
    to {
      transform: scale(1) rotate(360deg);
    }
  }
`;

const LoaderButton = ({ isLoading, text, loadingText, disabled, ...rest }) => {
  return (
    <StyledContainer margin={rest.margin}>
      <Button
        {...rest}
        className="LoaderButton"
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <span>
            <FiRefreshCw className="spinning" /> {loadingText}
          </span>
        ) : (
          text
        )}
      </Button>
    </StyledContainer>
  );
};

export default LoaderButton;
