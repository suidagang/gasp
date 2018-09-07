<template>
    <div class="login" >
        <div class="progress"></div>
        <div class="animation-gsap-box" ref="animationDom"></div>
        <div>{{animatedNumber}}</div>
        <img id="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"/>
        <div class="box green"></div>
        <div class="box orange"></div>
        <div class="box grey"></div>
        <div class="box pink"></div>

        <div class="text"></div>
        <el-button type="primary" @click="goTweenLite()">跳转TweenLite</el-button>
    </div>
</template>

<script>

    import * as util from './../util/util'
    import TweenLite from "gsap";
    import SVG from 'svg.js';
    export default {
        name: 'login',
        data () {
            return {
                num:10,
                tw:null,
            }
        },
        created () {
            console.log(util.getCurrentDay());
        },
        mounted () {
            let that = this;
//            TweenMax.to(
//                    ".animation-gsap-box",
//                    1,
//                    {
//                        x:100,
//                        rotation:360,
//                        scale:0.5,
//                        skewX: 45,
//                        scale: 2,
//                        delay:3,//延迟执行
//
//                    }
//            );
            //from为从设定的位置移动到样式初始位置
//            TweenMax.from(
//                    ".animation-gsap-box",
//                    3,
//                    {
//                        x:0,
//                        y:-100,
//                        opacity:0,
//                        scale:0.5,
//                        //变化的监听函数
//                        onUpdate:function () {
//                            //console.log("改变")
//                        },
//                        //动画完成事件
//                        onComplete:function () {
//                            //alert("动画完成")
//                        },
//                        //动画方式
//                        ease: Bounce.easeIn
//                    }
//            );
            //fromTo为可以设定开始和结束位置
//            TweenMax.fromTo(
//                    ".animation-gsap-box", 3,
//
//                    {
//                        x:120, y:110,delay:3
//                    },
//                    {
//                        x:500, y:800,delay:3
//                    }
//            );
//            TweenMax.to("#logo", 2, {x:200, ease:Bounce.easeOut});
//            TweenMax.to(this.$data, 10, {
//                num:200,
//                //onUpdate fires each time the tween updates; we'll explain callbacks later.
//                onUpdate:function() {
////                    console.log(that.num); //logs the value on each update.
//                }
//            });
            TweenMax.to(
                    ".progress",
                    3,
                    {
                        width:'100%'

                    }
            );
            var tl = new TimelineMax({repeat:'Infinite', repeatDelay:1});
            tl.to(".green", 1, {x:200})
                //在上个动画结束后1秒再执行下面的动画
                .to(".orange", 1, {x:200, scale:0.2}, "+=1")
                //加一个标签，可以同时执行
                .addLabel("greyAndPink")
                //start both of these animations at the same time, at the "greyAndPink" label.
                .to(".grey", 1, {x:200, scale:2, y:20}, "greyAndPink")
                .to(".pink", 1, {x:200, rotation:360}, "greyAndPink")
                .to("#logo", 1, {x:100}) //shorter syntax!
                .to("#logo", 1, {y:100}) //shorter syntax!
                .to("#logo", 1, {x:0})
                .to("#logo", 1, {y:0})
//            tl.add( TweenMax.to("#logo", 1, {x:100}) );
            this.textAni();

        },
        computed: {
            animatedNumber: function() {
                return this.num.toFixed(0);
            }
        },
        methods:{
            goTweenLite(){
                this.$router.push("/TweenLite");
            },
            textAni(){
                let tl = new TimelineLite();
                tl.from(
                        '.text',
                        2,
                        {
                            left:500,
                            alpha:0
                        }
                )
            }
        }

    }
</script>


<style lang="less" scoped>
    .login {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: url('./../assets/img/bg1.jpg') center  no-repeat;
        background-size: cover;
        color: #fff;
    }
    .animation-gsap-box{
        position: absolute;
        left:100px;
        top:100px;
        height:100px;
        width: 100px;
        /*border-radius: 50px;*/
        background: #ff4118;

    }
    .progress{

        width:10px;
        height:10px;
        background: red;
        margin-bottom: 30px;
    }
    #logo {
        width:180px;
    }
    .box {
        display:block;
        height:50px;
        width:50px;
        border-radius: 4px;
    }

    .pink {
        background-color:pink;
    }
    .green{
        background-color:green;
    }
    .orange{
        background-color:orange;
    }
    .grey{
        background-color:grey;
    }
    .text{
        position: relative;
        width: 180px;
        height: 33px;
        overflow:hidden;
        background: url('./../assets/img/timelinelite.png') center  no-repeat;
    }
</style>
