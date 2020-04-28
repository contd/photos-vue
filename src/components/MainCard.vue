<template>
  <router-link :to="to">
    <div class="card">
      <div class="top-center">
        <img class="img-cover" height="180" :src="thumb" />
      </div>

      <div class="title fs-xlarge">
        {{ name }}
      </div>

      <div class="content">
        {{ description }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Name',
    },
    thumb: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    },
    description: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '/albums',
    },
  },
}
</script>

<style lang="scss">
.card {
  margin: 1em;
  padding: 0;
  height: 25vh;
  width: 25vw;
  border-radius: 1em;
  background: #fff;
  color: #666;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  .title {
    padding: 0.5em;
    text-align: center;
    justify-content: center;
  }

  .content {
    padding: 1em;
    text-align: center;
    justify-content: center;
  }
}

.card:hover {
  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
}
</style>
