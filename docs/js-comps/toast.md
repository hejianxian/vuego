# Toast

Vuego 提供的 `$Toast` 方法默认弹出居中的提示框，弹出时会有完全透明遮罩层，这样会导致后面的元素无法被点击。后续会添加更多的属性，例如弹出的位置，自定义图标等。

> this.$Toast(title, [closeTime])

### Basic Usage

```js
// 基本用法
this.$Toast('发送成功');

// 传入关闭时间，默认2000ms
this.$Toast('成功送达', 4000);
```

### Attributes

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|title| 标题 | String | —— | —— |
|closeTime| 关闭时间(ms) | Number | —— | 2000 |


<v-phone hash="toast"></v-phone>
