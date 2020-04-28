<template>
  <div>
    <silent-box :gallery="photos"></silent-box>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Gallery',
  props: {
    basePath: {
      type: String,
      default: 'albums',
    },
    album: {
      type: String,
      default: 'Christmas_Time',
    },
  },
  data: () => ({
    photos: [],
    loading: true,
    errored: false,
  }),
  mounted() {
    this.basePath = this.$route.params.basePath
    this.album = this.$route.params.album
    axios
      .get(`https://api.kumpf.io/${this.basePath}/${this.album}`)
      .then(resp => {
        const rawpics = resp.data.Pictures
        this.photos = rawpics.map(photo => {
          return {
            src: photo.path,
            thumbnail: photo.thumb,
          }
        })
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => {
        this.loading = false
      })
  },
}
</script>
