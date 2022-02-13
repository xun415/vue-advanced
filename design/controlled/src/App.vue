<template>
  <div id="app">
    <CheckBox v-model="checked"></CheckBox>
  </div>
</template>

<script>
import CheckBox from "./components/CheckBox";
export default {
  name: 'App',
  components: {
    CheckBox
  },
  data() {
   return {
     checkboxes: [],
     checked: false,
   }
  },
  // created () {
  //   fetchCheckBox()
  //       .then(result =>this.checkboxes = result.data );
  // },
  methods : {

  }
}
</script>

<style>

</style>
