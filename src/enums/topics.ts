export enum Topics {
  // tickets
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',
  OrderCreated = 'order:created',
  // will handle order statuses of
  // CanceledByUser, CanceledUnavailable, OrderExpired
  OrderCanceled = 'order:canceled',
  ExpirationComplete = 'expiration:complete',
  PaymentCreated = 'payment:created',
}
