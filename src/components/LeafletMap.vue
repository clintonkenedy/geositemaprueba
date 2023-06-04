<template>
  <q-page>
    <div id="mapBase" class="fixed">

    </div>


    <HerramientaMap></HerramientaMap>
    <!-- capass  -->

    <q-page-sticky position="top-right" :offset="[18, 18]">

      <div class="row">

        <div class="col q-ml-sm">
          <q-popup-proxy>
            <q-banner>
              Unfortunately, the credit card did not go through, please try again.

            </q-banner>

            <!-- <q-banner>

                <q-card class="my-card">
                  <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-bottom text-subtitle2 text-center">
                      Title
                    </div>
                  </q-img>
                </q-card>
              </q-banner> -->
          </q-popup-proxy>
          <q-tooltip anchor="bottom middle" self="center middle">
            Imagenes
          </q-tooltip>
          <q-fab square padding="sm" icon="perm_media" active-icon="keyboard_arrow_up" direction="down" color="secondary">

          </q-fab>
        </div>
        <div class="col q-ml-sm">
          <q-popup-proxy>
            <q-card class="my-card">

              <q-card-section>
                <div class="text-h6">Capas gaaaaaaaaaaaaa</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-option-group @update:model-value="op" :options="options" type="checkbox" v-model="group" />
              </q-card-section>
            </q-card>
          </q-popup-proxy>
          <q-tooltip anchor="bottom middle" self="center middle">
            Imagenes
          </q-tooltip>
          <q-fab square padding="sm" icon="perm_media" active-icon="keyboard_arrow_up" direction="down" color="secondary">

          </q-fab>
        </div>
        <div class="col q-ml-sm">
          <q-popup-proxy>
            <q-card class="my-card">

              <q-card-section>
                <div class="text-h6">Capas</div>
                <!-- <div class="text-subtitle2">by John Doe</div> -->
              </q-card-section>


              <q-card-section class="q-pa-none">

                <q-list>


                  <q-expansion-item expand-separator icon="signal_wifi_off" label="Categoria Comercial">
                    <q-card>
                      <q-card-section class="q-pl-lg">
                        <q-option-group @update:model-value="op" :options="options" type="checkbox" v-model="group" />

                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-expansion-item expand-separator icon="drafts" label="Categoria 2" header-class="text-purple">
                    <q-card>
                      <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos
                        corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>


                </q-list>

              </q-card-section>
            </q-card>
          </q-popup-proxy>
          <q-tooltip anchor="bottom middle" self="center middle">
            Capas
          </q-tooltip>
          <q-fab square padding="sm" icon="layers" active-icon="keyboard_arrow_up" direction="down" color="secondary">
          </q-fab>

        </div>



        <div class="col q-ml-sm">
          <q-popup-proxy>
            <q-card class="my-card">

              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row">
                  <div class="col">
                    <q-list bordered separator>
                      <q-item clickable v-ripple>
                        <q-item-section>Single line item</q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>
                          <q-item-label>Item with caption</q-item-label>
                          <q-item-label caption>Caption</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>
                          <q-item-label overline>OVERLINE</q-item-label>
                          <q-item-label>Item with caption</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>
                  <div class="col">
                    <q-list bordered separator>
                      <q-item clickable v-ripple>
                        <q-item-section>Single line item</q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>
                          <q-item-label>Item with caption</q-item-label>
                          <q-item-label caption>Caption</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>
                          <q-item-label overline>OVERLINE</q-item-label>
                          <q-item-label>Item with caption</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>
                  <div class="col">
                    <q-list bordered separator>
                      <q-item clickable v-ripple>
                        <q-item-section>Single line item</q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>
                        <q-item-section>
                          <q-item-label>Item with caption</q-item-label>
                          <q-item-label caption>Caption</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-ripple>

                        <q-item-section thumbnail>
                          <img src="https://cdn.quasar.dev/img/mountains.jpg">
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </div>
                </div>

              </q-card-section>
            </q-card>
          </q-popup-proxy>
          <q-tooltip anchor="bottom end" self="center right">
            Mapas Base
          </q-tooltip>
          <q-fab square padding="sm" icon="mdi-view-grid" active-icon="keyboard_arrow_up" direction="down"
            color="secondary">

          </q-fab>
        </div>



      </div>
      <div>

      </div>
      <div class="q-mt-md">

      </div>


    </q-page-sticky>

    <!-- editar  -->

    <DibujoMap></DibujoMap>

  </q-page>
</template>

<script setup>

