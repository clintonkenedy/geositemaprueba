<template>
  <div>
    <div id="mapContainer">

    </div>
  </div>
</template>

<script setup>

import 'leaflet/dist/leaflet.css'
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'
import L, { marker } from 'leaflet'
import Lcontrol from 'leaflet.locatecontrol'
import { onBeforeMount, onMounted, ref } from 'vue';
import GeojsonService from 'pages/GeojsonService.js'

const props = defineProps({
  markers: {
    type: Array,
    required: false,
    default: () => []
  }
});

const mapageo = ref(null);


onMounted(() => {
  createMapLayer();
});

onBeforeMount(() => {
  if (map) {
    map.remove();
  }
});

let map = null;
const createMapLayer = () => {
  // map = L.map('mapContainer').setView([-15.841190, -70.018221], 4);
  map = L.map('mapContainer', {
    center: [-15.841190, -70.018221],
    zoom: 14,
    maxBounds: [
      //surOeste
      [-15.890730, -70.054679],
      //norEste
      [-15.787270, -69.960227]
    ],
  });
  // map = L.map('mapContainer').setView([15.502825, 70.010553], 14);
  let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http: //www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  let google = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}');


  let terminalTerr = L.marker([-15.843760, -70.017276], {
    title: 'Terminal Terrestre',
    draggable: true,
    autoPan: true,
  }).addTo(map);




  // if (props.markers.length) {
  //   setMarkes();
  // }


  let manzanas = L.tileLayer.wms("http://192.168.0.10:8080/geoserver/Prueba_01/wms?", {
    layers: "MZ SEC02",
    format: "image/png",
    transparent: true
  }).addTo(map);
  // console.log("hola xd");




  let mapasBase = {
    "Openstreetmap": osm,
    "Google": google,
    "Carto": google,
    "Opentopomap": google,
    "Imágenes AGO": google

  };
  let capas = {

    // "Polilinea": polilinea,
    "Manzanas": manzanas,

  };
  // CONTROL DE LOS MAPAS BASE Y CAPAS DE NUESTRO MAPA
  L.control.layers(mapasBase, capas, {
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: true // true
  }).addTo(map);

  let ubicacion = L.control.locate({
    position: 'bottomright',
    strings: {
      title: "Estoy aqui"
    }
  }).addTo(map);







}
const setMarkes = () => {
  props.markers.map((maker) => {
    return L.marker([marker.latitude, marker.longitude]).addTo(map).bindPopup(marker.description);
  });
}
</script>

<style scoped>
#mapContainer {
  width: calc(100vw - 0px);
  height: calc(100vh - 50px);
}
</style>
