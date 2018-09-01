/* eslint import/no-webpack-loader-syntax: off */

import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import pages from 'json-loader!yaml-loader!./../pages/Homepage.yaml'

import List from '@/components/List'
import Textblock from '@/components/Text'

Vue.use(Router)
Vue.use(Meta)

// TODO: All starts here, read the json generated and start generating components based on the blocks.

// TODO: Get one or more files
console.log(pages)

let routes = []

Object.keys(pages).forEach(key => {
  let route = {
    path: pages[key].route.path,
    name: pages[key].route.name,
    component: Vue.component(pages[key].route.name, {
      data: function () {
        return {
          blocks: pages[key].template
        }
      },
      components: {
        List,
        Textblock
      },
      template: '<div class="page">' +
      '<div class="container" v-for="block in blocks">' +
      '<Textblock v-if="block.type == \'text\'" v-bind:text="block"></Textblock>' +
      '<div class="col-12" v-if="block.type == \'image\'"><img v-bind:src="block.src" v-bind:alt="block.title" /></div>' +
      '<List v-if="block.type == \'list\'" v-bind:list="block"></List>' +
      '</div>' +
      '</div>'
    })
  }
  routes.push(route)
})

export default new Router({
  mode: 'history',
  routes: routes
})
