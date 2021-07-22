import React from "react";
import gosumspinner from "../shared/gosumspinner.png";
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Spinner = (props) => {
    if (!props.visible) {                       // 연구 필요
        return (
            <></>
        )
    } 

    return (
        <div>
            <SpinnerWrap>
                <Spinnerinner>
                    <img
                        src={gosumspinner}
                        alt={gosumspinner}
                        style={{
                            width: 225,
                            height: 225
                        }}/>
                </Spinnerinner>
            </SpinnerWrap>
        </div>
    );
};

Spinner.propTypes = {                          // 연구 필요
    visible: PropTypes.bool
}

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
  background-color: #ebebeb;
  z-index: 100;
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
