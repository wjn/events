import { Stan } from 'node-nats-streaming';
import { BaseEvent } from '../interfaces/events';
import { logIt, LogType } from '@nielsendigital/logit';

export abstract class Publisher<T extends BaseEvent> {
    abstract topic: T['topic'];

    // stan is nats backwards and what the NATS community calls the NATS client
    protected client: Stan;

    constructor(client: Stan) {
        this.client = client;
    }

    publish(data: T['data']): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.publish(this.topic, JSON.stringify(data), (err) => {
                if (err) {
                    return reject(err);
                }

                logIt.out(
                    LogType.SENT,
                    `[${this.topic}] event published to NATS`
                );

                resolve();
            });
        });
    }
}
