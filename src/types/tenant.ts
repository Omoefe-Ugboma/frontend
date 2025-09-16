export interface Tenant {
  // Basic identification
  id: string | number;
  name: string;
  subdomain: string;
  domain?: string;
  description?: string;
  
  // Contact information
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  
  // Business information
  logo?: string;
  website?: string;
  industry?: string;
  timezone: string;
  locale: string;
  currency: string;
  
  // Status and configuration
  isActive: boolean;
  isTrial: boolean;
  trialEndsAt?: Date | string;
  plan: 'free' | 'basic' | 'premium' | 'enterprise' | string;
  maxUsers?: number;
  storageLimit?: number;
  
  // Features and permissions
  features: {
    analytics: boolean;
    reports: boolean;
    apiAccess: boolean;
    customDomain: boolean;
    whiteLabel: boolean;
    [key: string]: boolean | any;
  };
  
  // Metadata
  createdAt: Date | string;
  updatedAt: Date | string;
  createdBy?: string | number;
  metadata?: Record<string, any>;
  
  // Billing information
  billing?: {
    customerId?: string;
    subscriptionId?: string;
    paymentMethod?: string;
    billingCycle: 'monthly' | 'annual';
    nextBillingDate?: Date | string;
    status: 'active' | 'past_due' | 'canceled' | 'unpaid';
  };
}