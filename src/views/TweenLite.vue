<template>
    <div class="tweenLite" >
        <div class="box1">
            <el-button class="pre-button" type="primary" @click="goPre()">上一页</el-button>
            <div class="title">tweenLite</div>
            <el-button class="next-button" type="primary" @click="goNext()">下一页</el-button>
        </div>
        <div class="box2">
            <div class="red"></div>
            <div class="orange"></div>
            <div class="blue"></div>
        </div>
        <div class="box3">
            <div class="box3-demo"></div>
        </div>
        <div class="box4">
            <div class="red-box4 box"></div>
            <div class="orange-box4 box"></div>
            <div class="blue-box4 box"></div>
        </div>
        <div class="box5">
            <div class="from"></div>
        </div>
        <div class="box6">
            <div class="from-to"></div>
        </div>
    </div>
</template>

<script>

    import * as util from './../util/util'
    import TweenLite from "gsap";
    import SVG from 'svg.js';
    export default {
        name: 'tweenLite',
        data () {
            return {

            }
        },
        created () {
            console.log(util.getCurrentDay());
        },
        mounted () {
            //简单的运动到
            //this.tweenLiteButton();
            //多个dom做相同的运动
            this.tweenLiteThressBox();
            this.tweenBox3();
            //动态计算距离
            this.tweenLiteRandom();
            //from为从设定的位置移动到样式初始位置
            this.tweenFrom();
            //fromTo为可以设定开始和结束位置
            this.tweenFromTo();
        },
        computed: {

        },
        methods:{
            tweenFromTo(){
                TweenLite.fromTo('.from-to', 2, {
                    left:500,
                    opacity:0,
                    backgroundColor:'yellow'
                },{
                    left:100,
                    opacity:1,
                    backgroundColor:'red',
                    boxShadow: '0px 0px 30px red'
                })
            },
            tweenFrom(){
                TweenLite.from('.from', 2, {
                    left:500,
                    opacity:0,
                })
            },
            tweenLiteRandom(){
                TweenLite.to('.box', 1, {
                    left:function(index,target){
                        //参数1 index 目标在一系列目标中的位置。
                        //console.log(index);
                        //参数2 target 哪一个目标
                        //console.log(target);
//                        return Math.random() * 300;
                        return (index+2)*100 //200 300 400
                    }
                });
            },
            tweenBox3(){
//                let tween = new TweenLite('.box3-demo', 2, {width:200, height:150,backgroundColor:'pink'});
                let tween = TweenLite.to('.box3-demo', 2, {width:200, height:40,backgroundColor:'purple'});
            },
            tweenLiteThressBox(){
                TweenLite.to(['.red', '.orange', '.blue'], 1, {opacity:0.5, rotation:45,left:300,scale:0.5});
            },
            tweenLiteButton(){
                TweenLite.to(".pre-button",1,{
                            left:200
                        });
                TweenLite.to(".next-button",1,{
                            right:200
                        })
            },
            goPre(){
                this.$router.push("/")
            },
            goNext(){
                this.$router.push("/TweenMax")
            }
        }
    }
</script>


<style lang="less" scoped>
    .tweenLite {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: rgba(108, 0, 0, 0.05);
        background-size: cover;
        color: #000;
    }
    .title{
        position: absolute;
        top:0;
        left:50%;
        margin-left: -50px;
        width:100px;
        font-weight: 600;
        color: #000;
        text-align: center;
        line-height: 50px;
    }
    .box1{
        min-height: 40px;
        width:100%;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .pre-button{
        position: relative;
        float: left;
        margin-top:10px;
        margin-left:88px;
    }
    .next-button{
        position: relative;
        float: right;
        margin-top:10px;
        margin-right:88px;
    }
    .box2{
        min-height: 40px;
        width:100%;
        overflow: hidden;
        margin-bottom: 10px;
        div{
            position: relative;
            width:50px;
            height: 50px;
            border-radius: 3px;
            margin-left: 20px;
            margin-bottom: 10px;
        }
    }
    .red{
        background: red;
    }
    .orange{
        background: orange;
    }
    .blue{
        background: blue;
    }
    .box3{
        min-height: 40px;
        width:100%;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .box4{
        min-height: 40px;
        width:100%;
        overflow: hidden;
        margin-bottom: 10px;
        div{
            position: relative;
            width:50px;
            height: 50px;
            border-radius: 3px;
            margin-left: 20px;
            margin-bottom: 10px;
        }
    }
    .red-box4{
        background: red;
    }
    .orange-box4{
        background: orange;
    }
    .blue-box4{
        background: blue;
    }
    .box5 {
        min-height: 40px;
        width: 100%;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .from{
        position: relative;
        height: 80px;
        width:80px;
        border-radius: 40px;
        background: red;
    }
    .box6 {
        min-height: 40px;
        width: 100%;
        overflow: hidden;
        margin-bottom: 10px;
        padding: 20px 0;
    }
    .from-to{
        position: relative;
        height: 80px;
        width:80px;
        border-radius: 40px;
        background: purple;
    }
</style>
