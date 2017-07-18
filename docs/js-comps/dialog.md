# Dialog

Vuego 提供的 `Dialog` 组件都是挂载到 `Vue.prototype` 上，所以可以在组件的生命周期事件内直接使用 `this.$Dialog.create` 方法创建弹出框。

`$Alert`、`$Confirm`实际上都是由`$Dialog.create`方法创建。

### Basic Usage

```js
// Custom Dialog
this.$Dialog.create({
  title: 'Custom Dialog',
  message: 'Test message',
  buttons: [{
    text: 'Btn1',
  }, {
    text: 'Btn2',
  }, {
    text: 'Btn3',
  }],
});

// Alert
this.$Alert({
  title: 'Alert',
  message: 'Test message',
  button: {
    text: '确定',
  },
});

// Confirm
this.$Confirm({
  title: 'Confirm',
  message: 'Test message',
  buttons: [{
    text: 'Cancel',
    action() {
      this.$Alert({
        title: 'Tips',
        message: 'You clicked `Cancel`',
      });
    },
  }, {
    text: 'Yes',
    action() {
      this.$Toast('You clicked `Yes`');
    },
  }],
});

```

> 注意：`action`方法里，`this`指向的是`Vue实例`

### Attributes

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|title| 标题 | String | —— | —— |
|message| 描述文字 | String | —— | —— |
|button| Alert 按钮 | Object | —— | —— |
|buttons| 按钮组 | Array | —— | —— |


<v-phone hash="dialog"></v-phone>
