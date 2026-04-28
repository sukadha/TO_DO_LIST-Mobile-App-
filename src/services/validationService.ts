class ValidationService {
  validateEmail(email: string): string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  }

  validatePassword(password: string): string {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  }

  validateName(name: string): string {
    if (!name) {
      return 'Full name is required';
    }
    if (name.length < 2) {
      return 'Name must be at least 2 characters';
    }
    return '';
  }

  validateConfirmPassword(password: string, confirmPassword: string): string {
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
    return '';
  }
}

export const validationService = new ValidationService();