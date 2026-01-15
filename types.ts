export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starter' | 'burger' | 'main' | 'friday' | 'drink';
  popular?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}