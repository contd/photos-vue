<template>
  <router-link
    :to="{
      name: 'Gallery',
      params: { basePath: basePath, album: folder.name },
    }"
  >
    <div class="card">
      <div class="top-center">
        <img class="img-cover" height="180" :src="folder.thumb" />
      </div>

      <div class="title fs-large">
        {{ folder.name | fixName }}
      </div>

      <div class="content">
        <div class="row color-midgrey">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M20.4 14.5L16 10 4 20" />
          </svg>
          <span class="">{{ folder.items }} Pictures</span>
        </div>
        <div class="row color-midgrey">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {{ folder.modified | humanDate }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    humanDate(date) {
      return moment(date).format('ddd, MMM Do YYYY')
    },
    fixName(title) {
      return title
        .replace(/_/g, ' ')
        .replace(/\b[a-z]/g, char => char.toUpperCase())
    },
  },
  props: {
    folder: {
      type: Object,
      default: undefined,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.card {
  margin: 1em;
  padding: 0;
  min-height: 25vh;
  min-width: 20vw;
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
    padding: 0.5em;
  }
}

.card:hover {
  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
}
</style>
