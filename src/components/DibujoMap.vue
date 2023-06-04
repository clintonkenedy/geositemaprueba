<template>
  <q-page-sticky position="bottom-right" :offset="fabPos">

    <q-fab padding="md" icon="edit" direction="up" color="orange-10
" :disable="draggingFab" v-touch-pan.prevent.mouse="moveFab">
      <q-fab-action square @click="onClick" color="primary" icon="mdi-circle-medium" :disable="draggingFab" />
      <q-fab-action square @click="onClick" color="primary" icon="mdi-vector-line" :disable="draggingFab" />
      <q-fab-action square @click="onClick" color="primary" icon="mdi-shape-rectangle-plus" :disable="draggingFab" />
      <q-fab-action square @click="onClick" color="primary" icon="mdi-shape-polygon-plus" :disable="draggingFab" />
    </q-fab>
  </q-page-sticky>
</template>


<script setup>


import { ref } from 'vue';
const fabPos = ref([18, 18]);
const draggingFab = ref(false)
const moveFab = (ev) => {
  draggingFab.value = ev.isFirst !== true && ev.isFinal !== true

  fabPos.value = [
    fabPos.value[0] - ev.delta.x,
    fabPos.value[1] - ev.delta.y
  ]
}
const onClick = () => {


}

</script>

<style></style>
