<template>
  <div class="gallery top-center vw100">
    <FolderCard
      v-for="(folder, i) in albums"
      :key="i"
      :folder="folder"
      basePath="panorama"
    >
    </FolderCard>
  </div>
</template>

<script>
import axios from 'axios'
import FolderCard from '@/components/FolderCard'

export default {
  name: 'Panorams',
  components: {
    FolderCard,
  },
  data: () => ({
    albums: [],
    loading: true,
    errored: false,
  }),
  mounted() {
    axios
      .get('https://api.kumpf.io/panorama')
      .then(resp => {
        this.albums = resp.data.Directories
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => {
        this.loading = false
      })
  },
  methods: {
    openAlbum() {
      console.log(`Opened album: ${this.folder}`)
    },
  },
}
</script>

<style lang="scss">
.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
