<template>
  <button @click="showEorror">show</button>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    throw('something go wrong');
  },
  methods: {
    showEorror(){
      const person = null
      console.log(7777,person.name)
    }
  }
}
</script>
