<!--  Jeff Bohn    3/16/2021    Lab #17   Number Display  -->


<template>
   <div>
     <h2>{{ getNumbers }}</h2>
    </div>
</template>

<script>
  export default {
    name: "NumberDisplay",
    computed: {
  getNumbers() {
    return this.$store.getters.getNumbers;
    }
  }
};
</script>

