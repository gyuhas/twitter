<template>
  <div id="app">
    Welcome please enter a twitter handle: 
    <input v-model="handle"/>
    <button @click="showTaggedTweets(handle)">Done</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
const needle = require('needle');

@Component({
    components: {

    },
    data: {
      return: {
        handle: String,
      }
    }
})

const token = 'AAAAAAAAAAAAAAAAAAAAAOxobQEAAAAAZUxYpOwCP%2BqWidJsmXF7ACo093E%3Do6qQP3PwDk69qNRKvswKKjVLxqpZIocnnI4Obw8D3x4i377Dwu';
const xhr = new XMLHttpRequest();

export default class App extends Vue {
 async showTaggedTweets(handle: string) {
      const endpointURL = `https://api.twitter.com/2/users/by/username/${handle}`;
   fetch(endpointURL, {
  // body: JSON.stringify(dataToPost),
  mode: 'cors',
  headers: new Headers({
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${token}`,
  })
})
.then(response => response.json())
.then(json => console.log('Response', json))
debugger; // eslint-disable-line no-debugger
  //   debugger; // eslint-disable-line no-debugger
  // //  const params = {
  // //       "user.fields": "created_at,description", // Edit optional query parameters here
  // //       "expansions": "pinned_tweet_id",
  // //   }
  //   const res = await needle('get', endpointURL, {
  //       headers: {
  //           "Authorization": `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Origin': 'http://localhost:8080/',
  //           "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
  //           "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, X-Auth-Token, Origin"
  //       }
  //   })
  //   debugger; // eslint-disable-line no-debugger
  //   if (res.body) {
  //       return res.body;
  //   } else {
  //       throw new Error('Unsuccessful request')
  //   }
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
