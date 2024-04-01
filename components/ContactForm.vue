<template>
<div class="justify-center md:w-3/4 mx-auto">
    <div class="bg-secondary-theme shadow">
        <div class="p-6 space-y-6">
            <form action="" class="flex flex-col items-center justify-center" id="contact" @submit="submitForm">
                <div class="flex flex-row gap-2">
                    <div class="mb-6 ">
                        <label for="first_name" class=" mb-2 text-sm font-medium text-white">First Name</label>
                        <input type="text" id="first_name" v-model="first_name" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="Enter First Name" required>
                    </div>
                    <div class="mb-6 ">
                        <label for="last_name" class="mb-2 text-sm font-medium text-white">Last Name</label>
                        <input type="text" id="last_name" v-model="last_name" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="Enter Last Name" required>
                    </div>
                </div>
                <div class="mb-6 w-full">
                    <label for="email" class="block mb-2 text-sm font-medium text-white">Email address</label>
                    <input type="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required>
                </div>
                <div class="mb-6 w-full">
                    <label for="phone_number" class="block mb-2 text-sm font-medium text-white">Phone Number</label>
                    <input type="tel" id="phone_number" v-model="phone_number" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="+234708990..." required>
                </div>

                <div class="mb-6 w-full">
                    <label for="demo_date" class="block mb-2 text-sm font-medium text-white">Available Date</label>
                    <div class="relative w-full">
                        <input type="date" id="demo_date" v-model="demo_date" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-w-full" placeholder="mm/dd/yyyy" required>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mb-6 w-full">
                    <label for="description" class="block mb-2 text-sm font-medium text-white ">Your message</label>
                    <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..." v-model="description"></textarea>
                </div>

                <button type="submit" class="btn w-full shadow border-2 border-black rounded-[5.06px] bg-primary-theme px-[8.6px] text-bold font-inter text-inter-base ">Request Demo</button>
            </form>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    StatusCode
} from '~/helpers/statusCodes';
import {
    useToast
} from 'vue-toastification'
const toast = useToast()

const {
    $services
} = useNuxtApp()

// const toast = toast.create();

const first_name = ref('');
const last_name = ref('');
const email = ref('');
const phone_number = ref('');
const demo_date = ref('');
const description = ref('');

const submitForm = async (event: Event) => {
    event.preventDefault();

    const contactData = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        phone_number: phone_number.value,
        demo_date: demo_date.value,
        description: description.value,
    }

    try {
        const result = await $services.contact.contact(contactData);
        if (result.code === StatusCode.SUCCESS) {
            toast.success(result.message)
            const form = document.getElementById('contact');
            if (form) {
                form.reset();
            }
            return;
        }
    } catch (error) {
        const err = error.response.data.body
        alert(err)
    }
}
</script>
