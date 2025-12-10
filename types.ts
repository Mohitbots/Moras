

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  address: string;
  country: string;
  paymentMethod: 'paypal' | 'bitcoin' | 'payoneer' | 'bank_transfer';
  paymentAccount: string;
  apiToken: string;
}

export interface LinkData {
  id: string;
  originalUrl: string;
  shortUrl: string;
  slug: string;
  createdAt: string;
  expirationDate?: string;
  clicks: number;
  earnings: number;
  status: 'active' | 'hidden';
}

export interface DailyStat {
  date: string;
  views: number;
  linkEarnings: number;
  dailyCPM: number;
  referralEarnings: number;
}

export interface Announcement {
  id: string;
  type: 'info' | 'warning' | 'success';
  message: string;
  date: string;
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  method: string;
}

export interface ChartDataPoint {
  name: string;
  clicks: number;
  earnings: number;
}
