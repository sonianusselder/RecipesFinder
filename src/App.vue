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
    </main>
  </div>
</template>

<script>
import json from './assets/data/recipes.json'
import Dropdown from '@/components/Dropdown'

export default {
  name: 'app',
  components: {
    Dropdown,
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
          thumbnail: "http://lorempixel.com/40/40/people/1",
          ingredients: ["apple","banana","icecream"],
        },
        {
          id: 2,
          name: "Apple pie",
          thumbnail: "http://lorempixel.com/40/40/people/2",
          ingredients: ["apple","chocolate","flour"],
        },
        {
          id: 3,
          name: "Sugar cake",
          thumbnail: "http://lorempixel.com/40/40/people/3",
          ingredients: ["apple","sugar","milk"],
        },
        {
          id: 4,
          name: "Rice waffles",
          thumbnail: "http://lorempixel.com/40/40/4",
          ingredients: ["apple","jelly"],
        }
      ]
    }
  },
  methods: {
    onOptionSelect(option) {
      console.log(option);
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
