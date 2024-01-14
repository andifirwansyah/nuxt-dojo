<template>
    <div>
        <div class="lg:w-9/12 w-full mx-auto min-h-[10rem] bg-white border border-gray-100 rounded-2xl">
            <div class="px-5 py-6 border-b border-gray-100">
                <ul class="relative flex flex-row gap-x-2">
                    <li v-for="(item, index) in items" :key="index" class="group" :class="index !== items.length - 1 ? 'shrink basis-0 flex-1' : ''">
                        <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                            <span :class="active === index ? 'bg-primary bg-opacity-10' : 'bg-gray-200'" class="w-10 h-10 flex justify-center items-center flex-shrink-0 font-medium rounded-full">
                                <i :class="[item.icon, active === index ? 'text-primary' : 'text-gray-500']" class="text-2xl">
                                    <span v-for="path in item.path" :key="path" :class="'path'+path"></span>
                                </i>
                            </span>
                            <div class="ms-2 w-full h-px bg-gray-200 flex-1 group-last:hidden"></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="w-full px-10 py-5">
                <div class="text-slate-700 font-medium text-lg">Buat Event Baru!</div>
            </div>

            <div class="px-5 py-5 border-t border-gray-100 flex justify-between space-x-2">
                <button :disabled="active === 0" @click="active -= 1" class="bg-gray-100 rounded-lg h-[2.5rem] flex items-center space-x-2 justify-center px-5 transition-colors duration-200 disabled:bg-gray-400 group hover:bg-primary hover:bg-opacity-5">
                    <i class="ki-duotone ki-arrow-left group-disabled:text-slate-700 text-slate-700 group-hover:text-primary"><span class="path1"></span> <span class="path2"></span> </i>
                    <div class="text-slate-700 group-disabled:text-slate-700 group-hover:text-primary text-sm">Sebelumnya</div>
                </button>
                <button @click="onNext" class="bg-primary rounded-lg h-[2.5rem] flex items-center space-x-2 justify-center px-5 transition-colors duration-200 disabled:bg-gray-400 hover:bg-primary-dark">
                    <div class="text-white text-sm">Selanjutnya</div>
                    <i class="ki-duotone ki-arrow-right text-white"><span class="path1"></span> <span class="path2"></span> </i>
                </button>
            </div>
        </div>

    </div>
</template>
<script setup>
definePageMeta({
    layout: 'stepper'
})

const items = [
    {
        icon: 'ki-duotone ki-abstract-28',
        path: 2
    },
    {
        icon: 'ki-duotone ki-profile-user',
        path: 4
    },
    {
        icon: 'ki-duotone ki-calendar-8',
        path: 6
    },
    {
        icon: 'ki-duotone ki-abstract-36',
        path: 2
    },
]
const active = ref(0);

const onNext = () => {
    if(active.value >= items.length -1){
        alert('Done')
        return
    }
    active.value += 1
}
</script>