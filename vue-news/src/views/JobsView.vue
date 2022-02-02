<template>
  <div>
    <span v-for="job in this.$store.state.jobs">{{ job.title }}</span>
  </div>
</template>

<script>
export default {
  name: "JobsView",

  created() {
    this.$store.dispatch('FETCH_JOBS');
  }


}
</script>

<style scoped>

</style>