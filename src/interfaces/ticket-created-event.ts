import { Topics } from '../enums';
import { TicketData } from '../interfaces';
import { BaseEvent } from './base-event';

export interface TicketCreatedEvent extends BaseEvent {
  topic: Topics.TicketCreated;
  data: TicketData;
}
