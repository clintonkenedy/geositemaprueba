<template>
  <q-layout view="hHh lpR fFf">

    <!-- <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />


        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
        <div>
          <q-toggle @update:model-value="darkMode" size="lg" v-model="dark" color="yellow" checked-icon="nightlight"
            unchecked-icon="light_mode" />
        </div>
      </q-toolbar>
    </q-header> -->




    <q-page-container>

      <router-view />

      <!-- <q-page-sticky position="top-left" :offset="[18, 18]">
          <q-fab square padding="sm" v-model="drawer" icon="keyboard_arrow_down" active-icon="keyboard_arrow_up"
            direction="down" color="accent">
            <q-fab-action square @click="onClick" color="primary" icon="person_add" />
            <q-fab-action square @click="onClick" color="primary" icon="mail" />
          </q-fab>
        </q-page-sticky>
        <q-page-sticky position="bottom-right" :offset="fabPos">

          <q-fab icon="add" direction="up" color="accent" :disable="draggingFab" v-touch-pan.prevent.mouse="moveFab">
            <q-fab-action square @click="onClick" color="primary" icon="person_add" :disable="draggingFab" />
            <q-fab-action square @click="onClick" color="primary" icon="mail" :disable="draggingFab" />
          </q-fab>
        </q-page-sticky> -->



    </q-page-container>


    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>

          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()


const leftDrawerOpen = ref(false);
const drawer = ref(true);
const miniState = ref(true);
const dark = ref($q.dark.isActive);
const expanded1 = ref(false);
const expanded2 = ref(false);
const link = ref('inbox');
const fab1 = ref(true);
const fabPos = ref([18, 18])
const draggingFab = ref(false)

const darkMode = (v) => {
  $q.dark.set(v);
}
$q.dark.set(false);
function onClick() {
  // console.log('Clicked on a fab action')
}

const moveFab = (ev) => {
  draggingFab.value = ev.isFirst !== true && ev.isFinal !== true

  fabPos.value = [
    fabPos.value[0] - ev.delta.x,
    fabPos.value[1] - ev.delta.y
  ]
}

</script>

<style lang="css">
.my-menu-link {
  color: white;
  background: #1976d2;
}
</style>
