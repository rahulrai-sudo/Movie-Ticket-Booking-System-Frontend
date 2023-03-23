import { ICinemaSeat } from "./icinema-seats";
import { IShow } from "./ishow";

export interface ICinemahall
{
  cinemaHallID:number;
  name:string,
  cinemaSeats:ICinemaSeat,
  show:IShow,
  cinemaID:number,


}