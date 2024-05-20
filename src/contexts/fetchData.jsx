import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/posts');
    
    return response.data; // 데이터 반환

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchData;


