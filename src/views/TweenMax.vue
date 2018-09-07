<template>
    <div class="tweenMax" >
        <div class="box1">
            <el-button class="pre-button" type="primary" @click="goPre()">上一页</el-button>
            <div class="title">tweenMax</div>
            <el-button class="next-button" type="primary" @click="goNext()">下一页</el-button>
        </div>
        <div class="box2">
            <div class="red"></div>
            <div class="orange"></div>
            <div class="blue"></div>
        </div>
        <div class="box3"></div>
        <div class="box4"></div>
    </div>
</template>

<script>

    import * as util from './../util/util'
    import TweenLite from "gsap";
    import SVG from 'svg.js';
    export default {
        name: 'tweenMax',
        data () {
            return {

            }
        },
        created () {
            console.log(util.getCurrentDay());
        },
        mounted () {
            //基础运动
            this.tweenMax();
            TweenMax.to('.box3', 5, {bezier:[{left:100, top:250}, {left:300, top:0}, {left:500, top:400}], ease:Power1.easeInOut});
            TweenLite.to('.box4', 3, {colorProps:{borderColor:"red", myCustomProp:"rgb(204,51,0)"}, ease:Linear.easeNone});
        },
        computed: {

        },
        methods:{
            tweenMax(){
                TweenMax.to(['.red','.orange','.blue'], 2, {scale:0.5,x:300,opacity:0.2});
            },
            goPre(){
                this.$router.push("/TweenLite")
            },
            goNext(){
                this.$router.push("/Family")
            }
        }
    }
</script>


<style lang="less" scoped>
    .tweenMax {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: #bbffd8;
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
        position: relative;
        height: 60px;
        width:60px;
        background: skyblue;
        border:1px solid red;
    }
    .box4{
        position: relative;
        height: 60px;
        width:60px;
        background: purple;
        border:5px solid yellow;
    }
</style>
