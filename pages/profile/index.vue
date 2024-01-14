<template>
    <div>
        <div class="mb-10">
            <div class="text-black font-semibold text-lg">Account Overview</div>
            <div class="flex items-center text-xs font-medium">
                <div class="text-gray-400">Home</div>
                <div class="text-gray-400 mx-1">-</div>
                <div class="text-gray-400">Account</div>
            </div>
        </div>

        <div class="w-full bg-white border border-gray-100 rounded-2xl">
            <div class="px-5 py-5 border-b border-gray-100">
                <div class="text-black font-medium text-lg">Profile Details</div>
            </div>
            <div class="px-5 py-5">
                <div class="flex lg:flex-row flex-col">
                    <div class="lg:w-2/3 w-full lg:mb-0 mb-2">
                        <label class="text-slate-700 text-sm">Foto Profile</label>
                    </div>
                    <div class="w-full">
                        <div class="w-32 bg-white p-1 rounded-lg shadowcs relative">
                            <img src="https://preview.keenthemes.com/metronic8/demo60/assets/media/avatars/300-1.jpg" class="w-32 rounded-lg" alt="">
                            <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center shadowcs cursor-pointer hover:text-primary absolute -top-2 -right-2">
                                <i class="ki-outline ki-pencil fs-7"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex lg:flex-row flex-col items-center mt-8">
                    <div class="lg:w-2/3 w-full lg:mb-0 mb-2">
                        <label class="text-slate-700 text-sm">Nama Lengkap</label>
                    </div>
                    <div class="w-full">
                        <input type="text" class="rounded-lg px-4 h-[2.724rem] text-gray-700 text-[0.9rem] bg-gray-50 appearance-none focus:outline-none w-full" placeholder="Nama Lengkap">
                    </div>
                </div>
                <div class="flex lg:flex-row flex-col items-center mt-8">
                    <div class="lg:w-2/3 w-full lg:mb-0 mb-2">
                        <label class="text-slate-700 text-sm">Alamat Email</label>
                    </div>
                    <div class="w-full">
                        <input type="text" class="rounded-lg px-4 h-[2.724rem] text-gray-700 text-[0.9rem] bg-gray-50 appearance-none focus:outline-none w-full" placeholder="Email">
                    </div>
                </div>
                <div class="flex lg:flex-row flex-col items-center mt-8">
                    <div class="lg:w-2/3 w-full lg:mb-0 mb-2">
                        <label class="text-slate-700 text-sm">No.Telepon</label>
                    </div>
                    <div class="w-full">
                        <input type="text" class="rounded-lg px-4 h-[2.724rem] text-gray-700 text-[0.9rem] bg-gray-50 appearance-none focus:outline-none w-full" placeholder="No.Telepon">
                    </div>
                </div>
            </div>
            <div class="px-5 py-5 border-t border-gray-100 flex justify-end space-x-2">
                <button class="bg-gray-100 rounded-lg h-[2.724rem] px-5 transition-colors duration-200 disabled:bg-gray-400 group hover:bg-primary hover:bg-opacity-5">
                    <div class="text-slate-700 group-hover:text-primary text-sm">Batal</div>
                </button>
                <button class="bg-primary rounded-lg h-[2.724rem] px-5 transition-colors duration-200 disabled:bg-gray-400 hover:bg-primary-dark">
                    <div class="text-white text-sm">Simpan</div>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'default'
})
</script>