import axios from 'axios';

const putData = async ({postId, editTitle, editContent, editDate}) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/posts/${postId}`,{
        editTitle,
        editContent,
        editDate
    });
    
    return response.data; // 데이터 반환

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default putData;
