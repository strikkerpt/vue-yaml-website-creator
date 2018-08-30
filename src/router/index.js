/* eslint import/no-webpack-loader-syntax: off */

import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import pages from 'json-loader!yaml-loader!./../pages/Homepage.yaml'

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
      methods: {
        alignClass (align) {
          switch (align) {
            case 'left':
              return 'col-12 text-left'
            case 'right':
              return 'col-12 text-right'
            case 'center':
              return 'col-12 text-center'
          }
        }
      },
      template: '<div class="page">' +
      '<div class="container" v-for="(block, key) in blocks">' +
      '<div :class="alignClass(block.align)" v-if="key == \'text\'"><p>{{block.content}}</p></div>' +
      '<div class="col-12" v-if="key == \'image\'"><img v-bind:src="block.src" v-bind:alt="block.title" /></div>' +
      '<ul v-if="key == \'list\'">' +
      '<li v-for="listItem in block">{{listItem.content}}</li>' +
      '</ul>' +
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
