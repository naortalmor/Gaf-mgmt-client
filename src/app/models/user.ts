export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  roles: Roles;
}

export interface Roles {
  guest?: boolean;
  user?: boolean;
  admin?: boolean;
}
