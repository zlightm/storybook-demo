<template>
  <div style="width:100%; height:500px;">
    <svg viewBox="95 10 63 25" xmlns="http://www.w3.org/2000/svg" class="svgClass">
      <path fill="none" stroke="#ffffff" stroke-width="2" d="M11,30c0,0,51-19,97-9c0,0,71,21,107,3c0,0,23-10,26-12"/>

      <circle r="5"  fill="#54df46" width="500" height="500">
        <animateMotion dur="5s" repeatCount="indefinite"
        values="60 ; 110 ; 60 ; 10 ; 60"
        keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
        keySplines="0.5 0 0.5 1 ; 0.5 0 0.5 1 ; 0.5 0 0.5 1 ; 0.5 0 0.5 1"
          path="M11,30c0,0,51-19,97-9c0,0,71,21,107,3c0,0,23-10,26-12" />
      </circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'svgLine',
  }
</script>

<style lang="scss" scoped>
.svgClass{
  width: 156px;
  height: 16px;
}
</style>