<template>
  <div v-if="isVisible">
    <div class="fixed flex inset-0 z-50 justify-center items-center">
      <div class="flex flex-col max-w-5xl rounded shadow-lg bg-white">
      <!-- HEADER -->
        <div class="p-5">
          <div class="flex justify-between items-start">
            <h1 class="text-2xl font-semibold">Add new product</h1>
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
              <input v-model="addPrenda.name" type="string" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div>
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">description</label>
              <textarea v-model="addPrenda.description" rows="4" cols="50" name="description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              </textarea>
            </div>
            <div>
              <label for="imageURL" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
              <input v-model="addPrenda.imgURL" type="string" name="imageURL" id="imageURL" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div>
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
              <input v-model="addPrenda.price" type="number" step="0.01" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div class="flex justify-end items-center">
              <button class="mx-5 rounded text-white bg-sky-500 border border-slate-200 h-10 px-6" @click="isntVisible">Cancel</button>
              <button class="rounded border border-slate-200 h-10 px-6" @click="addGarment">Submit</button>
            </div>
          </form>
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
      addPrenda: {
        name: null,
        description: null, 
        imgURL: null,
        price: null
      }
    }
  },
  props: [
    'isVisible'
  ],
  methods: {
    isntVisible(){
      this.$emit('cancel')
    },
    async addGarment(){
      if(this.addPrenda.name != null && this.addPrenda.imgURL != null && this.addPrenda.price != null){
        return await PrendasService.addPrenda(this.addPrenda);
      }
    }
  }
};
</script>