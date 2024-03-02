<script setup>
import MainLayout from './layouts/MainLayout.vue'

import HeroComponent from '../src/components/HeroComponent.vue'
import CategoriaComponent from '../src/components/CategoriaComponent.vue'
import PrincipalComponent from '../src/components/PrincipalComponent.vue'
import NosotrosComponent from '../src/components/NosotrosComponent.vue'

</script>

<template>
  <MainLayout>
    <template #main>
      <router-view></router-view>
    </template>

  </MainLayout>
</template>

<style scoped></style>
