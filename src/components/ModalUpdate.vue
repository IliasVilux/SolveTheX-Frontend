<template>
  <div v-if="isVisible">
    <div class="fixed flex inset-0 z-50 justify-center items-center">
      <div class="flex flex-col max-w-5xl rounded shadow-lg bg-white">
      <!-- HEADER -->
        <div class="p-5">
          <div class="flex justify-between items-start">
            <h1 class="text-2xl font-semibold">{{ prenda.name }}</h1>
            <button class="p-1 leading-none" @click="isntVisible">
              <div class="text-lg font-semibold h-6 w-6">X</div>
            </button>
          </div>
        </div>
      <!-- CONTENT -->
        <div class="p-6">
          <form class="space-y-6" action="#">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input v-model="prenda.name" type="string" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div>
              <label for="desciption" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desciption</label>
              <textarea rows="6" cols="50" :value="prenda.description" name="desciption" id="desciption" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              </textarea>
            </div>
            <div>
              <label for="imgURL" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
              <input type="string" name="imgURL" id="imgURL" :value="prenda.imgURL" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div>
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
              <input type="number" step="0.01" name="price" id="price" :value="prenda.price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div class="flex justify-end items-center">
              <button class="mx-5 rounded text-white bg-sky-500 border border-slate-200 h-10 px-6" @click="isntVisible">Cancel</button>
            </div>
          </form>
              <button class="rounded border border-slate-200 h-10 px-6" @click="update">Submit</button>
        </div>
      </div>
    </div>

    <div class="opacity-25 bg-black fixed inset-0 z-40"></div>
  </div>
</template>

<script>
import PrendasService from "../services/PrendasService"

export default {
  name: "Modal",
  data() {
    return {
      prenda: [this.prenda],
    };
  },
  props: [
    'isVisible',
    'prenda'
  ],
  methods: {
    isntVisible(){
      this.$emit('cancel')
    },
    async update(){
      if(this.prenda.name != null && this.prenda.imgURL != null && this.prenda.price != null){
        return await PrendasService.updatePrenda(this.prenda);
      }
    }
  }
};
</script>