# Switch

`v-switch` 是一个开关类型的组件，可以通过设置不同的 class 来显示不同的背景颜色，如果需要观察值的变化，需要监听`input`事件，每一次值的改变都会触发该事件。

### Basic Usage

```html
<!-- 监听 input 事件   -->
<v-switch v-model="checked" @input="switchChange"></v-switch>

<!-- 不同的颜色 -->
<v-switch v-model="checked" class="green"></v-switch>
<v-switch v-model="checked" class="lightblue"></v-switch>
<v-switch v-model="checked" class="red"></v-switch>

<!-- 不可点击的 -->
<v-switch v-model="disable" disabled></v-switch>
<v-switch v-model="undisable" disabled></v-switch>
```

### Attributes

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|input| 当值改变时触发 | Function | —— | —— |
|disabled| 不可用状态 | Boolean | —— | —— |

<v-phone hash="switch"></v-phone>
