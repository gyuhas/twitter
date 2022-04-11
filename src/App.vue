<template>
  <div id="app">
    Welcome please enter a twitter handle: 
    <input type="text" :value="name"/>
    <button @click="getUserId(name)">Done</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Mixin } from './mixin/apis';
import user from './data/user';

@Component({
    components: {
    },
    data() {
      return {
        name: 'lululemon'
      }
    }
})


export default class App extends Vue {
 async getUserId(handle: string) {
   this.$store.dispatch('GET_USER_ID', handle);
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
