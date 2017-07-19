<template>
  <v-el class="content">
    <v-list>
      <v-radio
        v-for="item in group"
        v-model="selectedItem"
        :key="item.value"
        :val="item.value"
        :title="item.title"
        @input="selected"></v-radio>
    </v-list>
    <div class="content-block">
      {{selectedItem}}
    </div>
  </v-el>
</template>

<script>
export default {
  data() {
    return {
      group: [{
        title: 'Apple',
        value: 'Apple',
      }, {
        title: 'Orange',
        value: 'Orange',
      }, {
        title: 'Banana',
        value: 'Banana',
      }],
      selectedItem: 'Apple',
    };
  },
  methods: {
    selected(val) {
      this.selectedItem = val;
    },
  },
};
</script>
