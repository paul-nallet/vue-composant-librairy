<script setup lang="ts">
import { MyButton, sprinkles } from '@packages/ui'
</script>

<template>
  <div :class="sprinkles({
    padding: 4,
    display: 'inline-block'
  })">ajouter</div>
  <MyButton>Ajouter</MyButton>
  <MyButton>Ajouter</MyButton>
  <MyButton>Ajouter</MyButton>
</template>
