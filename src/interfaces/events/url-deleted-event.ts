import { Topics } from '../../enums';
import { UrlData } from '../data';
import { BaseEvent } from './base-event';

export interface UrlDeletedEvent extends BaseEvent {
    topic: Topics.urlDeleted;
    data: UrlData;
}
