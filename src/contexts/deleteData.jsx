import axios from 'axios';

// postId에 해당하는 데이터를 삭제하는 함수
export const deleteData = async (postId) => {
  try {
    
    // DELETE 요청을 보내고 응답을 기다림
    const response = await axios.delete(`http://localhost:8080/api/posts/${postId}`);
    
    // 요청이 성공하면 응답 데이터를 반환
    return response.data;
    
  } catch (error) {
    // 요청이 실패하면 에러를 콘솔에 출력하고 null 반환
    console.error('Error deleting data:', error);
    return null;
  }
};