/* eslint import/no-webpack-loader-syntax: off */

import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Config from 'json-loader!yaml-loader!./../config/Config.yaml'


import ListBlock from '@/components/List'
import TextBlock from '@/components/Text'
import ImageBlock from '@/components/Image'
import TopBarBlock from '@/components/Topbar'
import HighlightBlock from '@/components/Highlight'


Vue.use(Router)
Vue.use(Meta)

// All starts here, read the json generated and start generating components based on the blocks.

var context = require.context("json-loader!yaml-loader!./../pages/", true, /\.yaml$/);
var pages = [];
context.keys().forEach(function (key) {
  pages.push(context(key)[key.replace('./','').replace('.yaml', '').toLowerCase()]);
});

let routes = []

Object.keys(pages).forEach(key => {
  let route = {
    path: pages[key].route.path,
    name: pages[key].route.name,
    component: Vue.component(pages[key].route.name, {
      data: function () {
        return {
          blocks: pages[key].template,
          font: Config['config'].styles.font,
          backgroundColor: Config['config'].styles.backgroundColor,
          textColor: Config['config'].styles.textColor,
        }
      },
      beforeMount: function () {
        let body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = this.backgroundColor;
        body.style.color = this.textColor;
      },
      components: {
        ListBlock,
        TextBlock,
        ImageBlock,
        TopBarBlock,
        HighlightBlock
      },
      template: '<div class="page" v-bind:class="[font ? font : \'\']">' +
      '<div class="container" v-for="block in blocks">' +
      '<TextBlock v-if="block.type == \'text\'" v-bind:text="block"></TextBlock>' +
      '<HighlightBlock v-if="block.type == \'highlight\'" v-bind:highlight="block"></HighlightBlock>' +
      '<ImageBlock v-bind:src="block.src" v-bind:alt="block.title"></ImageBlock>' +
      '<ListBlock v-if="block.type == \'list\'" v-bind:list="block"></ListBlock>' +
      '<TopBarBlock v-if="block.type == \'topbar\'" v-bind:brand="block.brand" v-bind:menu="block.menu"></TopBarBlock>' +
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
