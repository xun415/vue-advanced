
<script>
// renderless component : template없이 데이터 제공만 하는 컴포넌트

import axios from 'axios';
export default {
  name: "FetchData",
  props : ['url'],
  data() {
    return {
      response : null,
      loading : true,
    }
  },
  created() {
    axios.get(this.url)
    .then( response => {
      this.response = response.data;
      this.loading = false;
    })
    .catch(err => {
      alert('[ERROR] fetching the data', err);
      console.log(err);
    })

  },
  render() {
    return this.$scopedSlots.default({
      response : this.response,
      loading : this.loading
    })
  }
}
</script>

<style scoped>

</style>