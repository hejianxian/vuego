<template>
  <v-page>
    <v-content>
      <v-block-title>Different sizes</v-block-title>
      <v-content-block>
        <v-row>
          <v-col col="50">
            <v-button large class="primary">Large Button</v-button>
          </v-col>
          <v-col col="50">
            <v-button large class="info">Large Button</v-button>
          </v-col>
        </v-row>
      </v-content-block>
      <v-content-block>
        <v-row>
          <v-col col="33">
            <v-button class="danger">Button</v-button>
          </v-col>
          <v-col col="33">
            <v-button class="success">Button</v-button>
          </v-col>
          <v-col col="33">
            <v-button class="info">Button</v-button>
          </v-col>
        </v-row>
      </v-content-block>
      <v-content-block>
        <v-row>
          <v-col col="33">
            <v-button outline>Button</v-button>
          </v-col>
          <v-col col="33">
            <v-button outline class="success">Button</v-button>
          </v-col>
          <v-col col="33">
            <v-button outline class="info">Button</v-button>
          </v-col>
        </v-row>
      </v-content-block>
      <v-block-title>Different style</v-block-title>
      <v-content-block>
        <v-row>
          <v-col col="50">
            <v-button round class="warning">Round Button</v-button>
          </v-col>
          <v-col col="50">
            <v-button round outline class="warning">Round Button</v-button>
          </v-col>
        </v-row>
      </v-content-block>
      <v-content-block>
        <v-row>
          <v-col col="33">
            <v-button outline>Button</v-button>
          </v-col>
          <v-col col="33">
            <v-button class="info">Button</v-button>
          </v-col>
          <v-col col="33">
            <v-button outline>Button</v-button>
          </v-col>
        </v-row>
      </v-content-block>
      <v-block-title>Buttons group</v-block-title>
      <v-content-block>
        <v-buttons-row>
          <v-button outline>button</v-button>
          <v-button>button</v-button>
          <v-button outline>button</v-button>
        </v-buttons-row>
      </v-content-block>
      <v-content-block>
        <v-buttons-row>
          <v-button large outline class="success">button</v-button>
          <v-button large class="success">button</v-button>
        </v-buttons-row>
      </v-content-block>
    </v-content>
  </v-page>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
