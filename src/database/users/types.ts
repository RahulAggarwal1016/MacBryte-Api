import { Document, Model } from "mongoose";

export enum PackagePurchased {
  LYTE = "MacBryte Lyte",
  BASIC = "MacBryte Basic",
  PLUS = "MacBryte Plus",
  PRO = "MacBryte Pro",
  MEMBERSHIP = "MacBryte Membership",
}

export interface IUser {
  firstname: string;
  lastname: string;
  userId: string;
  email: string;
  password: string;
  zoomLink: string;
  packagePurchased: PackagePurchased;
  hoursRemaining: number;
  grandTotalHours: string;
  dateOfEntry?: Date;
  lastUpdated?: Date;
  isAdmin: boolean;
}

export interface IUserDocument extends Partial<IUser>, Document { }

export interface IUserModel extends Model<IUserDocument> { }
