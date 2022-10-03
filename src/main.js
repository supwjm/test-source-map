import { createApp } from 'vue'
import App from './App.vue'
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";


const app = createApp(App)

Sentry.init({
    app,
    dsn: "",
    release: 'test-v7',
    integrations: [
      new BrowserTracing({
        tracingOrigins: ["localhost", /^\//],
      }),
    ],
    tracesSampleRate: 1.0,
  });

  app.mount('#app')
