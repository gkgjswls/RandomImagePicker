import styled from 'styled-components';
const avatarUrls= ["https://cdn-icons-png.flaticon.com/512/1797/1797287.png","https://cdn-icons-png.flaticon.com/512/4717/4717946.png","https://cdn-icons-png.flaticon.com/512/4717/4717946.png","https://cdn-icons-png.flaticon.com/512/141/141695.png","https://cdn-icons-png.flaticon.com/512/6018/6018583.png","https://cdn-icons-png.flaticon.com/512/141/141689.png",'https://cdn-icons-png.flaticon.com/512/8453/8453752.png','https://cdn-icons-png.flaticon.com/512/8453/8453740.png','https://cdn-icons-png.flaticon.com/512/8453/8453747.png'];

const PreviewImage = styled.div`
  
  width: 100px;
  height: 100px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: red;
  }
  img {
    width: 50px;
    height: 50px;
    overflow: hidden;

  }
  
`


const EventItem = (props) =>{




  return(
    <>
    {avatarUrls.map((item)=>(
      <PreviewImage>
        <img src={item}/>
      </PreviewImage>

    ))}
    
    </>
  )


}

export default EventItem;