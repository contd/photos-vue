<template>
  <div class="gallery top-center vw100">
    <MainCard
      :name="albums.name"
      :thumb="albums.thumb"
      :description="albums.description"
      :to="albums.to"
    />
    <MainCard
      :name="travels.name"
      :thumb="travels.thumb"
      :description="travels.description"
      :to="travels.to"
    />
    <MainCard
      :name="panorams.name"
      :thumb="panorams.thumb"
      :description="panorams.description"
      :to="panorams.to"
    />
    <MainCard
      :name="maps.name"
      :thumb="maps.thumb"
      :description="maps.description"
      :to="maps.to"
    />
  </div>
</template>

<script>
import MainCard from '@/components/MainCard'

export default {
  name: 'Home',
  components: {
    MainCard,
  },
  data: () => ({
    albums: {
      name: 'Albums',
      thumb: '/img/delhi-house.jpg',
      description:
        'This is a place where I share old family photos scanned as well as new adventures.',
      to: '/albums',
    },
    travels: {
      name: 'Travels',
      thumb: '/img/mexico-front.jpg',
      description:
        'Photos of the places lucky enough to travel to and the wonderful people met.',
      to: '/travels',
    },
    panorams: {
      name: 'Panoramas',
      thumb: '/img/monterrey-3-2015.jpg',
      description:
        'Panorams and photo sphere of my travels or just messing around.',
      to: '/panorams',
    },
    maps: {
      name: 'Maps',
      thumb: '/img/monterrey-7-2015.jpg',
      description: 'Maps of the travel photos showing where most were taken.',
      to: '/maps',
    },
  }),
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
