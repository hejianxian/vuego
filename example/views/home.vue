<template>
  <div class="content">
    <template v-for="(value, type) in routers">
      <v-el class="content-block-title">{{type}}</v-el>
      <v-list class="menus-list">
        <li v-for="(path, name) in value">
          <router-link :to="path" class="v-item__link">
            <div class="v-item__content">
              <v-item-title>{{name}}</v-item-title>
            </div>
          </router-link>
        </li>
      </v-list>
    </template>

  </div>
</template>

<script>
import routers from '../router.config';

export default {
  name: 'home',
  data() {
    return {
      routers,
    };
  },
};
</script>

<style lang="less">

* {
  margin: 0;
  padding: 0;
}

.menus-list {
  .v-item-title {
    flex: 1;
    a{
      text-decoration: none;
      display: inline-block;
    }
  }
}
</style>
