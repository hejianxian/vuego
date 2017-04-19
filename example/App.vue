<template>
  <div id="preview">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="less">
html, body{
  height: 100%;
}

#preview {
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
.content{
	position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 10;
  background: #efeff4;
}
.content-block{
	margin: 25px 0;
  padding: 0 15px;
  color: #6d6d72;
  box-sizing: border-box;
  p{
      padding: 1em 0;
  }
}
.content-block-title{
  position: relative;
  overflow: hidden;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 1;
  color: #6d6d72;
  margin: 25px 15px 10px;
  &+ .content-block{
    margin-top: 10px;
  }
  &+ .v-list{
    margin-top: 15px;
  }
}
</style>
