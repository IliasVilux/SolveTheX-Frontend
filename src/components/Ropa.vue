<template>
  <ModalUpdate :isVisible="modalVisibleUpdate" :prenda="idUpdate" @cancel="modalVisibleUpdate = false"/>
  <div class="home">
    <div v-for="prenda in prendas">
      <div class="flex font-sans w-5/6 mx-auto mt-5">
        <div class="flex-none w-52 relative">
          <img
            :src="prenda.imgURL"
            alt=""
            class="rounded"
          />
        </div>
        <form class="flex-auto p-6">
          <div>
            <h1 class="text-lg font-semibold">
            {{ prenda.name }}
            </h1>
            <p class="mt-5">{{ prenda.description }}</p>
            <p class="mt-5">Precio: <span class="font-semibold">{{ prenda.price }}€</span></p>
          </div>
          <div class="flex mt-6 text-sm font-medium">
            <div class="flex-auto flex">
              <button
                class="
                  h-10
                  px-6
                  font-semibold
                  rounded
                  border border-slate-200
                  text-slate-900
                "
                type="button"
                @click="modalVisibleUpdate = true, idUpdate = prenda"
              >
                Update
              </button>
            </div>
            <button
              class="
                flex-none flex
                items-center
                justify-center
                w-12
                h-12
                rounded-md
                text-white
                border border-slate-200
                bg-gray-800
              "
              type="button"
              aria-label="Trash"
              @click="deletePrenda(prenda.id)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PrendasService from "../services/PrendasService"
import ModalUpdate from "../components/ModalUpdate.vue"

export default {
  name: "Ropa",
  data() {
    return {
      prendas: [],
      modalVisibleUpdate: false,
      idUpdate: Int16Array,
    };
  },
  components: {
    ModalUpdate,
  },
  methods: {
    async getPrendas() {
      const response = await PrendasService.getPrendas();
      this.prendas = response.data;
    },
    async deletePrenda(id){
      await PrendasService.deletePrenda(id)
    }
  },
  created() {
    this.getPrendas();
  }
};
</script>