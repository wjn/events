import { OrderStatus } from '../enums/order-status';
import { TicketData } from '../interfaces';

export interface OrderData {
  id: string;
  status: OrderStatus;
  userId: string;
  version: number;
  // converted from Date object
  expiresAt: string;
  ticket: TicketData;
}
