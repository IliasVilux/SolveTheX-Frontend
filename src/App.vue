<template>
  <div class="flex flex-row-reverse w-11/12 mt-20">
    <button class="w-40 h-9 my-5 rounded border border-slate-200"
      type="button"
      data-modal-toggle="defaultModal"
      @click="modalVisible = true">Create garment</button>
  </div>
  <ModalCreate :isVisible="modalVisible" @cancel="modalVisible = false"/>
  <Ropa />
</template>

<script lang="ts">
import Ropa from "./components/Ropa.vue";
import ModalCreate from "./components/ModalCreate.vue";
export default {
  name: "App",
  data(){
    return {
      modalVisible: false,
    }
  },
  components: {
    Ropa,
    ModalCreate,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
