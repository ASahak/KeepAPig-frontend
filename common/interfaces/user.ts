export interface IUser {
  _id: string;
  email: string;
  fullName: string;
  role: string;
  google?: IGoogleUser,
}

export interface IGoogleUser {
  id: string;
  email: string;
  fullName: string;
  avatar: string;
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
