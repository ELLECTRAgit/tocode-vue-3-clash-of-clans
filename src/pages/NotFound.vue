<template>
  <div v-if="notFoundPage">
    <h1 class="title">404 NotFound</h1>
  </div>
</template>
<script>
import items from '@/seeders/items';
export default {
  data() {
    return {
      notFoundPage: null,
    };
  },
  created() {
    const alias = this.$route.params.notFoundPage;
    const itemNotFound = items.find((el) => alias != el.alias);
    console.log(itemNotFound);
    this.notFoundPage = itemNotFound;
  },
};
</script>
