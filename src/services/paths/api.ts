const API_BASE_URL = import.meta.env.VITE_API_URL ?? '';

const createApiPath = (path: string) => `${API_BASE_URL}${path}`;

export const API_PATHS = {
  auth: {
    login: createApiPath('/login'),
  },
} as const;
