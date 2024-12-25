<script setup lang="ts">
import DefaultHeader from 'src/ui/components/DefaultHeader.vue';
import DefaultPage from 'src/ui/components/DefaultPage.vue';
</script>
<template>
  <q-layout view="hHh lpr fFf">
    <DefaultHeader>
      <slot name="header" />
    </DefaultHeader>
    <DefaultPage>
      <slot name="page" />
    </DefaultPage>
  </q-layout>
</template>
