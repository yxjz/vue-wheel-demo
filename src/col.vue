<template>
    <div class="col" :class="" :style="colstyle">
        <div style="border: 1px solid black;">
            <slot></slot>
        </div>

    </div>
</template>
<script>
    export default{
        name:'guluCol',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            }
        },
        data(){
            return{
                gutter:0

            }
        },
        computed:{
            conclass(){
                let {span,offset} = this;
                return [span&&`col-${span}`,offset &&`offset-${offset}`]
            },
            colstyle(){
                return{
                    paddingLeft:this.gutter/2+'px',
                    paddingRight:this.gutter/2+'px'
                }


            }
        }


    }
</script>
<style lang="scss" scoped>
    .col{
        width: 50%;
        height: 100px;


        $class-prefix:col-;
        @for $n  from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24)*100%;
            }
    }
        $class-prefix:offset-;
        @for $n  from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ($n/24)*100%;
            }
        }

    }
</style>