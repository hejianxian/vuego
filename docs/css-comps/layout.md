# Layout

该分类组件包括：

* `v-page` 页面的根元素组件
* `v-content` 页面的内容的最外层组件
* `v-content-block` 页面内容块
* `v-block-title` 页面内标题
* `v-header`页面头部栏
* `v-footer`页面底部栏

> `v-header`和`v-footer`只是提供一个占位符，并不包含任何元素。

### Basic Usage

```html
<v-page header footer>
  <v-header class="custom-toolbar">Header</v-header>
  <v-content>
    <v-block-title>block title</v-block-title>
    <v-content-block>
      <p>Content block</p>
    </v-content-block>
  </v-content>
  <v-footer class="custom-toolbar">Footer</v-footer>
</v-page>
```

### Attributes

`v-page`组件有两属性可设置：

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|header| 页面带头部栏 | Boolean | —— | false |
|footer| 页面带底部栏 | Boolean | —— | false |

<v-phone hash="layout"></v-phone>
