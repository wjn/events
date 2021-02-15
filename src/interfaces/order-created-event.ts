import { Topics } from '../enums';
import { BaseEvent, OrderData } from '../interfaces';

export interface OrderCreatedEvent extends BaseEvent {
  topic: Topics.OrderCreated;
  data: OrderData;
}
