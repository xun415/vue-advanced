<template>
  <div id="app">
    <FetchData url="https://jsonplaceholder.typicode.com/users/1">

      <div slot-scope="{response, loading}" >
        <div v-if="!loading">
          {{response.name}}
          {{response.email}}
        </div>
        <div v-if="loading">
          Loading...
        </div>
      </div>


    </FetchData>
  </div>
</template>

<script>
import FetchData from "./components/FetchData";
export default {
  name: 'App',
  components: {
    FetchData
  }
}
</script>

<style>

</style>
