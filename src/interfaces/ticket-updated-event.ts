import { Topics } from '../enums';
import { TicketData } from '../interfaces';
import { BaseEvent } from './base-event';

export interface TicketUpdatedEvent extends BaseEvent {
  topic: Topics.TicketUpdated;
  data: TicketData;
}
