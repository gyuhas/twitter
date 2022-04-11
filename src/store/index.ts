import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentResults: [],
  },
  mutations: {

  },
  actions: {
    GET_TAGGED_TWEETS(state, payload) {
    //   let params = {
    //     "max_results": 100,
    //     "tweet.fields": "created_at"
    // }

    const options = {
        headers: {
            "User-Agent": "v2UserMentionssJS",
            "authorization": `Bearer ${'AAAAAAAAAAAAAAAAAAAAAOxobQEAAAAAZUxYpOwCP%2BqWidJsmXF7ACo093E%3Do6qQP3PwDk69qNRKvswKKjVLxqpZIocnnI4Obw8D3x4i377Dwu'}`
        }
    }
      axios
      .get(`https://api.twitter.com/2/users/by?usernames=${payload}&user.fields=created_at&expansions=pinned_tweet_id`, options)
      .then(function(response) {
        debugger; // eslint-disable-line no-debugger
        state.currentResults = response.data
      })
    }
  },
  modules: {
  }
})
