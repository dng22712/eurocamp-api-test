import { apiService } from './apiClient';

async function main() {
  try {
    // Fetch all users
    console.log('Fetching users...');
    const users = await apiService.getUsers();
    console.log('Users:', users);

    // Create a new user
    console.log('Creating a new user...');
    const newUser = await apiService.createUser({ name: 'John Doe', email: 'john@example.com' });
    console.log('Created User:', newUser);

    if (newUser && newUser.id) {
      // Use the ID of the newly created user for update and delete
      const newUserId = newUser.id;

      // Update the user with the correct ID
      console.log('Updating user...');
      const updatedUser = await apiService.updateUser(newUserId, { name: 'John Doe Updated' });
      console.log('Updated User:', updatedUser);

      // Delete the user
      console.log('Deleting user...');
      const deletedUser = await apiService.deleteUser(newUserId);
      console.log('Deleted User:', deletedUser);
    } else {
      console.log('No user was created, so no updates or deletions will be performed.');
    }

  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
}

main();
