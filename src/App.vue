<template>
  <div />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Game from '@/libs/game';

export default defineComponent({
  setup() {
    onMounted((): void => {
      const GameComponent = new Game(
        {
          height: Math.min(window.innerHeight, 1024),
          width: Math.min(window.innerWidth, 768),
        },
        {
          x: 0,
          y: 100,
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
