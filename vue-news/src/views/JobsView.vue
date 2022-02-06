<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem";
import ListMixin from "../mixins/ListMixin";
export default {
  components : {
    ListItem
  },
  mixins : [ListMixin],
  // created() {
  //   this.$store.dispatch('FETCH_JOBS');
  // }

}
</script>

<style scoped>

</style>