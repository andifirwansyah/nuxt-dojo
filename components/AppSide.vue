<template>
    <div class="h-screen fixed lg:bg-transparent bg-black bg-opacity-20" :class="isOpen ? 'w-full lg:w-0' : 'w-0'">
        <div class="w-[18.75rem] lg:pt-[10.5rem] pt-10 flex flex-col bg-white border-r h-screen fixed px-5 transition-all duration-150" :class="isOpen ? 'ml-0' : '-ml-[18.75rem]'">
            <div class="flex items-center space-x-2 menu-active rounded-lg px-3 py-3">
                <i class="ki-duotone ki-element-11 text-gray-700"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>
                <div class="text-sm text-slate-700">Dashboard</div>
            </div>
            <div class="flex items-center justify-between rounded-lg px-3 py-3">
                <div class="flex items-center space-x-2">
                    <i class="ki-duotone ki-wallet text-pink-600"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>
                    <div class="text-sm text-slate-700">Tagihan</div>
                </div>
                <i class="ki-duotone ki-down"></i>
            </div>
            <div class="flex items-center space-x-2 rounded-lg px-3 py-3">
                <i class="ki-duotone ki-profile-user text-blue-600"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>
                <div class="text-sm text-slate-700">Penghuni</div>
            </div>
            <div class="px-3 py-3 overflow-hidden relative">
                <div @click="isOpenSubMenu = !isOpenSubMenu" class="flex items-center justify-between rounded-lg cursor-pointer">
                    <div class="flex items-center space-x-2">
                        <i class="ki-duotone ki-abstract-26 text-green-600"><span class="path1"></span><span class="path2"></span></i>
                        <div class="text-sm text-slate-700">Manajemen Properti</div>
                    </div>
                    <i class="ki-duotone ki-down" :class="isOpenSubMenu ? 'rotate-180' : 'rotate-0'" ></i>
                </div>
                <ul class="pl-9 list-disc transition-all duration-100" :class="!isOpenSubMenu ? 'h-20' : 'h-0 invisible'">
                    <li class="text-sm text-slate-700 mt-3 cursor-pointer">Daftar Properti</li>
                    <li class="text-sm text-slate-700 mt-3 cursor-pointer">Daftar Pengelola</li>
                </ul>
            </div>
        </div>
        <div class="h-screen bg-transparent" :class="isOpen ? 'w-full lg:w-0' : 'hidden'" @click="$emit('sidebar-toggle')"></div>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue';
    const isOpenSubMenu = ref(false);
    defineProps({
        isOpen: Boolean,
    })
</script>