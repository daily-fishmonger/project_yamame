<template>
  <button type="button" :class="classes" @click="onClick">
    <close-icon v-if="iconType === 'close'" :size="size" />
    <home-icon v-else-if="iconType === 'home'" :size="size" />
    <pause-icon v-else-if="iconType === 'pause'" :size="size" />
    <restart-icon v-else-if="iconType === 'restart'" :size="size" />
    <resume-icon v-else-if="iconType === 'resume'" :size="size" />
    <twitter-icon v-else-if="iconType === 'twitter'" :size="size" />
    <hamburger-icon v-else-if="iconType === 'hamburger'" :size="size" />
  </button>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType, computed } from 'vue';
import CloseIcon from '../icons/CloseIcon.vue';
import HomeIcon from '../icons/HomeIcon.vue';
import PauseIcon from '../icons/PauseIcon.vue';
import RestartIcon from '../icons/RestartIcon.vue';
import ResumeIcon from '../icons/ResumeIcon.vue';
import TwitterIcon from '../icons/TwitterIcon.vue';
import HamburgerIcon from '../icons/HamburgerIcon.vue';
import { Classes, IconButtonColor, IconType, Props } from '../../story';

export default defineComponent({
  name: 'IconButton',
  components: {
    CloseIcon,
    HomeIcon,
    PauseIcon,
    RestartIcon,
    ResumeIcon,
    TwitterIcon,
    HamburgerIcon,
  },
  props: {
    size: {
      type: String as PropType<Props['size']>,
      default: 'medium',
    },
    color: {
      type: String as PropType<IconButtonColor>,
      default: 'primary',
    },
    iconType: {
      type: String as PropType<IconType>,
      required: true,
    },
  },
  emits: ['onClick'],
  setup(props, context: SetupContext) {
    const classes = computed(
      (): Classes => {
        return {
          'icon-btn': true,
          [`icon-btn--${props.size}`]: true,
          [`icon-btn--${props.color}`]: true,
        };
      }
    );
    const onClick = () => {
      context.emit('onClick');
    };
    return {
      classes,
      onClick,
    };
  },
});
</script>

<style scoped>
.icon-btn {
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  outline: none;
  border: 0;
  cursor: pointer;
}
.icon-btn--primary {
  background-color: #5151e3;
}
.icon-btn--secondary {
  background-color: #96c3ed;
}
.icon-btn--orange {
  background-color: #f9a441;
}
.icon-btn--small {
  height: 30px;
  width: 30px;
}
.icon-btn--medium {
  height: 40px;
  width: 40px;
}
.icon-btn--large {
  height: 50px;
  width: 50px;
}
</style>
