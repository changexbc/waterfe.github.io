<template>
    <div id="app-box">
        <router-view class="router" transition="router" transition-mode="out-in"></router-view>
        <loading mode="fullscreen" v-show="loading.loadingShow" transition="fade"></loading>
        <msg-tip :text='msgTip.text' v-show='msgTip.show' transition="msg-tip"></msg-tip>
    </div>
</template>

<style lang="sass">
    @import "../sass/common";
    .form-box{

    }
    .form__bar{
        position:relative;
        background-color: #FFF;
        &.transparent{
            background: transparent;
        }
        &:after{
            content:'';
            position:absolute;
            left:16px;
            bottom:0px;
            width:100%;
            border-bottom:1px solid $sectionColor;
        }
        &:last-child{
            &:after{
                border-bottom:none;
            }
        }
    }
    .form__item{
        @extend %font-body1;
        display:flex;
        align-items:center;
        padding:0 16px;
        &.arrow{
            margin-right:16px;
            background: url(../images/icon_next.png) no-repeat center right;
            background-size: 16px 24px;
            -webkit-background-size:16px 24px;
        }
    }
    .form__key{
        @extend %font-title;
        width: 120px;

    }
    .form__value{
        flex:1;
        padding:20px 0;
        font-size:15px;
        color:$importColor;
        &.sub-service{
            @extend %font-caption;
            color:$defaultColor;
        }
        &.no-padding{
            padding-top:0;
            padding-bottom: 0;
        }
        select{
            padding:20px 0;
        }
        input{
            width: 100%;
            padding:20px 0;
            display: block;
        }
    }
    .tips{
        font-size:12px;
        padding:6px 20px;
        line-height:1.4;
        a{
            color:red;
        }
    }

</style>
<script>
    import store from '../store/index'
    import loading from '../components/Loading.vue'
    import msgTip from '../components/MsgTip.vue'


    export default {
        computed:{
            loading(){
                return store.state.loading
            },
            msgTip(){
                return store.state.msgTip
            }
        },
        components:{ loading, msgTip }
    }
</script>
