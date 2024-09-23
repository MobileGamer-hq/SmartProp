import { User } from "./DataModels";

export const fetchUserById = async (userId) => {
  try {
    const response = await fetch(
      `https://smartprop-beta-backend.onrender.com/Users/${userId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const userData = await response.json();
    // console.log(userData); // Handle the user data
    return userData.user;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
  return User
};


export const fetchAllUsers = async () => {
  try {
    const response = await fetch(
      "https://smartprop-beta-backend.onrender.com/Users"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const usersData = await response.json();
    console.log(usersData); // Handle the list of users
    return usersData;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
  return [User];
};

export const handleUpdate = async (userId, data) => {
  try {
    // Define the URL to your Express API
    const url = `https://smartprop-beta-backend.onrender.com/Users/${userId}`;

    // Data to update, in this case, the 'name' field
  

    // Send the PATCH request to update the user
    const response = await fetch(url, {
      method: 'PATCH', // HTTP method
      headers: {
        'Content-Type': 'application/json', // Content type
      },
      body: JSON.stringify(data), // Convert the data to JSON
    });

    // Handle the response
    const result = await response.json();
    if (response.ok) {
      alert('User updated successfully!');
    } else {
      alert('Error: ' + result.error);
    }
  } catch (error) {
    console.error('Error updating user:', error);
    alert('Failed to update user');
  }
};
