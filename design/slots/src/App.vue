<template>
  <div id="app">
    <ul>
<!--      <item v-for="item in items" :key="item"> {{item}}</item>-->
      <item>아이템1</item>
      <item>
        아이템2<button>click me</button>
      </item>
      <item>
        <div>
          아이템3
        </div>
        <img src="./assets/logo.png" alt="뷰로고">
      </item>
      <item>
        <div style="color: blue; font-size: 20px">아이템4</div>
      </item>
    </ul>

  </div>
</template>

<script>
import Item from "./components/Item";
export default {
  name: 'App',
  components: {
    Item,
  },
  data() {
    return {
      items : ['아이템1','아이템2','아이템3','아이템4','아이템5',]
    }
  }
}
</script>

<style>

</style>
