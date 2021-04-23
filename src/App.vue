<template>
  <GameComponent />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Game from '@/libs/game';

export default defineComponent({
  setup() {
    const GameComponent = new Game(
      {
        height: 400,
        width: 300,
      },
      {
        x: 100,
        y: 250,
      }
    );
    onMounted((): void => {
      document.body.appendChild(GameComponent.screenCanvas);
      GameComponent.start();
    });
    return {
      GameComponent,
    };
  },
});
</script>

<style></style>
