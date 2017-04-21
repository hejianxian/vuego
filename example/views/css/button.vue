<template>
  <div>
    <v-el class="content">
      <div class="content-block-title">Different sizes</div>
      <div class="content-block">
        <v-row>
          <v-col col="50">
            <v-button large class="primary">Large Button</v-button>
          </v-col>
          <v-col col="50">
            <v-button large class="info">Large Button</v-button>
          </v-col>
        </v-row>
      </div>
      <div class="content-block">
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
      </div>
      <div class="content-block">
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
      </div>
      <div class="content-block-title">Different style</div>
      <div class="content-block">
        <v-row>
          <v-col col="50">
            <v-button round class="warning">Round Button</v-button>
          </v-col>
          <v-col col="50">
            <v-button round outline class="warning">Round Button</v-button>
          </v-col>
        </v-row>
      </div>
      <div class="content-block">
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
      </div>
      <div class="content-block-title">Buttons group</div>
      <div class="content-block">
        <v-buttons-row>
          <v-button outline>button</v-button>
          <v-button>button</v-button>
          <v-button outline>button</v-button>
        </v-buttons-row>
      </div>
      <div class="content-block">
        <v-buttons-row>
          <v-button large outline class="success">button</v-button>
          <v-button large class="success">button</v-button>
        </v-buttons-row>
      </div>
    </div>
  </v-el>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
