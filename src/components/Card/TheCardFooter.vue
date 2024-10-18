<template>
  <div class="card-stats">
    <div class="one-third">
      <div class="stat-value">{{ statValue }}</div>
      <div class="stat">{{ statTitle }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    statValue: {
      type: String,
      required: true,
    },
    statTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
