export enum Status {
  authenticated = 'authenticated',
  cheking = 'checking',
  notAuthenticated = 'not-authenticated',
}
export interface AuthInitialState {
  status: Status;
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string | null;
  errorMessage?: string | null;
  isLogginFormActive: boolean;
  passwordVisibility: boolean;
}
