import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 15px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: white;
  font-size: 13px;
  font-weight: 300;
  border-radius: 20px;
  background-color: #07fff3;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #00ffea;
  font-size: 12px;
  font-weight: 300;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #00c9ff;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #000000;
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <RegisterButton>
        <Link className='nav-link' to='/posts'>
          Posts
        </Link>
      </RegisterButton>
      <LoginButton>
        <Link className='nav-link' to='/addPost'>
          Add Posts
        </Link>
      </LoginButton>
    </AccessibilityContainer>
  );
}
