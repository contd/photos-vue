<template>
  <div>
    <div class="row center pl2 vh5 bg-darkgrey border-accent bb2">
      <div class="center-left w25">
        <h1 class="color-grey">Photos</h1>
      </div>

      <div class="center w75">
        <router-link to="/" class="btn-small">
          Home
        </router-link>
        <router-link :to="{ name: 'Albums' }" class="btn-small">
          Albums
        </router-link>
        <router-link :to="{ name: 'Travels' }" class="btn-small">
          Travels
        </router-link>
        <router-link :to="{ name: 'Panorams' }" class="btn-small">
          Panorams
        </router-link>
        <router-link :to="{ name: 'Maps' }" class="btn-small">
          Maps
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    //
  },
}
</script>
