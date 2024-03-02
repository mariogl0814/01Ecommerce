<script lang="ts" setup>
    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    import NavigationComponent from '../components/NavigationComponent.vue'
</script>
  
<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <NavigationComponent></NavigationComponent>
    </div>
    <div>
        <slot name="main"></slot>
    </div>
    <div>
        <FooterComponent></FooterComponent>
    </div>
</template>
  
<style scoped>
  
</style>
  