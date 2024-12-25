<script setup lang="ts">
import HeaderPageTemplate from 'src/ui/layouts/HeaderPageTemplate.vue';
</script>
<template>
  <HeaderPageTemplate>
    <template #header>
      <div v-text="$t('famLink')" />
    </template>
    <template #page>
      <div />
    </template>
  </HeaderPageTemplate>
</template>

