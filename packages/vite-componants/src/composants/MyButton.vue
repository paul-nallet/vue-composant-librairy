<template>
    <button :class="button" @click="visible = !visible">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { button } from './MyButton.css'
import { sprinkles } from '../main';
import { ref } from 'vue';
const visible = ref(true); 
</script>
