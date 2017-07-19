<template>
  <v-page>
    <v-content>
      <v-list>
        <v-checkbox
          v-for="item in group"
          :key="item.value"
          v-model="item.checked"
          :title="item.title"
          @input="selected"></v-checkbox>
      </v-list>
      <v-content-block>
        <p>Model: {{model}}</p>
        <p>{{group}}</p>
      </v-content-block>
    </v-content>
  </v-page>
</template>

<script>
export default {
  data() {
    return {
      group: [{
        title: 'Apple',
        value: 'Apple',
        checked: false,
      }, {
        title: 'Orange',
        value: 'Orange',
        checked: true,
      }, {
        title: 'Banana',
        value: 'Banana',
        checked: false,
      }],
      selectedItem: null,
    };
  },
  methods: {
    selected(val) {
      this.model = val;
    },
  },
};
</script>
