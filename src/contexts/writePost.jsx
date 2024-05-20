import axios from 'axios';

export const writePost = async ({ title, content, uploadDate }) => {
  try {
    const response = await axios.post('http://localhost:8080/api/newpost', {
      title,
      content,
      uploadDate
      
    });
    return response;
  } catch (error) {
    console.error('Error writing post:', error);
    return null;
  }
};
