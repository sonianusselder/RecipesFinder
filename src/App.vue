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
      <!-- <div v-for="data in items">{{data}}</div> -->


      
      <ul>
        <li v-for="(item, index) in items">
          {{ parentMessage }} - {{ index }} - {{ item.name }}
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
      items: json
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
