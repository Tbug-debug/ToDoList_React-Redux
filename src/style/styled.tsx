import styled from "styled-components";

export const ToDoLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputBox = styled.div`
  max-width: 75rem;
  min-width: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a6e3e9;
  font-size: 30px;
  font-family: "TTTtangsbudaejjigaeB";
`;

export const Input = styled.div`
  width: 37.5rem;
  display: flex;
  justify-content: space-around;
  input {
    padding: 10px;
    border-radius: 10px;
    background: rgb(233, 233, 233);
    border: none;
    outline: none;
  }
`;

export const ToDoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 75rem;
  min-width: 80rem;
  background-color: #cbf1f5;
  padding-bottom: 2rem;
`;

export const Doing = styled.div`
  min-height: 18.5rem;
  width: 90%;
  padding-top: 2rem;
  font-family: "TTTtangsbudaejjigaeB";
`;

export const DoingOut = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 18.5rem);
  grid-template-rows: repeat(1, 15rem);
`;

export const ToDoneBox = styled.div`
  min-height: 16.5rem;
  width: 90%;
  padding-top: 2rem;
  font-family: "TTTtangsbudaejjigaeB";
`;

export const AddBtn = styled.button`
  background: white;
  border: 3px solid #222831;
  color: black;
  font-weight: bolder;
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 14px;
  &:hover {
    background-color: #b83b5e;
    color: white;
  }
`;

export const Todobox = styled.div`
  max-width: 15rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8%;
  button {
    background: white;
    border: 3px solid #222831;
    color: black;
    font-weight: bolder;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 10px;
    font-size: 14px;
    &:hover {
      background-color: #b83b5e;
      color: white;
    }
  }
`;
