import { DecodeResult } from '../types';

export const pasetoDecode = (data: string): DecodeResult => ({
  footer: Buffer.from(data),
  payload: {},
  purpose: 'public',
  version: '4',
});
