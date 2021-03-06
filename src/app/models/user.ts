export interface User {
  uid:string;
  email:string;
  displayName:string;
  photoURL:string;
  emailVerified:boolean;
  roles:Roles;
  teamId?:number;
  typeId?:number;
  currentRound:number;
  lastMifgafTime?;
  nextMifgafTime?;
}

export interface Roles {
  guest?:boolean;
  user?:boolean;
  admin?:boolean;
  status?:string;
}
