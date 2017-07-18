# Spinners

Vuego 提供多种 `spinners`，spinner 的实现是基于 svg 的，所以大小和颜色都可以修改。

> 共六种：spin、balls、bars、bubbles、cubes、spokes

### Basic Usage

```html
<v-spinner :size="30" color="#007aff"></v-spinner>
<v-spinner name="bars" :size="30" color="#ffcc00"></v-spinner>
<v-spinner name="balls" :size="40" color="#5ac8fa"></v-spinner>
<v-spinner name="cubes" :size="50" color="#4cd964"></v-spinner>
<v-spinner name="bubbles" :size="60" color="#ff9500"></v-spinner>
<v-spinner name="spin" :size="70" color="#000"></v-spinner>
```

### Attributes

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|name| spinner 类型 | String | spin/balls/bars/bubbles/cubes/spokes | spin |
|size| spinner 大小 | Number | —— | —— |
|color| spinner 颜色 | String | —— | —— |

<v-phone hash="spinner"></v-phone>
