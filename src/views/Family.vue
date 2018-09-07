<template>
    <div class="Family" >

        <div class="head">
            <div class="sun"></div>
            <svg class="yun" fill="#fff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <metadata> Svg Vector Icons : http://www.sfont.cn </metadata>
            <g><path d="M833.3,394.2c-21.7-147.9-148.7-261.7-302.7-261.7c-126.5,0-235.1,76.7-281.8,186.2c-7.9-1.6-16.1-2.5-24.5-2.5c-67.7,0-122.5,54.8-122.5,122.5c0,27.8,9.4,53.4,25.1,74C58.5,539.5,10,605.9,10,683.8c0,101.5,82.3,183.8,183.8,183.8H745c135.3,0,245-109.7,245-245C990,518.3,924.9,429.6,833.3,394.2z M745,836.9H193.8c-84.6,0-153.1-68.6-153.1-153.1s68.6-153.1,153.1-153.1c8.5,0,15.3-6.8,15.3-15.3c0-8.4-6.8-15.3-15.2-15.3h0.2c-0.1,0-0.2,0-0.3,0c-11.8,0-23.3,1.2-34.5,3.4c-16.5-16.6-26.8-39.4-26.8-64.6c0-50.7,41.1-91.9,91.9-91.9c25.4,0,48.3,10.3,65,26.9c0,0,15.4,15.2,26.9,3.7c11.5-11.5-5.3-25.4-5.3-25.4c-9.6-9.6-20.8-17.5-33.1-23.4c0,0,0.1,0,0.1,0c42.5-97.4,139.6-165.6,252.7-165.6c133.5,0,244.8,94.9,270.2,221c0.1,0,0.1,0,0.2,0c-18-4.2-36.7-6.7-56-6.7c-8.5,0-15.3,6.8-15.3,15.3c0,8.5,6.8,15.3,15.3,15.3c118.4,0,214.4,96,214.4,214.4S863.4,836.9,745,836.9z"/><path d="M745,469.4c-8.5,0-15.3,6.8-15.3,15.3S736.5,500,745,500c67.7,0,122.5,54.8,122.5,122.5c0,8.5,6.8,15.3,15.3,15.3s15.3-6.8,15.3-15.3C898.1,537.9,829.6,469.4,745,469.4z"/><path d="M298.3,550.2c-11.5,11.2,3.7,25.2,3.7,25.2c27.7,27.7,44.9,66,44.9,108.3c0,8.5,6.8,15.3,15.3,15.3s15.3-6.8,15.3-15.3c0-50.7-20.6-96.7-53.8-129.9C323.7,553.8,309.8,539,298.3,550.2z"/></g>
        </svg>
        </div>
        <div class="svg-container" id="boxContainer">
            <svg id="boxLoader" width="70px" height="70px"  preserveAspectRatio="none">
                <rect x="0" fill="#00EE00" width="70px" height="70px" />
            </svg>
            <svg id="base" width="210px" height="210px" viewBox="0 0 105 105" preserveAspectRatio="none">
                <line stroke-width="1.5" fill="none" stroke="purple" stroke-miterlimit="10" x1="0" y1="52.5" x2="105" y2="52.5" />
            </svg>
        </div>

    </div>
</template>

<script>

    import * as util from './../util/util'
    import TweenLite from "gsap";
    import SVG from 'svg.js';
    export default {
        name: 'Family',
        data () {
            return {

            }
        },
        created () {

        },
        mounted () {
            this.start();
            this.startSVG();
        },
        computed: {

        },
        methods:{
            startSVG(){
                TweenMax.set(['#boxLoader', '#base'], {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50
                });
                TweenMax.set(['#boxContainer'], {
                    position: 'absolute',
                    top:'50%',
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50
                });
                var tl = new TimelineMax({
                    repeat: -1
                });
                //运动倍数
                tl.timeScale(1.2);
                //移动到起点位置
                tl.set('#boxLoader', {
                    transformOrigin: '0% 100%',
                    left: '+=70',
                    top: '-=' + 70 / 2
                })
                //方块左旋转90度
                .to('#boxLoader', 1, {
                    rotation: '-=90',
                    ease: Power4.easeInOut
                })
                //旋转过后设置位置，以左下角为中心点
                .set('#boxLoader', {
                    transformOrigin: '0% 100%',
                    left: '-=70',
                    rotation: 0
                })
                //再次旋转
                .to('#boxLoader', 1, {
                    rotation: '-=90',
                    ease: Power4.easeInOut
                })
                //再次设置位置
                .set('#boxLoader', {
                    transformOrigin: '0% 100%',
                    left: '-=70',
                    rotation: 0
                })
                //大转
                .to('#boxLoader', 1, {
                    rotation: '-=270',
                    ease: Power4.easeInOut
                })
                //外层盒子转动180度
                .to('#boxContainer', 1, {
                    rotation: '+=180',
                    ease: Back.easeInOut
                }, '-=1')
                //再次设置方块的位置
                .set('#boxLoader', {
                    transformOrigin: '100% 0%',
                    top: '+=70',
                    rotation: 0
                })

            },
            start(){
                TweenMax.to('.box3', 5, {bezier:[{left:100, top:250}, {left:300, top:0}, {left:500, top:400}], ease:Power1.easeInOut});
                //无限循环 Infinite ，yoyo:true  回原路返回
                let tl = new TimelineMax({repeat:'infinite', repeatDelay:1,yoyo:false});
                tl.from(".sun",2,{
                    opacity:0,
                    y:'-100px',
                    x:'100px'
                })
                .to(".yun",8,{
                    bezier:[{x:100, y:-30}, {x:300, y:30}, {x:500, y:0}]
                },'-=2')
            }
        }
    }
</script>


<style lang="less" scoped>
    .Family {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: linear-gradient(skyblue, #fff,#fff);
        background-size: cover;
        color: #000;
    }
    .head{
        height:200px;
        overflow: hidden;
        width:100%;
    }
    .sun{
        position: absolute;
        top:50px;
        right:100px;
        height: 100px;
        width:100px;
        border-radius: 50px;
        background: #ff5726;
        box-shadow: 0 0 30px yellow;
    }
    .yun{
        height:80px;
        width:150px;
        position: absolute;
        left:150px;
        top:70px;
    }
    .svg-container {
        width: 100%;
        height: 250px;
    }
</style>
