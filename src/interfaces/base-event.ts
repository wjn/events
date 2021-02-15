import { Topics } from '../enums';

export interface BaseEvent {
  topic: Topics;
  data: any;
}
