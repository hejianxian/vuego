# Grid

Vuego 提供的栅格系统用于通过一系列的行`v-row`与列`v-col`的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。

### Basic Usage

```html
<!-- Custom col-->
<v-row>
  <v-col col="33">33</v-col>
  <v-col col="33">33</v-col>
  <v-col col="33">33</v-col>
</v-row>

<!-- No gutter-->
<v-row no-gutter>
  <v-col col="25" class="custom-col">25</v-col>
  <v-col col="25" class="custom-col">25</v-col>
  <v-col col="25" class="custom-col">25</v-col>
  <v-col col="25" class="custom-col">25</v-col>
</v-row>

<!-- Auto col -->
<v-row>
  <v-col class="custom-col">auto</v-col>
  <v-col class="custom-col">auto</v-col>
</v-row>
```

<v-phone hash="grid"></v-phone>

### Attributes

`v-row`组件可以通过添加 no-gutter 属性取消内部`v-col`之间的间隔。而`v-col`组件可以通过设置 col 属性设置宽度。

`col`的可设置值如下：

> @cols: 5, 10, 15, 20, 25, 30, 100/3, 35, 40, 45, 50, 55, 60, 65, 100*(2/3), 70, 75, 80, 85, 90, 95, 100


|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|no-gutter| 取消内部`v-col`之间的间隔 | Boolean | —— | false |
|col| 设置col宽度 | String | @cols | auto |


