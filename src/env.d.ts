/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vue3-phone-input' {
  import type { DefineComponent } from 'vue';
  const Vue3PhoneInput: DefineComponent<{}, {}, any>;
  export default Vue3PhoneInput;
}
