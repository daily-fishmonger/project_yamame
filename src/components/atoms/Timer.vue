<template>
  <div class="timer"><span class="fill"></span></div>
</template>

<script lang="ts">
export default {
  name: 'Timer',
  data() {
    return {
      sec: 59,
      timerOn: false,
      timerObj: 0,
    };
  },

  methods: {
    count: function () {
      if (this.sec <= 0) {
        this.complete();
      } else {
        this.sec--;
      }
    },
    // window: (onload = function () {
    //   let self = this;
    //   this.timerObj = window.setInterval(function () {
    //     self.count();
    //   }, 1000);
    //   this.timerOn = true;
    // }),
    complete: function () {
      clearInterval(this.timerObj);
    },
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
  background-image: conic-gradient(#d5525f 0% 25%, #fff 25% 100%);
  width: 40px;
  height: 40px;
}
</style>
