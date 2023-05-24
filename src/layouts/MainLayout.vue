<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
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
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
    </q-drawer> -->

    <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true"
      overlay :width="300" :breakpoint="500" bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list>
          <q-expansion-item v-model="expanded2" icon="perm_identity" label="Account settings" caption="John Doe">
            <q-list class=" text-primary">
              <q-item clickable v-ripple :active="link === 'inbox'" @click="link = 'inbox'"
                active-class="bg-primary text-white">
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section>Inbox</q-item-section>
              </q-item>

              <q-item clickable v-ripple :active="link === 'outbox'" @click="link = 'outbox'" active-class="my-menu-link">
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>

                <q-item-section>Outbox</q-item-section>
              </q-item>

            </q-list>
          </q-expansion-item>
          <q-expansion-item v-model="expanded1" icon="perm_identity" label="Account settings" caption="John Doe">
            <q-card>
              <q-card-section>
                Lorem
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              Drafts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>

          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()


const leftDrawerOpen = ref(false);
const drawer = ref(false);
const miniState = ref(true);
const dark = ref($q.dark.isActive);
const expanded1 = ref(false);
const expanded2 = ref(false);
const link = ref('inbox');
const darkMode = (v) => {
  $q.dark.set(v);
}

</script>

<style lang="css">
.my-menu-link {
  color: white;
  background: #1976d2;
}
</style>
