<template>
    <div class="flex lg:flex-row flex-col items-center w-screen lg:h-screen bg-container">
        <div class="flex flex-col items-center justify-center h-full">
            <img src="~/assets/images/agency.png" class="lg:w-72 w-40 lg:mt-0 mt-8" alt="">
            <h2 class="lg:text-3xl text-2xl text-gray-800 font-medium mt-10">Fast, Efficient and Productive</h2>
            <p class="text-sm text-gray-500 text-center lg:mx-52 mx-10 mt-5">In this kind of post, the <span class="text-primary">blogger</span> introduces a person they’ve interviewed and provides some background information about <span class="text-primary">the interviewee</span> and their work following this is a transcript of the interview.</p>
        </div>
        <div class="p-12 lg:h-screen h-auto">
            <div class="lg:w-[37.5rem] w-[27.5rem] flex flex-col items-center justify-center bg-white h-full rounded-2xl lg:px-24 px-10 py-10">
                <div class="text-gray-800 text-xl text-center font-semibold">Sign In</div>
                <p class="text-sm text-gray-400 mt-1.5 text-center">Your Social Campaigns</p>
                <div class="flex lg:flex-row w-full flex-col items-center justify-center space-x-0 space-y-2 lg:space-y-0 lg:space-x-3 mt-8">
                    <button class="flex items-center justify-center border w-full px-3 py-2.5 rounded-lg group hover:bg-gray-50">
                        <img src="~/assets/images/google-icon.svg" class="w-4 h-4" alt="">
                        <div class="text-sm ml-2.5 text-gray-600 transition-all duration-200 group-hover:text-primary">Sign in with Google</div>
                    </button>
                    <button class="flex items-center justify-center border w-full px-3 py-2.5 rounded-lg group hover:bg-gray-50">
                        <img src="~/assets/images/facebook-icon.svg" class="w-4 h-4" alt="">
                        <div class="text-sm ml-2.5 text-gray-600 transition-all duration-200 group-hover:text-primary">Sign in with Facebook</div>
                    </button>
                </div>
                <div class="flex items-center justify-center my-10">
                    <div class="w-full border border-gray-100"></div>
                    <div class="text-center w-80 text-xs text-gray-400">Or with email</div>
                    <div class="w-full border border-gray-100"></div>
                </div>
                <div class="w-full">
                    <input type="text" class="border rounded-lg px-3 h-[2.724rem] mb-6 text-gray-700 text-[0.9rem] appearance-none focus:outline-none focus:border-gray-300 w-full" placeholder="Email">
                    <input type="text" class="border rounded-lg px-3 h-[2.724rem] mb-2.5 text-gray-700 text-[0.9rem] appearance-none focus:outline-none focus:border-gray-300 w-full" placeholder="Password">
                    <div class="w-full flex justify-end">
                        <button class="text-primary text-[0.85rem]">Forgot Password ?</button>
                    </div>
                    <button @click="onLogin" :disabled="loading" class="bg-primary rounded-lg h-[2.724rem] w-full transition-colors duration-200 mt-6 disabled:bg-gray-400 hover:bg-primary-dark">
                        <div v-if="!loading" class="text-white text-sm">Sign In</div>
                        <i v-if="loading" class="ki-duotone ki-loading animate-spin text-2xl text-white">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </button>
                    <div class="text-sm text-gray-400 text-center mt-6">Not a Member yet? <span class="text-primary-dark cursor-pointer">Sign Up</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'unauthorized'
})
const loading = ref(false);

function onLogin(){
    loading.value = true;
    setTimeout(async () => {
        loading.value = false;
        await navigateTo({ path: '/' })
    }, 2000)
}
</script>
<style scoped>
    .bg-container {
        background-image: url(~/assets/images/bg10.jpg); 
        background-attachment: fixed; 
        background-size: cover;
        background-position: center;
    }
</style>