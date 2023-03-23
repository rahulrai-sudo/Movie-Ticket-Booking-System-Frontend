import { IShow } from "./ishow";
import { IShowSeat } from "./ishow-seats";

export interface IBooking
{
  bookingID?:number;
  numberOfSeats:number,
  timeStamp:Date,
  status:number,
  userID:number,
  showID:number
}