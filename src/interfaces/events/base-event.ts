import { Topics } from '../../enums';

// using NATS
export interface BaseEvent {
    topic: Topics;
    data: { [key: string]: any };
}
