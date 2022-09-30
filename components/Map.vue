<script setup lang="ts">
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LIcon,
} from '@vue-leaflet/vue-leaflet'

import busStop from '~/bus_stop.json'

const config = useRuntimeConfig()
const url =
  'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=' +
  config.MAP_API_KEY
const attribution =
  '<a target="_blank" href="https://www.ku.ac.th/th">Kasetsart University</a>'
const zoom = 16
const center = [13.8485, 100.5725]
</script>

<template>
  <l-map style="height: 100vh" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      v-for="item in busStop"
      :key="item.stop_name"
      :lat-lng="[item.lat, item.lng]"
    >
      <l-icon icon-url="/bus_stop_marker.png" :popup-anchor="[2, -40]"></l-icon>
      <l-popup>{{ item.stop_name }}</l-popup>
    </l-marker>
  </l-map>
</template>
