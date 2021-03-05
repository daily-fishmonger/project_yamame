<template>
  <button type="button" @click="onClick">スタート</button>
  <div class="timer"><span class="fill"></span></div>
</template>

<script lang="ts">
export default {
  name: 'Timer',

  emits: ['onClick'],

  methods: {
    onClick(): void {
      this.$emit('onClick');
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
