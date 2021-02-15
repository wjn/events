import { Topics } from '../enums/topics';
import { BaseEvent } from './base-event';

export interface PaymentCreatedEvent extends BaseEvent {
  topic: Topics.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
