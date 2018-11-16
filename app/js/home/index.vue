<template lang="html">
    <div :class="$style.home">
        <h1>home组件
        <p :class="$style.title">测试sass文件引入</p>
        </h1>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" module>
    @import "../../css/reset.scss";
    .home{
        color: red;
        font-size: 80px;
    }
</style>