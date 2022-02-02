<template>
  <div>
    <div v-for="news in this.$store.state.news">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList} from '../api/index.js'
export default {
  name: "NewsView",
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // // 1
    // fetchNewsList()
    // .then(response => {
    //   // 2
    //   this.users = response.data
    // })
    // .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>