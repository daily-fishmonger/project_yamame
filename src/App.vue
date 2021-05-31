<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Game from '@/libs/game';

export default defineComponent({
  setup() {
    onMounted((): void => {
      // headerとfooterの高さを引いたものにする
      const maxWidth = Math.min(window.innerWidth, 768);
      const maxHeight = Math.min(window.innerHeight, 1024);
      const GameComponent = new Game(
        {
          height: maxHeight,
          width: maxWidth,
        },
        {
          x: maxWidth / 2,
          y: maxHeight / 2,
        }
      );

      document.body.appendChild(GameComponent.screenCanvas);
      GameComponent.start();
    });
  },
});
</script>

<style>
@import url('@/assets/css/reset');
canvas {
  display: block;
  margin: auto;
}
</style>
