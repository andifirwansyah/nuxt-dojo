<template>
    <div>
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
        </div>
        <div class="ml-0 px-7 py-7 lg:pt-[5.3rem] pt-20 bg-background w-full h-screen">
          <slot/>
        </div>
    </div>
  </template>