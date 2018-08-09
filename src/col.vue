<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'guluCol',
        props:{
            span:{
                type:[Number,String]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col{
        width: 50%;
        height: 100px;
        background: yellowgreen;
        border: 1px solid red;
        $class-prefix:col-;
        @for $n  from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24)*100%;
            }
    }

    }
</style>