<template>
  <div>
    <div ref="helpRef" class="helplist-slide">
      <help
        v-for="(helpContents, index) in helpList"
        v-show="index === activeCount"
        :key="index"
        :help-contents="helpContents"
      />
    </div>
    <carousel-dot-list
      :total-count="helpList.length"
      :active-count="activeCount"
      @updateActiveCount="emitUpdateActiveCount"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from 'vue';
import { HelpPage } from '../../story';
import Help from '../../molecules/help/Help.vue';
import CarouselDotList from '../../molecules/CarouselDotList.vue';

export default defineComponent({
  name: 'HelpList',
  components: {
    Help,
    CarouselDotList,
  },
  props: {
    helpList: {
      type: Array as PropType<HelpPage[]>,
      required: true,
    },
  },
  setup(props) {
    const activeCount = ref(0);

    const helpRef = ref<HTMLDivElement>();

    const swipeListener = (ref: HTMLDivElement): void => {
      let initX = 0;
      let lastX = 0;
      ref.addEventListener('touchstart', (event: TouchEvent) => {
        initX = event.changedTouches[0].pageX;
      });
      ref.addEventListener('touchend', (event: TouchEvent) => {
        lastX = event.changedTouches[0].pageX;
        if (lastX < initX && props.helpList.length - 1 > activeCount.value) {
          activeCount.value++;
        } else if (
          lastX > initX &&
          props.helpList.length - 1 <= activeCount.value
        ) {
          activeCount.value--;
        }
      });
    };

    const emitUpdateActiveCount = (value: number) => {
      activeCount.value = value;
    };

    onMounted(() => {
      if (helpRef.value) {
        swipeListener(helpRef.value);
      }
    });

    return {
      helpRef,
      activeCount,
      emitUpdateActiveCount,
    };
  },
});
</script>
