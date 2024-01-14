<template>
  <div>
      <app-header @sidebar-toggle="isSidebarOpen = !isSidebarOpen"/>
      <div class="flex">
        <app-side :isOpen="isSidebarOpen" @sidebar-toggle="isSidebarOpen = !isSidebarOpen"/>
        <div class="lg:ml-[18.75rem] ml-0 px-7 py-7 lg:pt-[11.3rem] pt-32 bg-background w-full h-screen">
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