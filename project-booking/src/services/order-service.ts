import OrderRepository from "../repositories/order-repositories";
import RoomRepository from "../repositories/room-repositories";

class OrderService {
  private orderRepository: any;
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  public async postBooking(dataBooking: any) {
    try {
      const res = this.orderRepository.postBooking(dataBooking);
      return res;
    } catch (error) {
      throw error;
    }
  }
  public async getByCondition(value: any, key: any) {
    try {
      const res = await this.orderRepository.getByCondition(value, key);
      return res;
    } catch (error) {
      throw error;
    }
  }
  public async getAllByUser(idUser: number) {
    try {
      return await this.orderRepository.getAllByUser(idUser);
    } catch (error) {
      throw error;
    }
  }
  async removeBooking(idBooking: number) {
    try {
      return await this.orderRepository.removeBooking(idBooking);
    } catch (error) {
      throw error;
    }
  }
}

export default OrderService;
