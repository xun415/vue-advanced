<template>
  <div>
    <span v-for="item in askItems">{{ item.title }}</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: "AskView",
  computed : {
    // #3
    ...mapGetters({
      askItems : "fetchedAsk"
    })

    // #2
    // ...mapState({
    //   ask : state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>

</style>