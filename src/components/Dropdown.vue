<template>
    <div class="autocomplete">
        <p class="control icon-right">
            <input type="text" class="input-dropdown"
                placeholder=""
                @input="onInput($event.target.value)" 
                @blur="isOpened = false"
                @keyup.enter="select"
                @keyup.tab="select"
                @keydown.down="onDown"
                @keydown.up="onUp"
                @keyup.esc="isOpen = false"
                ref="dropdown"
                v-model="search"/>
            <i class="chevron bottom" 
                @click="toggle"
                :class="{'chevron-active' : isOpened, 'chevron-inactive' : !isOpened}">
            </i>
        </p>
        <transition	name="fade" mode="in-out">
            <ul class="options-list" v-show="isOpened">
                <li v-for="(option, i) in filteredItems"
                    @mouseenter="selected = i"
                    @mousedown="select"
                    :class="{'selected': i === selected}">
                        {{ option.name }}
                    <slot name="item" :title="option.name" :thumbnail="option.thumbnail"></slot>
                </li>
            </ul>
        </transition>
        <ul>
          <li v-for="(option, i) in filteredItems">
                  {{ option.name }}
              <slot name="item" :title="option.name" :thumbnail="option.thumbnail"></slot>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
      selected: null,
      search: ""
    };
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    onInput(value) {
      this.isOpened = !!value; //(value != '');
      this.selected = null;
    },
    select() {
      const selectedOption = this.filteredItems[this.selected];
      this.$emit("select-item", selectedOption);
      this.search = selectedOption.name;
      this.isOpened = false;
    },
    onDown() {
      if (!this.isOpened) {
        return;
      }
      this.selected = (this.selected + 1) % this.filteredItems.length;
    },
    onUp() {
      if (!this.isOpened) {
        return;
      }

      this.selected =
        this.selected - 1 < 0
          ? this.filteredItems.length - 1
          : this.selected - 1;
    },
    toggle() {
      this.isOpened = !this.isOpened;
      if (this.isOpened) {
        //this.$refs.dropdown.focus();
      }
    }
  },
  computed: {
    filteredItems() {
      const condition = new RegExp(this.search, "i");
      return this.options.filter(item => item.name.match(condition));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.autocomplete {  width: 300px; }
ul.options-list li.selected { background-color: #2196f3; color: #fff; }

input.input-dropdown { 
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  height: 40px;
  width: 100%;
  border: 1px solid #2196f3;
  border-radius: 2px 0 0 2px;
  background-color: #2196F3;
  color: #fff;
  font-size: 16px;
  padding-right: 38px;
  padding-left: 8px;
}

input.input-dropdown::-webkit-input-placeholder { color: #fff; }
p.control { position: relative; display: flex; margin-bottom: .1rem; box-shadow: 0px 1px 5px 1px rgba(119, 119, 119, 0.53);     z-index: 10;}

p.control i {
  width: 70px;
  top: 0;
  border: none;
  right: 0;
  color: #fff;
  background: #2196F3;
  box-shadow: -2px 0px 1px #1b7bc7;
  border-radius: 0 2px 2px 0;
}

ul.options-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0px 3px 6px 0px rgba(195, 195, 195, 0.76);
}

ul.options-list li {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  padding: 0.4rem;
  border-bottom: 1px solid #eee;
  color: #666;
  background-color: #fff;
  cursor: pointer;
  transition: .3s all ease;
}
.icon-right i { transition: .3s all ease;}
.icon-right i:hover, i.chevron.bottom.chevron-active { 
  box-shadow: 0 0 6px #1b7bc7; 
  background-color: #38a2f7; 
}

ul.options-list li span { margin-right:4px; }

.chevron:before {
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: '';
  display: inline-block;
  height: 0.45em;
  left: 0.05em;
  position: relative;
  top: 0.15em;
  transform: rotate(-45deg);
  vertical-align: top;
  width: 0.45em;
  transition: .3s all ease;
  will-change: transform;
}

.chevron.bottom:before { top: 16px; left: 19px;}

.chevron-active.bottom:before {
  transform: rotate(135deg);
  will-change: transform;
}

.chevron-inactive.bottom:before {
  transform: rotate(225deg);
  will-change: transform;
}

ul.options-list li:last-child { border-bottom: none; }

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  will-change: opacity;
  transform: translateY(-30px);
}
</style>
