<template>
  <div class="button-list">
    <icon-button
      :icon-type="'home'"
      :color="'secondary'"
      :size="'medium'"
      @click="onClick"
    />
    <icon-button
      :icon-type="'restart'"
      :color="'secondary'"
      :size="'medium'"
      @click="onClick"
    />
    <icon-button
      v-if="place === 'modal'"
      :icon-type="'resume'"
      :size="'medium'"
      :color="'orange'"
    />
    <icon-button
      v-else-if="place === 'result'"
      :icon-type="'twitter'"
      :size="'medium'"
      :color="'primary'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IconButton from '../../atoms/button/IconButton.vue';
type Place = 'modal' | 'result';

export default defineComponent({
  name: 'ButtonList',
  components: {
    IconButton,
  },
  emits: ['onClick'],
  props: {
    place: {
      type: String as PropType<Place>,
      default: 'modal',
    },
  },
});
</script>

<style scoped>
.button-list {
  display: inline-grid;
  grid-auto-flow: column;
  gap: 8px;
}
</style>
