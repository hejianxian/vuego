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
      this.$ActionSheet.create({
        title: '选择照片',
        buttons: [{
          text: '打开相册',
          action() {
            this.$Alert({ title: 'Tips', message: '你点击了“打开相册”' });
          },
        }, {
          text: '拍照',
          action() {
            this.$Toast('你点击了“拍照”');
          },
        }],
        cancel: {
          text: '取消',
        },
      });
    },
  },
};
</script>
