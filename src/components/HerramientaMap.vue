<template>
  <q-page-sticky position="top-left" :offset="[18, 18]">
    <q-fab square padding="xs" v-model="drawer" icon="construction" active-icon="keyboard_arrow_up" direction="down"
      color="accent">
      <q-fab-action square @click="onClick" color="primary" icon="print" />
      <q-fab-action square @click="onClick" color="red" icon="backspace" />
    </q-fab>
  </q-page-sticky>
</template>

<script setup>


import { ref } from 'vue';
const drawer = ref(true);

const onClick = () => {


}


</script>

<style></style>
