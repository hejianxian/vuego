# Preloader

`$Preloader` 是一个 loading 提示框，提供多种 [spinner](vue-comps/spinners.md) 选择，并且可以设置颜色和带上描述文字。`Preloader` 并不会自动关闭，需要手动调用`close()`方法进行关闭。


### Basic Usage

```js
// 基本用法
openDefault() {
  const loader = this.$Preloader();
  setTimeout(() => {
    loader.close();
  }, 3000);
}

// 自定义
openWithMessage() {
  const loaderWithMsg = this.$Preloader({
    spinner: 'spin',
    message: '加载中...',
    color: '#F7BA2A',
  });
  setTimeout(() => {
    loaderWithMsg.close();
  }, 2000);
}
```

### Attributes

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|spinner| spinner 类型 | String | —— | —— |
|message| 描述信息 | String | —— | —— |
|color| spinner 颜色 | String | —— | —— |


<v-phone hash="preloader"></v-phone>
