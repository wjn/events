import nats, { Message, Stan } from 'node-nats-streaming';
import { BaseEvent } from '../interfaces';
import { logIt, LogType } from '@nielsendigital/logit';

export abstract class Listener<T extends BaseEvent> {
  abstract topic: T['topic'];
  abstract queueGroupName: string;
  abstract onMessage(data: T['data'], msg: Message): void;
  // stan is nats backwards and what the NATS community calls the NATS client
  protected client: Stan;
  // ** protected ** properties are optionally implemented by subclasses
  // ackWait describes the number of milliseconds the NATS server will
  // wait before resending a message
  protected ackWait = 5 * 1000;

  constructor(client: Stan) {
    this.client = client;
  }

  // builds out NATS client options
  subscriptionOptions() {
    return (
      this.client
        .subscriptionOptions()
        .setManualAckMode(true)
        // delivers all events in the past
        .setDeliverAllAvailable()
        // will only deliver missed events for the durableName
        .setDurableName(this.queueGroupName)
    );
  }

  // creates NATS subscription
  /**
   * @returns: void
   */
  listen(): void {
    // make sure to use queueGroupName to make sure that events are
    // distributed to all instances of a listener
    const subscription = this.client.subscribe(this.topic, this.queueGroupName, this.subscriptionOptions());

    // msg is NOT just the raw data
    subscription.on('message', (msg: Message) => {
      const sequence = msg.getSequence();

      logIt.out(LogType.RECEIVED, `[${this.topic}] [msg #${sequence}] for ${this.queueGroupName} (queueGroup).`);

      const parsedData = this.parseMessage(msg);

      // This method is defined here but must be implemented in any subclasses
      this.onMessage(parsedData, msg);
    });
  }

  /**
   *
   * @param msg :Message
   * @returns JSON
   */
  parseMessage(msg: Message): JSON {
    const data = msg.getData();
    return typeof data === 'string'
      ? JSON.parse(data)
      : // if not string then it's a buffer
        JSON.parse(data.toString('utf-8'));
  }

  // end class
}
