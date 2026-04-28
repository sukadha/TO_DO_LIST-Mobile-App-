export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  fullName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  data?: any;
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (credentials.email && credentials.password.length >= 8) {
          resolve({
            success: true,
            message: 'Login successful',
            data: {
              user: {
                id: '1',
                email: credentials.email,
                fullName: credentials.email.split('@')[0],
              },
              token: 'mock-jwt-token',
            },
          });
        } else {
          resolve({
            success: false,
            message: 'Invalid credentials',
          });
        }
      }, 1000);
    });
  }

  async signup(data: SignupData): Promise<AuthResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.fullName && data.email && data.password.length >= 8) {
          resolve({
            success: true,
            message: 'Account created successfully',
            data: {
              user: {
                id: Date.now().toString(),
                email: data.email,
                fullName: data.fullName,
              },
              token: 'mock-jwt-token',
            },
          });
        } else {
          resolve({
            success: false,
            message: 'Invalid signup data',
          });
        }
      }, 1000);
    });
  }

  async logout(): Promise<AuthResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Logged out successfully',
        });
      }, 500);
    });
  }
}

export const authService = new AuthService();