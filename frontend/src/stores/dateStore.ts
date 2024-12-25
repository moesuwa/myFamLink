import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { date as dateUtils } from 'quasar';
import { useI18n } from 'boot/i18n'
const { t } = useI18n()

export const useDateStore = defineStore('dateStore', () => {

  const now = ref(new Date());

  const update = () => {
    now.value = new Date();
  }

  const today = computed(() => dateUtils.formatDate(now.value, t('date', {year: 'YYYY', month: 'MM', day: 'DD'})));

  return {
    today,
    update,
  }
})
