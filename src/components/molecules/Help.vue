<template>
  <div class="help">
    <p class="help-title">遊び方</p>
    <div v-for="(item, index) in imgsTexts" :key="index" class="help-content">
      <div :class="[index % 2 ? 'help-item-reverse' : 'help-item']">
        <img :src="require(`../../assets/${item.img}`)" />
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ImgText } from '@/components/story';

export default defineComponent({
  name: 'Help',

  props: {
    label: {
      type: String,
      required: true,
    },
    imgsTexts: {
      type: Array as PropType<ImgText[]>,
      required: true,
      default: [
        {
          img: 'logo.png',
          title: 'サンプルタイトル',
          text:
            'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
        },
        {
          img: 'logo.png',
          title: 'サンプルタイトル',
          text:
            'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
        },
      ],
    },
  },

  setup() {
    return {};
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
  height: 305px;
}
.help-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 35px;
}
.help-content {
  width: 270px;
  height: 135px;
}
.help-item {
  display: flex;
  height: 100%;
}
.help-item-reverse {
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
}
</style>
