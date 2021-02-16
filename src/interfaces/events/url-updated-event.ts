import { Topics } from '../../enums';
import { UrlData } from '../data';
import { BaseEvent } from './base-event';

export interface UrlUpdatedEvent extends BaseEvent {
    topic: Topics.UrlUpdated;
    data: UrlData;
}
