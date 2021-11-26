<template>
  <div class="timer">
    <span
      class="fill"
      :style="{
        backgroundImage: `conic-gradient(${circleColor} 0deg ${deg}deg, #fff ${deg}deg 360deg)`,
      }"
    ></span>
    <img
      src="../../../assets/svg/hand.svg"
      alt="hand"
      class="hand"
      :style="{
        transform: `rotate(${deg}deg)`,
      }"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
export default defineComponent({
  name: 'Timer',
  setup() {
    let sec = ref<number>(60);
    let timerOn = ref<boolean>(false);
    let timerObj = ref<number>(0);
    let circleColor = ref<string>('#61C092');
    let deg = ref<number>(0);
    const count = (): void => {
      sec.value--;
      deg.value = (sec.value / 60) * 360;
      if (deg.value <= 180 && deg.value > 90) {
        circleColor.value = '#F0E25E';
      } else if (deg.value <= 90) {
        circleColor.value = '#E3635B';
      }

      if (sec.value <= 0) {
        complete();
      }
    };
    onMounted((): void => {
      timerObj.value = window.setInterval(() => {
        count();
      }, 1000);
      timerOn.value = true;
    });
    const complete = (): void => {
      clearInterval(timerObj.value);
    };
    return {
      sec,
      timerOn,
      timerObj,
      circleColor,
      count,
      deg,
      complete,
    };
  },
});
</script>

<style>
.timer {
  width: 54px;
  height: 65px;
  background-image: url('../../../assets/svg/timer.svg');
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

.hand {
  position: absolute;
  bottom: calc(50% - 6px);
  right: calc(50% - 3px);
  transform-origin: bottom;
  height: 21px;
}
</style>
