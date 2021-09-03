<template>
  <div class="help" @click="contractImg">
    <p class="help-title">遊び方</p>
    <div class="help-contents">
      <div
        v-for="(item, index) in helpContents"
        :key="index"
        class="help-content"
      >
        <div :class="[index % 2 ? 'help-item-reverse' : 'help-item']">
          <img
            class="help-img"
            :src="item.img"
            @click.stop="expandImg(index)"
          />
          <div class="help-description">
            <p class="help-item-title">{{ item.title }}</p>
            <p>{{ item.text }}</p>
          </div>
        </div>
        <img
          v-show="index === activeImgOrder"
          class="help-img-expanded"
          :src="item.img"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Props } from '../../story';

type HelpContent = {
  img: string;
  title: string;
  text: string;
};

export default defineComponent({
  name: 'Help',
  props: {
    label: {
      type: String as PropType<Props['label']>,
      required: true,
    },
    helpContents: {
      type: Array as PropType<HelpContent[]>,
      required: true,
    },
  },
  setup() {
    const activeImgOrder = ref<number>(-1);
    const expandImg = (index: number) => {
      activeImgOrder.value = index;
    };
    const contractImg = () => {
      activeImgOrder.value = -1;
    };
    return {
      activeImgOrder,
      expandImg,
      contractImg,
    };
  },
});
</script>

<style scoped>
.help {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  margin: 0 19px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.help-img {
  width: 100px;
  height: auto;
  cursor: pointer;
}
.help-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 35px;
}
.help-contents {
  position: relative;
}
.help-content {
  margin: 23px 0 22px;
}
.help-item {
  display: flex;
  height: 100%;
}
.help-item-title {
  margin-bottom: 10px;
  font-size: 14px;
}
.help-description {
  font-size: 12px;
}
.help-item .help-description {
  margin: 8px 0 0 15px;
}
.help-item .help-item-title {
  text-align: left;
}
.help-item-reverse {
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
}
.help-item-reverse .help-description {
  margin: 8px 15px 0 0;
}
.help-item-reverse .help-item-title {
  text-align: right;
}
.help-img-expanded {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: auto;
  filter: drop-shadow(3px 3px 6px #000000);
  cursor: pointer;
}
</style>
