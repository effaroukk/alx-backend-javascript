// Import the necessary functions from utils.js
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    // Call both functions asynchronously using Promise.all
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    
    // Return the successful responses in the required format
    return {
      photo: photo,   // response from uploadPhoto
      user: user      // response from createUser
    };
  } catch (error) {
    // If any error occurs, return an object with null values
    return {
      photo: null,
      user: null
    };
  }
}

// Export the function if you need to use it elsewhere
export default asyncUploadUser;

