import { Topics } from '../enums/topics';
import { OrderData } from './order-data';

export interface ExpirationCompleteEvent {
  topic: Topics.ExpirationComplete;
  data: {
    orderId: string;
  };
}
