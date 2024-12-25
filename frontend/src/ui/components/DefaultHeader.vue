<script setup lang="ts">
import { useDateStore } from 'src/stores/dateStore'
const dateStore = useDateStore()
</script>
<template>
  <q-header elevated class="bg-secondary">
    <q-toolbar class="flex justify-between">
      <div v-text="$t('famLink')" class="text-title" />
      <div v-text="dateStore.today" class="text-date" />
    </q-toolbar>
  </q-header>
</template>
<style scoped lang="scss">
@mixin default-header-text($font-size) {
  font-size: $font-size;
  color: white;
  margin: 0 2rem;
  font-weight: bold;
}
.text-title {
  @include default-header-text(2.3rem);
}
.text-date {
  @include default-header-text(1.3rem);
}
</style>
