<template>
  <div class="base">
    <div v-if="page === 'start'" class="container">
      <h1>魚屋の日常</h1>
      <text-button label="スタート！" @onClick="handleClickStart" />
    </div>
    <div v-if="page === 'result'" class="container">
      <button-list
        place="result"
        @handleClickHome="handleClickHome"
        @handleClickRestart="handleClickRestart"
        @handleClickTwitter="handleClickTwitter"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from 'vue';
import { Pages } from '../story';
import TextButton from '../atoms/button/TextButton.vue';
import ButtonList from '../molecules/button-list/ButtonList.vue';

export default defineComponent({
  name: 'StartResult',
  components: {
    TextButton,
    ButtonList,
  },
  props: {
    page: {
      type: String as PropType<Pages>,
      required: true,
    },
  },
  emits: ['start', 'home', 'restart', 'twitter'],
  setup(_, context: SetupContext) {
    const handleClickStart = (): void => {
      context.emit('start');
    };
    const handleClickHome = () => {
      context.emit('home');
    };
    const handleClickRestart = () => {
      context.emit('restart');
    };
    const handleClickTwitter = () => {
      context.emit('twitter');
    };
    return {
      handleClickStart,
      handleClickHome,
      handleClickRestart,
      handleClickTwitter,
    };
  },
});
</script>

<style scoped>
.base {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: center / cover no-repeat url('../../assets/base.png');
}

.container {
  display: grid;
  gap: 20px;
}

h1 {
  font-size: 22px;
}
</style>
