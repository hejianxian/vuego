# Checkbox

`v-checkbox`组件，为了配合移动端的交互方式，实际是一组`list-item`元素。

### Basic Usage

```html
<v-list>
  <v-checkbox
    v-for="item in group"
    v-model="item.checked"
    :title="item.title"
    @input="selected">
  </v-checkbox>
</v-list>
```

<v-phone hash="checkbox"></v-phone>

### Attributes

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|title| 标题 | String | —— | —— |
|input| 选择后触发的方法 | Function | —— | —— |
