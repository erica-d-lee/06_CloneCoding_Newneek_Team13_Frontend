import React from "react";
import gosumspinner from "../shared/gosumspinner.png";
import styled from 'styled-components';

const Spinner = () => {
    return (
        <div>
            <SpinnerWrap>
                <Spinnerinner>
                    <img
                        src={gosumspinner}
                        alt={gosumspinner}
                        style={{
                            width: 200,
                            height: 200
                        }}/>
                </Spinnerinner>
            </SpinnerWrap>
        </div>
    );
};

export default Spinner;

const SpinnerWrap = styled.div ` 
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Spinnerinner = styled.div `
  animation: spin 7s linear infinite;
  animation-delay: 0;

  @keyframes spin {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
  }
  `;
