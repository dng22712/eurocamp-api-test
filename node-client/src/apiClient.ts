import axios, { AxiosResponse } from 'axios';

class ApiService {
  private readonly API_BASE_URL = 'http://localhost:3001/api/1';  // Base URL for the API

  // Generic function to handle API requests and manage errors
  private async request<T>(method: string, endpoint: string, data?: any): Promise<T | null> {
    try {
      const url = `${this.API_BASE_URL}${endpoint}`;
      let response: AxiosResponse<T>;

      switch (method) {
        case 'GET':
          response = await axios.get<T>(url);
          break;
        case 'POST':
          response = await axios.post<T>(url, data);
          break;
        case 'PUT':
          response = await axios.put<T>(url, data);
          break;
        case 'DELETE':
          response = await axios.delete<T>(url);
          break;
        default:
          throw new Error('Invalid HTTP method');
      }

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        // Explicitly cast `error` as an Error object to access error.message
        console.error(`Error in ${method} request to ${endpoint}:`, error.message);
      } else {
        // Handle any non-Error objects (shouldn't normally occur, but safe to include)
        console.error(`Unexpected error in ${method} request to ${endpoint}:`, error);
      }
      return null;  // Graceful error handling
    }
  }

  // Fetch all users from the API
  public async getUsers(): Promise<any | null> {
    return this.request('GET', '/users');
  }

  // Create a new user in the API
  public async createUser(data: any): Promise<any | null> {
    return this.request('POST', '/users', data);
  }

  // Update an existing user by ID
  public async updateUser(id: string, data: any): Promise<any | null> {
    return this.request('PUT', `/users/${id}`, data);
  }

  // Delete a user by ID
  public async deleteUser(id: string): Promise<any | null> {
    return this.request('DELETE', `/users/${id}`);
  }

  // Fetch all bookings from the API
  public async getBookings(): Promise<any | null> {
    return this.request('GET', '/bookings');
  }

  // Create a new booking
  public async createBooking(data: any): Promise<any | null> {
    return this.request('POST', '/bookings', data);
  }

  // Update an existing booking by ID
  public async updateBooking(id: string, data: any): Promise<any | null> {
    return this.request('PUT', `/bookings/${id}`, data);
  }

  // Delete a booking by ID
  public async deleteBooking(id: string): Promise<any | null> {
    return this.request('DELETE', `/bookings/${id}`);
  }

  // Fetch all parcs from the API
  public async getParcs(): Promise<any | null> {
    return this.request('GET', '/parcs');
  }

  // Create a new parc
  public async createParc(data: any): Promise<any | null> {
    return this.request('POST', '/parcs', data);
  }

  // Update an existing parc by ID
  public async updateParc(id: string, data: any): Promise<any | null> {
    return this.request('PUT', `/parcs/${id}`, data);
  }

  // Delete a parc by ID
  public async deleteParc(id: string): Promise<any | null> {
    return this.request('DELETE', `/parcs/${id}`);
  }
}

export const apiService = new ApiService();
