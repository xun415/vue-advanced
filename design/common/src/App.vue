<template>
  <div id="app">
    <AppHeader :title="appTitle"></AppHeader>
    <AppContent :items="items" @renew="renewItems"></AppContent>
  </div>
</template>

<script>
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,

  },
  data() {
    return {
      appTitle : 'Common Approach',
      items : [10, 20, 30],
    }
  },
  methods : {
    renewItems() {
      console.log("renew")
      this.items = [40, 50, 60];
    }
  }
}
</script>

<style>

</style>
