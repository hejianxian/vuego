# Action Sheet

`Action Sheets` 都是默认从底部向上升起，并且提供`标题`、`按钮组`和`取消按钮`。Vuego 只提供`$ActionSheet.create`方法来创建 Action Sheets。你可以通过点击背景或取消按钮来关闭。

### Basic Usage

```js
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
```

> 注意：`action`方法里，`this`指向的是`Vue实例`

### Attributes

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|title| 标题 | String | —— | —— |
|buttons| 按钮组 | Array | —— | —— |
|cancel| 取消按钮 | Object | —— | —— |


<v-phone hash="action-sheet"></v-phone>
