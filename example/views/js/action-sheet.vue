<template>
  <v-page>
    <v-content>
      <v-content-block>
        <v-button class="warning" large @click.native="open">Action Sheet</v-button>
      </v-content-block>
    </v-content>
  </v-page>
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
