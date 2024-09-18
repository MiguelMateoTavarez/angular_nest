export interface RegisterResponse {
  user:  User;
  token: string;
}

export interface User {
  email:    string;
  name:     string;
  isActive: boolean;
  roles:    string[];
  _id:      string;
}
