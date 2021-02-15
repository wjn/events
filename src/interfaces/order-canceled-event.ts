import { Topics } from '../enums/topics';
import { BaseEvent, OrderData } from '../interfaces';

export interface OrderCanceledEvent extends BaseEvent {
  topic: Topics.OrderCanceled;
  data: OrderData;
}
