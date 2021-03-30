<template>
  <div class="button-list">
    <icon-button
      :icon-type="'home'"
      :color="'secondary'"
      @click="handleClickHome"
    />
    <icon-button
      :icon-type="'restart'"
      :color="'secondary'"
      @click="handleClickRestart"
    />
    <icon-button
      v-if="place === 'modal'"
      :icon-type="'resume'"
      :color="'orange'"
      @click="handleClickResume"
    />
    <icon-button
      v-else-if="place === 'result'"
      :icon-type="'twitter'"
      @click="handleClickTwitter"
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
  props: {
    place: {
      type: String as PropType<Place>,
      default: 'modal',
    },
  },
  setup(props, context) {
    const handleClickHome = () => {
      context.emit('home');
    };
    const handleClickRestart = () => {
      context.emit('restart');
    };
    const handleClickResume = () => {
      context.emit('resume');
    };
    const handleClickTwitter = () => {
      context.emit('twitter');
    };
    return {
      handleClickHome,
      handleClickRestart,
      handleClickResume,
      handleClickTwitter,
    };
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
