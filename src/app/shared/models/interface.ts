export interface ClientUser {
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  emailVerified?: boolean;
  providerId?: string;
  phoneNumber?: string;
}

export interface VersionDialogData {
  versionNum: number
}

export interface VersionDetails {
  linesOfCode?: string;
  hoursWorked?: string;
  size?: string;
  htmlPercentage?: number;
  cssPercentage?: number;
  scssPercentage?: number;
  javascriptPercentage?: number;
  typescriptPercentage?: number;
  externalLibraries?: string[];
  features?: string[];
}