import 'leaflet/dist/leaflet.css'
// import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'
import L, { marker } from 'leaflet'
// import Lcontrol from 'leaflet.locatecontrol'
import { onBeforeMount, onMounted, ref, watch } from 'vue';
// import GeojsonService from 'pages/GeojsonService.js'
import HerramientaMap from '../components/HerramientaMap.vue';
import DibujoMap from '../components/DibujoMap.vue';


const props = defineProps({
  markers: {
    type: Array,
    required: false,
    default: () => []
  }
});
const filter = ref('');
const filterRef = ref(null);

const selected = ref('Pleasant surroundings');
const ticked = ref([]);

// watch(ticked, () => {
//   console.log(ticked.value);

// });


const capas = ref(true);
const shape = ref('line');
const fabPos = ref([18, 18])
const draggingFab = ref(false)

const group = ref([]);
const options = [
  { label: 'Manzanas', value: 'mz sec 3' },
  { label: 'Lotes', value: 'lote sec 3', },
  // { label: 'Picture uploaded', value: 'upload', }
]
const expanded = ref(['Satisfied customers (with avatar)', 'Good food (with icon)']);

const myFilterMethod = (node, filter) => {
  const filt = filter.toLowerCase()
  return node.label && node.label.toLowerCase().indexOf(filt) > -1 && node.label.toLowerCase().indexOf('(*)') > -1
}

const resetFilter = () => {
  filter.value = ''
  filterRef.value.focus()
}


const holaaaa = (e) => {
  console.log("holaaa");
}

onMounted(() => {
  mapaBase();
});

onBeforeMount(() => {
  if (map) {
    map.remove();
  }
});

let map = null;

const mapaBase = () => {
  map = L.map('mapBase', {
    center: [-15.869502, -69.986042],
    zoom: 16,
    maxZoom: 22,
    zoomControl: false,

    // maxBounds: [
    //   //surOeste
    //   [-15.890730, -70.054679],
    //   //norEste
    //   [-15.787270, -69.960227]
    // ],
  });

  // let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="http: //www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // }).addTo(map);
  let google = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
    maxZoom: 22,
  }).addTo(map);

  // let lotes = L.tileLayer.wms("http://192.168.0.10:8080/geoserver/EMSA_PUNO_S2/wms?", {
  //   maxZoom: 40,
  //   layers: "LOTES_SEC_02",
  //   format: "image/png",
  //   transparent: true
  // }).addTo(map);


  //
}
const op = (e) => {
  console.log(e);
  if (e.length == 0) {
    //map.removeLayer();
    map.eachLayer((layer, key) => {
      console.log(key, layer)
    });
    let google = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
      maxZoom: 22,
    }).addTo(map);
    console.log("vacio");
  } else {

    console.log("1+");
    let manzanas = L.tileLayer.wms("http://192.168.0.10:8080/geoserver/EMSA_PUNO/wms?", {
      maxZoom: 22,
      layers: e,
      format: "image/png",
      transparent: true,
      tiled: true,

    }).addTo(map);
  }

}

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
  // let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="http: //www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // }).addTo(map);

  let google = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}').addTo(map);


  let terminalTerr = L.marker([-15.843760, -70.017276], {
    title: 'Terminal Terrestre',
    draggable: true,
    autoPan: true,
  }).addTo(map);




  // if (props.markers.length) {
  //   setMarkes();
  // }


  // let manzanas = L.tileLayer.wms("http://192.168.0.10:8080/geoserver/Prueba_01/wms?", {
  //   layers: "MZ SEC02",
  //   format: "image/png",
  //   transparent: true
  // }).addTo(map);
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
    // "Manzanas": manzanas,

  };
  //CONTROL DE LOS MAPAS BASE Y CAPAS DE NUESTRO MAPA
  // L.control.layers(mapasBase, capas, {
  //   position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
  //   collapsed: true // true
  // }).addTo(map);

  // let ubicacion = L.control.locate({
  //   position: 'bottomright',
  //   strings: {
  //     title: "Estoy aqui"
  //   }
  // }).addTo(map);







}
const setMarkes = () => {
  props.markers.map((maker) => {
    return L.marker([marker.latitude, marker.longitude]).addTo(map).bindPopup(marker.description);
  });
}
</script>

<style scoped>
#mapBase {
  width: calc(100vw - 0px);
  height: calc(100vh - 0px);
}

/* .my-card {
  width: 100%;
  max-width: 350px;
} */

.card-max {
  width: 100%;
  max-width: 350px;
}

.example-item {
  height: 0px;
  width: 90px;
}
</style>


