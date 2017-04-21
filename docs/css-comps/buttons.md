# Buttons

`v-button`为常用的按钮组件，提供不同的尺寸，多种的样式和颜色，并可以使用`v-buttons-row`或`v-row`组合按钮。

> 若需要在按钮上绑定点击事件，需要使用`@click.native`指令。

### Basic Usage

不同的尺寸，除默认尺寸外，还提供`large`和`small`两个尺寸。
```html
<!-- Different sizes -->
<v-button>Button</v-button>
<v-button large class="primary">Large Button</v-button>
<v-button small class="info">Small Button</v-button>
```

不同的样式和颜色。样式有圆角和线框按钮，若需要使用系统颜色，可通过添加类名，包括`primary`，`success`，`info`，`warning`，`danger`五种颜色。
```html
<!-- Different styles -->
<v-button round class="warning">Round Button</v-button>
<v-button outline>Button</v-button>

<!-- Different colors -->
<v-button round class="primary">Primary Button</v-button>
<v-button outline class="info">Info Button</v-button>
<v-button round outline class="warning">Warning Button</v-button>
```

使用`v-buttons-row`组合按钮
```html
<!-- Buttons group -->
<v-buttons-row>
  <v-button outline>button</v-button>
  <v-button>button</v-button>
  <v-button outline>button</v-button>
</v-buttons-row>
```
<v-phone hash="button"></v-phone>

### Attributes

属性可以混合使用，例如：同时给按钮添加`round`和`outline`属性。

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|large| 大尺寸按钮 | Boolean | —— | false |
|small| 小尺寸按钮 | Boolean | —— | false |
|round| 圆角按钮 | Boolean | —— | false |
|outline| 线框按钮 | Boolean | —— | false |


