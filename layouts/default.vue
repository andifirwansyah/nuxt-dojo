<template>
  <div>
      <app-header @sidebar-toggle="isSidebarOpen = !isSidebarOpen"/>
      <div class="flex">
        <app-side :isOpen="isSidebarOpen" @sidebar-toggle="isSidebarOpen = !isSidebarOpen"/>
        <div class="lg:ml-[18.75rem] ml-0 px-5 py-5 lg:pt-[10.5rem] pt-32">
          <slot/>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        isSidebarOpen: true
      }
    },
    mounted() {
      this.updateScreenWidth();
      this.onScreenResize();
    },
    methods: {
      onScreenResize() {
        window.addEventListener("resize", () => {
          this.updateScreenWidth();
        });
      },
      updateScreenWidth() {
        console.log(window.innerWidth);
        if(window.innerWidth <= 760){
          this.isSidebarOpen = false;
        }else{
          this.isSidebarOpen = true;
        }
      },
    },
  }
</script>