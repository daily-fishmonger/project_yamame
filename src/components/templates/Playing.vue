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
    <div class="game-area"></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import IconButton from '@/components/atoms/button/IconButton.vue';
import Timer from '@/components/atoms/timer/Timer.vue';

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
    return {
      isActive,
      pause,
    };
  },
});
</script>

<style scoped>
.game {
  background-color: #96c3ed;
  height: 812px;
  width: 376px;
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
  height: 680px;
  width: 340px;
}
.fish {
  margin: 0 58px;
}
</style>
