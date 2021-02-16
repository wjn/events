import { Topics } from '../../enums';
import { UrlData } from '../data';
import { BaseEvent } from './base-event';

export interface UrlCreatedEvent extends BaseEvent {
  topic: Topics.UrlCreated;
  data: UrlData;
}
