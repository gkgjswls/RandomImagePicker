import styled from 'styled-components';
import SubmitButton from './button';
import { useRef } from 'react';

const Form = styled.form`
  width: 100%;
  

`

const URLWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

`;
const URLInput = styled.input`
  height: 70%;
  width: 70%;
  text-align: center;
  font-size: 1rem;
  

`;
const UserInput = styled.input`
  height: 70%;
  width: 20%;
  text-align: center;
  
`;

const InputURL = () =>{
  const userInputRef = useRef();
  const urlInputRef = useRef();

  const submitHandler = (e) =>{
    e.preventDefault();
    const userName = userInputRef.current.value;
    const url = urlInputRef.current.value;
    
    console.log(userName,url)
  }
  return (
    <Form onSubmit={submitHandler}>
      <URLWrapper>
        <UserInput type='text' ref={userInputRef} />
        <URLInput type='text' ref={urlInputRef}/>
        <SubmitButton>등록</SubmitButton>
      </URLWrapper>
    </Form>

  )

}
export default InputURL;