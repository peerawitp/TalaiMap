<script setup lang="ts">
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
const config = useRuntimeConfig()
const url =
  'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=' +
  config.MAP_API_KEY
const attribution =
  '<a target="_blank" href="https://www.ku.ac.th/th">Kasetsart University</a>'
const zoom = 16
const center = [13.8489, 100.5699]
const markerLatLng = [13.8421271, 100.5760808]
</script>

<template>
  <l-map style="height: 82vh" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
  </l-map>
</template>
