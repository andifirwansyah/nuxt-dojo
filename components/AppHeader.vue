<template>
    <div class="fixed w-full lg:z-50 z-0">
        <div class="bg-header-primary px-7 h-[3.75rem] flex items-center justify-between">
            <div class="flex items-center">
                <button @click="$emit('sidebar-toggle')" class="bg-[rgba(255,255,255,.16)] w-[36px] h-[36px] rounded-lg lg:hidden flex items-center justify-center mr-3">
                    <i class="ki-duotone ki-abstract-14 text-white text-lg"><span class="path1"></span><span class="path2"></span></i>
                </button>
                <!-- <img src="https://preview.keenthemes.com/metronic8/demo60/assets/media/logos/demo60.svg" alt="" /> -->
                <img src="~/assets/images/logo.png" class="w-36" alt="" />
            </div>
            <!-- <img src="~/assets/images/logo.png" class="w-24" alt="" /> -->
            <div class="flex items-center">
                <div class="bg-[rgba(255,255,255,.16)] w-[36px] h-[36px] rounded-lg flex items-center justify-center mr-3">
                    <i class="ki-duotone ki-notification-status text-white text-lg">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                        <span class="path4"></span>
                    </i>
                </div>
                <div class="bg-[rgba(255,255,255,.16)] w-[36px] h-[36px] rounded-lg flex items-center justify-center mr-3">
                    <i class="ki-duotone ki-category text-white text-lg">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                        <span class="path4"></span>
                    </i>
                </div>
                <div class="relative group">
                    <img src="https://preview.keenthemes.com/metronic8/demo60/assets/media/avatars/300-2.jpg" class="w-[36px] h-[36px] cursor-pointer rounded-[0.7rem]" alt="" />
                    <div class="bg-white w-[16rem] py-5 right-0 rounded-lg shadowcs absolute invisible transition duration-300 translate-y-3 z-0 group-hover:z-10 group-hover:visible group-hover:translate-y-0">
                        <div class="flex items-center px-5 mb-5">
                            <img src="https://preview.keenthemes.com/metronic8/demo60/assets/media/avatars/300-2.jpg" class="w-12 h-w-12 rounded-lg" alt="">
                            <div class="px-2">
                                <div class="font-medium">Ana Fox <span class="bg-green-500 bg-opacity-20 text-green-500 px-1.5 py-0.5 font-medium text-xs rounded-lg">Pro</span> </div>
                                <div class="text-xs text-slate-400">ana@nio.com</div>
                            </div>
                        </div>
                        <div class="flex-grow border-t border-gray-100"></div>
                        <div class="px-5 pt-2">
                            <div class="text-[0.9rem] text-slate-600 py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-50 hover:text-primary">
                                <NuxtLink to="/profile">
                                    My Profile
                                </NuxtLink>
                            </div>
                            <div class="text-[0.9rem] text-slate-600 py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-50 hover:text-primary">Sign Out</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-header-secondary xl:pt-1.5 pt-0">
            <div class="px-7 hidden lg:flex items-center justify-between">
                <div class="flex items-center">
                    <div class="h-9 flex items-center -mt-1 justify-center rounded-t-lg bg-white">
                        <span class="text-black font-normal px-5 text-[13px]">Beranda</span>
                    </div>
                    <div class="h-9 flex items-center -mt-1 justify-center cursor-pointer rounded-t-lg bg-none">
                        <span class="text-white font-normal px-5 border-r-[#b14d34] border-r text-[13px]">Projects</span>
                    </div>
                    <div class="h-9 flex items-center -mt-1 justify-center cursor-pointer rounded-t-lg bg-none">
                        <span class="text-white font-normal px-5 border-r-[#b14d34] border-r text-[13px]">Customers</span>
                    </div>
                    <div class="h-9 flex items-center -mt-1 justify-center cursor-pointer group rounded-t-lg bg-none">
                        <NuxtLink to="/stepper">
                            <div class="px-5 flex items-center justify-center">
                                <i class="ki-outline ki-plus mr-1.5 text-white group-hover:text-primary"></i>
                                <span class="text-white font-normal text-[13px]">Buat Baru</span>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="h-9 flex items-center relative group -mt-1 rounded-t-lg bg-none cursor-pointer">
                        <div class="flex items-center justify-center">
                            <img src="~/assets/images/indonesia.png" class="w-5 mr-2" alt="">
                            <span class="text-white font-normal text-[13px]">ID</span>
                            <i class="ki-duotone ki-down ml-2 text-white"></i>
                        </div>
                        <div class="bg-white w-[10rem] py-5 right-0 rounded-lg shadowcs absolute invisible transition duration-300 translate-y-20 z-0 group-hover:z-10 group-hover:visible group-hover:translate-y-16">
                            <div class="px-5 space-y-4">
                                <div class="flex items-center">
                                    <img src="~/assets/images/indonesia.png" class="w-5 mr-2 border border-gray-200 rounded-full" alt="">
                                    <span class="text-slate-700 font-normal text-[13px]">ID (Indonesia)</span>
                                </div>
                                <div class="flex items-center">
                                    <img src="~/assets/images/english.png" class="w-5 mr-2 border border-gray-200 rounded-full" alt="">
                                    <span class="text-slate-700 font-normal text-[13px]">EN (English)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white py-2 px-7 border-b">
                <div class="flex items-center space-x-2">
                    <div class="flex items-center justify-center px-2.5 py-1.5 rounded-lg border border-gray-100 bg-gray-50">
                        <i class="ki-duotone ki-element-9 text-primary mr-2"><span class="path1"></span><span class="path2"></span></i>
                        <span class="text-sm text-slate-500">Paket Basic</span>
                    </div>
                    <div class="flex items-center justify-center px-2.5 py-1.5">
                        <i class="ki-duotone ki-grid text-slate-500 mr-2"><span class="path1"></span><span class="path2"></span></i>
                        <span class="text-sm text-slate-500">Bantuan</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>