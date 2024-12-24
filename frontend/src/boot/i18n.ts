import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof messages['ja'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */

  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: 'ja',
    legacy: false,
    messages,
  });

export default defineBoot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});

// useI18nは、vue-i18nにも定義が存在するが、vue-i18nはsetupコンテキストからしか呼び出せず、
// 初期化中のawait処理の後で呼び出すとエラーとなる。
// それは不便なので、どこからでも呼び出せるよう事前定義にしておく。
export function useI18n() {
  const { t, te, d, n, ...globalApi } = i18n.global;

  return {
    t: t.bind(i18n),
    d: d.bind(i18n),
    te: te.bind(i18n),
    n: n.bind(i18n),
    ...globalApi,
  };
}
