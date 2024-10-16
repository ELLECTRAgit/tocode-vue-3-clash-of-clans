<template>
  <div class="wrapper-person">
    <div v-if="itemAliasPage">
      <img :src="itemAliasPage.img" :alt="itemAliasPage.title" />
      <h1 class="title" style="color: #ffffff">{{ itemAliasPage.title }}</h1>
      <p>{{ itemAliasPage.descr }}</p>
      <div class="card-stats">
        <div
          class="one-third"
          v-for="(stat, index) in itemAliasPage.info"
          :key="index"
        >
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat">{{ stat.title }}</div>
        </div>
      </div>
      <div>
        <router-link to="/" class="btn btnPrimary" style="margin-top: 2em">
          Back to home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items';

export default {
  data() {
    return {
      itemAliasPage: null,
    };
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find((el) => el.alias === alias);
    this.itemAliasPage = item;
  },
};
</script>
<style lang="scss">
.wrapper-person {
  text-align: center;
}
.card-stats {
  border-radius: 14px;
  margin: 3em 0;
}
</style>
