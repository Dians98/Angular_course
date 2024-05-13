export interface Room{
  totalRoom : number,
  availableRoom : number
}

export interface RoomList{
  roomNumber: number,
  roomType: string,
  amenities: string,
  price: number,
  checkinTime: Date,
  checkoutTime: Date
}
