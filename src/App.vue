<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <ul>
        <li><router-link to="/">Hello</router-link></li>
        <li><router-link to="/world">World</router-link></li>
      </ul>

      <router-view></router-view>
      <div
      class="fb-like"
      data-share="true"
      data-width="450"
      data-show-faces="true">
    </div>
      <dropdown :options="options" @select-item="onOptionSelect">
        <template slot="item" slot-scope="option">
          <span>
            <img :src="option.thumbnail">
          </span>
        </template>
      </dropdown>
      <ul>
        <li v-for="(item, index) in options">
          {{ parentMessage }} - {{ index }} - {{ item.name }} - <span v-for="spice in item.ingredients">{{ spice }}</span>
        </li>
      </ul>

     <button id="btn" class="" v-on:click="getData">Get Data</button>

      <div v-if="loading">
        KAAS
      </div>

      <div v-for="info in infos" :key="info.id">
        <div class="cards">
            <img src="https://placeimg.com/300/300/nature" class="img-responsive" alt="Random images placeholder"> 
          <div>
            <h3>{{ info.id }}</h3>
            <p>{{ info.joke }}</p>
            <p>{{ info.category }}</p>
          </div>
        </div>
      </div>

      <next-case
			:case-name="HALLO"
			:image="nextCase.case_image"
			:case-color="nextCase.case_background_color"
			:slug="nextCase.post.post_name"
		/>

    </main>
  </div>
  
</template>

<script>
import json from './assets/data/recipes.json'
import Dropdown from '@/components/Dropdown'
import NextCase from '@/components/NextCase'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Dropdown,
    NextCase
  },
  data() {
    return {
      parentMessage: 'Parent',
      items: json,
      options: 
      [
        {
          id: 1,
          name: "Banana split",
          thumbnail: "",
          ingredients: ["apple","banana","icecream"],
        },
        {
          id: 2,
          name: "Apple pie",
          thumbnail: "",
          ingredients: ["apple","chocolate","flour"],
        },
        {
          id: 3,
          name: "Sugar cake",
          thumbnail: "",
          ingredients: ["apple","sugar","milk"],
        },
        {
          id: 4,
          name: "Rice waffles",
          thumbnail: "",
          ingredients: ["apple","jelly"],
        }
      ],
      infos: [],
      loading: false,    
    }
  },
  methods: {
    onOptionSelect(option) {
      console.log(option);
    },
    getData: function () {
      this.loading = true;
      axios.get("https://graph.facebook.com/voorbeeld?fields=id,name&accessToken=HIERTOKEN")
      .then((response)  =>  {
        this.loading = false;
        this.infos = response.data.value;
      }, (error)  =>  {
        this.loading = false;
      })
    }
  },
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
