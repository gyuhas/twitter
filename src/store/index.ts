import Vue from 'vue';
import Vuex from 'vuex';
import user from '../data/user';
import mentions from '../data/mentions';
import user1 from '../data/user1Following';
import user2 from '../data/user2Following';
import user3 from '../data/user3Following';
import { UserMentions }from '../models/mentions';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentResults: [],
    userID: '',
    mentions: [],
    usersFollowing: [],
    influentialTweet: [],
  },
  mutations: {
    SET_MOST_INFLUENTIAL(state) {
      const sortedArr = this.state.usersFollowing.sort((a: any, b: any) => b.aggregateCount - a.aggregateCount);
      // debugger; // eslint-disable-line no-debugger
      this.state.influentialTweet = sortedArr[0];
      console.log(this.state.influentialTweet);
    },
  },
  actions: {
    GET_USER_ID(state, payload) {
      // on enter of a username hit the below api to get the user id 
      // const endpointURL = `https://api.twitter.com/2/users/by/username/${payload}`;
      const userResponse = user.data;
      this.state.userID = userResponse.id;
      console.log(this.state.userID);
        //then here call get tagged tweets with the user id
      this.dispatch('GET_TAGGED_TWEETS', this.state.userID);
    },
    GET_TAGGED_TWEETS(state, payload) {
      //automatically then call this api to get the tagged tweets from a set number of dates
      //https://api.twitter.com/2/users/{payload}/mentions?start_time=2022-04-04T23:59:00.000Z&end_time=2022-04-11T12:01:00.000Z&tweet.fields=id,text,author_id,public_metrics&user.fields=id
      // cavet: updating the time
      // debugger; // eslint-disable-line no-debugger
      const formattedResponse = mentions.data.map((item: any) => new UserMentions(
        item.author_id,
        item.public_metrics.retweet_count,
        item.public_metrics.reply_count,
        item.public_metrics.like_count,
        item.public_metrics.quote_count,
        item.id,
        item.text,
        item.public_metrics.retweet_count + item.public_metrics.reply_count + item.public_metrics.like_count + item.public_metrics.quote_count
      ));
      this.state.mentions = formattedResponse;
      console.log(this.state.mentions);
      this.dispatch('GET_FOLLOWING');
    },
    GET_FOLLOWING(state, payload) {
      //call api for each state.mentions https://api.twitter.com/1.1/friendships/show.json
      // check that they follow state.userId if not remove from state.mentions
      // this.state.mentions.forEach(
        // hit this api with source_id being state.mentions.id and target_id being state.UserId
      // )
      if (this.state.mentions) {
        this.state.mentions.filter((i: any) => i.author_id === user1.relationship.source.id_str).forEach((i: any) => {
          if(!user1.relationship.target.following) {
            this.state.usersFollowing.push(i);
          }
        });
        this.state.mentions.filter((i: any) => i.author_id === user2.relationship.source.id_str).forEach((i: any) => {
          if(!user1.relationship.target.following) {
            this.state.usersFollowing.push(i);
          }
        });
        this.state.mentions.filter((i: any) => i.author_id === user3.relationship.source.id_str).forEach((i: any) => {
          if(!user1.relationship.target.following) {
            this.state.usersFollowing.push(i);
          }
        });
        console.log(this.state.usersFollowing);
        this.commit('SET_MOST_INFLUENTIAL');
    }
  },
    RETWEET_TWEET(state) {
      // https://api.twitter.com/1.1/statuses/retweet/:id.json
      //i n the id for user state.influentialTweet.id
    }
  },
  modules: {
  }
})
