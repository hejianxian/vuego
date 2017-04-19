<template>
  <v-el class="content">
    <div class="content-block">
      <v-button class="warning" large @click.native="open">Action Sheet</v-button>
    </div>
  </v-el>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    open() {
      this.$ActionSheet.create();
    },
  },
};
</script>
