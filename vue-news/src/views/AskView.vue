<template>
  <div>
    <p  v-for="item in fetchedAsk">
      <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>sd
      <small>{{ item.time_ago }} {{ item.user }} </small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: "AskView",
  computed : {
    // #3
    ...mapGetters([
        'fetchedAsk'
    ])

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