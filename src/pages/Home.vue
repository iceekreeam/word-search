<template>
    <section>
        <base-card>
        <search-form></search-form>
        </base-card>
    </section>
</template>
<script>
import SearchForm from "../components/forms/SearchForm.vue";
export default {
    components:{SearchForm}
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>