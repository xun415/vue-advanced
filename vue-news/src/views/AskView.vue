<template>
  <div>
    <ListItem></ListItem>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ListItem from "../components/ListItem";
import ListMixin from "../mixins/ListMixin";
export default {
  components : {
    ListItem,
  },
  mixins : [ListMixin],
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }

}
</script>

<style scoped>

</style>