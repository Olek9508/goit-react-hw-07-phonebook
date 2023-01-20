import styled from "@emotion/styled"

export const ListBox = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100% - 60px) / 3);
`;

export const ContactListText = styled.p`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-transform: capitalize;
  color: white;
  text-shadow:0 0 20px rgba(127,0,255,0),
             0 0 30px #9831ff,
             0 0 40px #ac59ff;
`
;

export const BtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  font-size: 16px;
  color: #e04848;
  padding: 1.5rem;
  border-radius: 5px;
  border-color: transparent;
  margin-top: 25px;
  background: transparent;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 50px 15px #e04848;
  border: #e04848 0.125em solid;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #e04848;
  box-shadow: inset 0 0 0.5em 0 #e04848, 0 0 0.5em 0 #e04848;
  :hover,
:focus{
  background-color: #e04848;
  color: black;
  border-color: transparent;
transition-duration: 250ms;
}
`;