<template>
  <div class="game">
    <div class="header">
      <timer :is-active="isActive" />
      <img src="@/assets/fish.png" height="42" width="120" class="fish" />
      <icon-button
        icon-type="pause"
        color="primary"
        size="large"
        @onClick="pause"
      />
    </div>
    <div id="gameArea" class="game-area"></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import IconButton from '@/components/atoms/button/IconButton.vue';
import Timer from '@/components/atoms/timer/Timer.vue';
import Game from '@/libs/game';

export default defineComponent({
  name: 'Playing',
  components: {
    IconButton,
    Timer,
  },
  setup() {
    let isActive = ref<boolean>(true);
    const pause = (): void => {
      // TODO: モーダル表示させる処理
      isActive.value = !isActive.value;
    };
    onMounted((): void => {
      // headerとfooterの高さを引いたものにする
      const maxWidth = Math.min(window.innerWidth, 768);
      const maxHeight = Math.min(window.innerHeight, 1024);

      const gameArea = document.getElementById('gameArea');
      if (!gameArea) return;

      const game = new Game(
        {
          height: maxHeight,
          width: maxWidth,
        },
        {
          x: maxWidth / 2,
          y: maxHeight / 2,
        }
      );
      gameArea.appendChild(game.screenCanvas);

      game.start();
    });
    return {
      isActive,
      pause,
    };
  },
});
</script>

<style scoped>
@import url('../../assets/css/reset.css');

canvas {
  display: block;
  margin: auto;
}
.game {
  background-color: #96c3ed;
  height: 1024px;
  width: 768px;
  padding: 18px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.game-area {
  display: block;
  margin: 12px auto;
  background-color: white;
  border-radius: 12px;
  height: 1024px;
  width: 768px;
}
.fish {
  margin: 0 58px;
}
</style>
