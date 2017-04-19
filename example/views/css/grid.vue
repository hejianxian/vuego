<template>
  <div class="content">
    <div class="content-block">
      <v-row>
        <v-col col="33" class="custom-col">33</v-col>
        <v-col col="33" class="custom-col">33</v-col>
        <v-col col="33" class="custom-col">33</v-col>
      </v-row>
    </div>
    <div class="content-block">
      <v-row>
        <v-col col="25" class="custom-col">25</v-col>
        <v-col col="25" class="custom-col">25</v-col>
        <v-col col="25" class="custom-col">25</v-col>
        <v-col col="25" class="custom-col">25</v-col>
      </v-row>
    </div>
    <div class="content-block">
      <v-row>
        <v-col col="50" class="custom-col">50</v-col>
        <v-col col="50" class="custom-col">50</v-col>
      </v-row>
    </div>
    <div class="content-block">
      <v-row>
        <v-col class="custom-col">auto</v-col>
        <v-col class="custom-col">auto</v-col>
        <v-col class="custom-col">auto</v-col>
        <v-col class="custom-col">auto</v-col>
        <v-col class="custom-col">auto</v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.custom-col {
  text-align: center;
  height: 30px;
  border-radius: 2px;
  line-height: 30px;
  background: #fff;
}
</style>
