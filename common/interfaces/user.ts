export interface IUser {
  _id: string;
  email: string;
  fullName: string;
  role: string;
}

export interface IGoogleUser {
  _id?: string;
  email: string;
  fullName: string;
  avatar: string;
  role: string;
}

export interface GoogleUserCredential {
  sub: string;
  email: string;
  name: string;
  picture: string;
}

export interface JwtPayload {
  sub: string;
  name: string;
  exp: number;
}
