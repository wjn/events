export interface TicketData {
  id: string;
  version: number;
  title: string;
  price: number;
  userId: string;
  orderId?: string;
}
