<template>
  <div>
    <ListItem></ListItem>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ListItem from "../components/ListItem";
export default {
  components : {
    ListItem,
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }

}
</script>

<style scoped>

</style>