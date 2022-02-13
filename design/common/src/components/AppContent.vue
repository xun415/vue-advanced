<template>
  <div>
    <ul>
      <li v-for="item in items" v-bind:key="item">
        {{ item }}
      </li>
    </ul>
    <button v-on:click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  name: "AppContent",
  props : {
    items : {
      type : Array,
      required : true,
    }
  }
}
</script>

<style scoped>

</style>