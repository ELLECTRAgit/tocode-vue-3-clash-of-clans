<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide class="card__wrapper" v-for="item in items" :key="item.id">
      <TheCard
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgURL="item.img"
        :link="`/${item.alias}`"
        :lvl="item.lvl"
      >
        <template v-slot:body>
          {{ item.descr }}
        </template>

        <TheCardFooter
          class="card-stats"
          v-for="(stat, ind) in item.info"
          :key="ind"
          :statValue="stat.value"
          :statTitle="stat.title"
        ></TheCardFooter>
      </TheCard>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import items from '@/seeders/items';
import TheCard from '@/components/UI/TheCard';
import TheCardFooter from '@/components/TheCardFooter';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  components: {
    TheCard,
    TheCardFooter,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      items,
      settings: {
        itemsToShow: 3,
        wrapAround: true,
        snapAlign: 'center',
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 3,
        },
      },
    };
  },
};
</script>
