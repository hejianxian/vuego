# List

Vuego 的列表由多个组件组合而成的，包括：

* `v-list` 列表的最外层容器
* `v-item`  列表的 item 组件
* `v-item-title` 每一项的标题组件
* `v-item-media` 每一项的图标组件

### Basic Usage

```html
<!-- Default list -->
<v-list>
  <v-item>
    <v-item-title>Green</v-item-title>
    <v-item-title>Yellow</v-item-title>
    <v-item-title>Red</v-item-title>
  </v-item>
</v-list>

<!-- Medias list-->
<v-list>
  <v-item>
    <v-item-media>
      <i class="icon icon-mock"></i>
    </v-item-media>
    <v-item-title>White</v-item-title>
  </v-item>
  <v-item>
    <v-item-media>
      <i class="icon icon-mock"></i>
    </v-item-media>
    <v-item-title>Back</v-item-title>
  </v-item>
</v-list>

<!-- Inset List -->
<v-list inset>
  <v-item>
    <v-item-media>
      <i class="icon icon-mock"></i>
    </v-item-media>
    <v-item-title>Apple</v-item-title>
  </v-item>
</v-list>
```

### Attributes

`v-list`组件有一个属性可设置：

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|inset| 内置列表 | Boolean | —— | false |


<v-phone hash="list"></v-phone>

