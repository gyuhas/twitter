const axios = require('axios');
const querystring = require('querystring');
const apiUrl = 'https://api.twitter.com/2/users/by/username';
const apikey = 'AAAAAAAAAAAAAAAAAAAAAOxobQEAAAAAZUxYpOwCP%2BqWidJsmXF7ACo093E%3Do6qQP3PwDk69qNRKvswKKjVLxqpZIocnnI4Obw8D3x4i377Dwu';
export const Mixin = {
    methods: {
        getArticles(section: any) {
            debugger; // eslint-disable-line no-debugger
            return axios.get(`${apiUrl}/${section}.json`,  {headers: {
                        //   "Authorization": `Bearer ${apikey}`,
                          'Content-Type': 'application/json',
                          'Access-Control-Allow-Origin': 'http://localhost:8080/',
                          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                          "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, X-Auth-Token, Origin"
                      }
                    });
        },
}
}

