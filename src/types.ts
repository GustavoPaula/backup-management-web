export type Noop = () => void;
export interface LoginResponse {
  token: string;
}

export interface DecodeResult<T = Record<string, unknown>> {
  footer?: Buffer;
  payload?: T;
  purpose: 'local' | 'public';
  version: string;
}
