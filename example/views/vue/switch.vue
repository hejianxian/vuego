<template>
  <div>
    <div class="content">
      <div class="content-block-title">
        different color
      </div>
      <div class="content-block">
        <v-switch v-model="checked" @input="switchChange"></v-switch>
        <v-switch v-model="checked" class="green"></v-switch>
        <v-switch v-model="checked" class="lightblue"></v-switch>
        <v-switch v-model="checked" class="red"></v-switch>
      </div>
      <div class="content-block">
        <p>Switch status: {{checked}}</p>
      </div>
      <div class="content-block-title">
        disabled
      </div>
      <div class="content-block">
        <v-switch v-model="disable" class="plink" disabled></v-switch>
        <v-switch v-model="undisable" class="plink" disabled></v-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      disable: true,
      undisable: false,
    };
  },
  methods: {
    switchChange(val) {
      this.checked = val;
    },
  },
};
</script>

<style lang="less">

</style>
