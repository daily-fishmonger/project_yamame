<template>
  <button v-if="!timerOn" @click="start">スタート</button>
  <div class="timer">
    <span
      class="fill"
      :style="{
        backgroundImage: `conic-gradient(${circleColor} 0% ${percent}%, #fff ${percent}% 100%)`,
      }"
    ></span>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'Timer',
  setup() {
    let sec = ref<number>(60);
    let timerOn = ref<boolean>(false);
    let timerObj = ref<number>(0);
    let circleColor = ref<string>('#61C092');
    let percent = ref<number>(100);
    const count = (): void => {
      sec.value--;
      percent.value = (sec.value / 60) * 100;
      if (percent.value <= 50 && percent.value > 25) {
        circleColor.value = '#F0E25E';
      } else if (percent.value <= 25) {
        circleColor.value = '#E3635B';
      }

      if (sec.value <= 0) {
        complete();
      }
    };
    const start = (): void => {
      timerObj.value = window.setInterval(() => {
        count();
      }, 1000);
      timerOn.value = true;
    };
    const complete = (): void => {
      clearInterval(timerObj.value);
    };
    return {
      sec,
      timerOn,
      timerObj,
      circleColor,
      percent,
      count,
      start,
      complete,
    };
  },
};
</script>

<style>
.timer {
  width: 54px;
  height: 65px;
  background-image: url('../../assets/img/timer.svg');
  position: relative;
}

.fill {
  position: absolute;
  border-radius: 50%;
  bottom: 7px;
  right: calc(50% - 20px);
  width: 40px;
  height: 40px;
}
</style>
