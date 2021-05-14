<template>
  <div />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Game from '@/libs/game';

export default defineComponent({
  setup() {
    onMounted((): void => {
      const maxWidth = Math.min(window.innerWidth, 768);
      const GameComponent = new Game(
        {
          height: Math.min(window.innerHeight, 1024),
          width: maxWidth,
        },
        {
          x: maxWidth / 2,
          y: 300,
        }
      );

      document.body.appendChild(GameComponent.screenCanvas);
      GameComponent.start();
    });
  },
});
</script>

<style>
@import url('@/assets/css/reset');
</style>
