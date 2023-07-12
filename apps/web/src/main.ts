import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { router } from './router'
import { i18n } from './plugins/i18n'
import { InMemoryCache, ApolloClient } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router)
app.use(i18n)
app.use(createPinia())
app.use(createHead())

app.mount('#app')
