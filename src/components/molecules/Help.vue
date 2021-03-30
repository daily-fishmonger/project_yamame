<template>
  <div class="help">
    <p class="help-title">遊び方</p>
    <div v-for="(item, index) in imgsTexts" :key="index" class="help-content">
      <div :class="[index % 2 ? 'help-item-reverse' : 'help-item']">
        <img class="help-img" :src="require(`../../assets/${item.img}`)" />
        <div class="help-description">
          <p class="help-item-title">{{ item.title }}</p>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Props } from '../story';

interface HelpContent {
  img: string;
  title: string;
  text: string;
}

export default defineComponent({
  name: 'Help',
  props: {
    label: {
      type: String as PropType<Props['label']>,
      required: true,
    },
    imgsTexts: {
      type: Array as PropType<HelpContent[]>,
      required: true,
      default: [
        {
          img: 'sample.png',
          title: 'サンプルタイトル',
          text:
            'サンプルテキストサンプル\nサンプルテキストサンプル\nサンプルテキストサンプル',
        },
        {
          img: 'sample.png',
          title: 'サンプルタイトル',
          text:
            'サンプルテキストサンプル\nサンプルテキストサンプル\nサンプルテキストサンプル',
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
  margin: 0 19px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.help-img {
  width: 100px;
  height: auto;
}
.help-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 35px;
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
</style>
