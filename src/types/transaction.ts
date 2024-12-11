export interface Transaction {
  id: string;
  fromUserId: string;
  toUserId: string;
  amount: number;
  type: TransactionType;
  referenceId: string;
  timestamp: Date;
  status: TransactionStatus;
}

export enum TransactionType {
  VIEW = 'VIEW',
  COMMENT = 'COMMENT',
  PROFILE = 'PROFILE',
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL'
}

export enum TransactionStatus {
  PENDING = 0,
  COMPLETED = 1,
  FAILED = 2,
  REFUNDED = 3
}