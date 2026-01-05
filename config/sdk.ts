import { DailypayResourceApi } from '@/src/sdk/catalog';

const path = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://dev.api.alerts.africa/services/dev-account-microservice';
export const dailypayResource = new DailypayResourceApi(undefined, path);
