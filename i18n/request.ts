import {getRequestConfig} from 'next-intl/server';
import {locales} from '../next-intl.config'
export type Locale = typeof locales[number];


export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`@/messages//${locale}.json`)).default
}));
