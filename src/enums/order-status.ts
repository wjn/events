export enum OrderStatus {
  // When order has been created but
  // the ticket attempting to be ordered has not been reserved
  Created = 'created',

  /**
   * Currently there are only OrderCanceled topics which means we're only
   * listening for a generic cancelation status.
   *
   * TODO: update system to listen and publish three types of cancelations:
   *    - canceled by user
   *    - canceled because the ticket was no longer available
   *    - canceled because order expired
   *
   * In the meantime `canceled:generic` will be used.
   *  */
  CanceledGeneric = 'canceled:generic',

  // When the ticket the order is trying to reserve has ALREADY been reserved
  CanceledUnavailable = 'canceled:unavailable',

  // when the user cancels the order
  CanceledByUser = 'canceled:by-user',

  // when the order expires before payment.
  CanceledExpired = 'canceled:expired',

  // When the order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // When the order has reserved the ticket and
  // the user has provided payment successfully
  Complete = 'complete',
}
