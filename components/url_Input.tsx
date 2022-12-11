import styled from 'styled-components';
import SubmitButton from './button';
import React, { useRef } from 'react';
import {v4 as uuidv4} from 'uuid';
import {User} from '../data/dummy'
import axios from 'axios';
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
  const userInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e:React.FormEvent) =>{
    e.preventDefault();
    
    const userName:string = userInputRef.current!.value;
    const url:string = urlInputRef.current!.value;

    if(userName !== '' && url !== ''){ //인풋이 비어있지않을때 먼저 uuid로 데이터베이스에서 검색하는기능도 추가해야함
      const user = new User()
      user.id = uuidv4();
      user.name = userName;
      user.url!.push(url);
      console.log(user)

      axios.post('http://localhost:3005/post',user)
        .then((res)=>console.log)
        .catch((err)=>console.log)


      
    }
    
    

    
  }
  return (
    <Form onSubmit={submitHandler}>
      <URLWrapper>
        <UserInput type='text' ref={userInputRef} required/>
        <URLInput type='text' ref={urlInputRef} required/>
        <SubmitButton>등록</SubmitButton>
      </URLWrapper>
    </Form>

  )

}
export default InputURL;