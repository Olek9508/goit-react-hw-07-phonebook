
import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 600px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  color: white;
`;

export const Label = styled.label`
  width: 60px;
  margin-right: 10px;
  color: white;
text-shadow: 0 0 20px #7f00ff,
             0 0 30px #9831ff,
             0 0 40px #ac59ff;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  border-radius: 5px;
  border: solid 1px;
  
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const BtnSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 180px;
  font-size: 16px;
  padding: 1.5rem;  
  margin-top: 25px;
  background: transparent;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  color: rgb(127, 255, 0);
  border: rgb(127, 255, 0) 0.125em solid;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em rgb(127, 255, 0);
  box-shadow: inset 0 0 0.5em 0 rgb(127, 255, 0), 0 0 0.5em 0 rgb(127, 255, 0);
:hover,
:focus{
  background-color: rgb(127, 255, 0);
  color: black;
  border-color: transparent;
transition-duration: 250ms;
}
`;
