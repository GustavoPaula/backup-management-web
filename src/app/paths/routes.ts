const APP_BASE = '/app';

export const ROUTES = {
  public: {
    home: '/',
    forgotPassword: '/forgot-password',
  },
  app: {
    root: APP_BASE,
    users: `${APP_BASE}/users`,
    usersCreate: `${APP_BASE}/users/create`,
    customers: `${APP_BASE}/customers`,
    devices: `${APP_BASE}/devices`,
    backupPlans: `${APP_BASE}/backup-plans`,
  },
} as const;

export const ROUTE_SEGMENTS = {
  users: 'users',
  usersCreate: 'users/create',
  customers: 'customers',
  devices: 'devices',
  backupPlans: 'backup-plans',
} as const;
