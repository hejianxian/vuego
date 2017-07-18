# Radio

与`v-checkbox`组件一样，为了配合移动端的交互方式，`v-radio`实际也是一组`list-item`元素。

### Basic Usage

```html
<v-list>
  <v-radio
    v-for="item in group"
    v-model="selectedItem"
    :title="item.title"
    :val="item.value"
    @input="selected">
  </v-radio>
</v-list>
```

### Attributes

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|title| 标题 | String | —— | —— |
|val| 值 | String | —— | —— |
|input| 选择后触发的方法 | Function | —— | —— |


<v-phone hash="radio"></v-phone>
