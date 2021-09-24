<template>
  <div class="game">
    <div class="header">
      <timer :is-active="isActive" @complete-timer="disposeGame" />
      <img src="@/assets/fish.png" height="42" width="120" class="fish" />
      <icon-button
        icon-type="pause"
        color="primary"
        size="large"
        @onClick="pauseButtonAction"
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
    const maxWidth = Math.min(window.innerWidth, 732);
    const maxHeight = Math.min(window.innerHeight, 898);
    const canvasSize = {
      height: maxHeight,
      width: maxWidth,
    };
    const startPos = {
      x: maxWidth / 2,
      y: maxHeight / 2,
    };
    const game = new Game(canvasSize, startPos);
    onMounted((): void => {
      const gameArea = document.getElementById('gameArea');
      if (!gameArea) return;

      gameArea.appendChild(game.screenCanvas);
      game.start();
    });

    let isActive = ref<boolean>(true);
    const _toggleIsActive = (): void => {
      isActive.value = !isActive.value;
    };
    const _pause = (): void => {
      // TODO: モーダルオープン処理
      game.pause();
    };
    const _restart = (): void => {
      // TODO: モーダルクローズ処理
      game.restart();
    };

    const pauseButtonAction = (): void => {
      _toggleIsActive();
      return game.isPaused ? _restart() : _pause();
    };

    const disposeGame = (): void => {
      game.pause();
    };

    return {
      isActive,
      pauseButtonAction,
      disposeGame,
    };
  },
});
</script>

<style scoped>
@import url('@/assets/css/reset');

.game {
  background-color: #96c3ed;
  height: 1024px;
  width: 768px;
  padding: 18px;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  min-height: 78px;
}
.game-area {
  display: block;
  border-radius: 12px;
  height: 1024px;
  width: 768px;
}
</style>
