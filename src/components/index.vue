<template>
    <div class="container">
        <div class="banner">
            <el-carousel indicator-position="outside" height="400px">
                <el-carousel-item v-for="item in carousels" :key="item.img">
                    <img class="carousel-img" :src="item.img" @click="goDetail(item.id)">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div>
            <h4 class="movieReviews-title">电影评论</h4>
            <ul class="command-list">
                <li class="clearfix" @click.prevent="goDetail(6534248)">
                    <a href="#"  title="《无敌破坏王2：大闹互联网》：最具互联网精神的动画佳作" class="list-imgs">
                        <img src="http://image14.m1905.cn/uploadfile/2019/0228/thumb_1_320_174_20190228030737874062.jpg" alt="《无敌破坏王2：大闹互联网》：最具互联网精神的动画佳作">
                            <span class="imgs-player ico"></span>
                    </a>
                    <div class="list-txt">
                        <a href="#" class="txt-title"  >《无敌破坏王2：大闹互联网》：最具互联网精神的动画佳作</a>
                        <p class="txt-abstract">去年11月，由迪士尼打造的动画电影《无敌破坏王2：大闹互联网》在国内上映。影片继续围绕生活在电玩游戏厅的破坏王拉尔夫和赛车女孩云妮洛普展开。因为一次意外，云妮洛普所在的游戏装备损坏，他们决定前往互联网寻...</p>
                         <div class="clearfix txt-column">
                                <div class="txt-date">2019-03-01</div>
                           </div>
                    </div>
                </li>
                <li class="clearfix" @click.prevent="goDetail(26213252)">
                    <a href="#" title="《惊奇队长》变“惊奇大妈”？ 这次漫威就是要给你不一样" class="list-imgs">
                        <img src="http://image13.m1905.cn/uploadfile/2019/0227/thumb_1_320_174_20190227042304819353.jpg" alt="《惊奇队长》变“惊奇大妈”？ 这次漫威就是要给你不一样">
                            <span class="imgs-player ico"></span>
                     </a>
                    <div class="list-txt">
                        <a href="#" class="txt-title" >《惊奇队长》变“惊奇大妈”？ 这次漫威就是要给你不一样</a>
                        <p class="txt-abstract">本期《今日影评》特邀中国传媒大学教师金宇轩，为您解析《惊奇队长》：与银幕上的其他超级女英雄相比，有何过人之处？</p>
                            <div class="clearfix txt-column">
                                <div class="txt-date">2019-02-27</div>
                           </div>
                        </div>
                </li>
                <li class="clearfix" @click.prevent="goDetail(27083561)">
                    <a href="#" title="新海诚都羡慕的想象力 来自这个关于离别的故事" class="list-imgs">
                        <img src="http://image14.m1905.cn/uploadfile/2019/0227/thumb_1_320_174_20190227103417359898.jpg" alt="新海诚都羡慕的想象力 来自这个关于离别的故事">
                     </a>
                    <div class="list-txt">
                        <a href="#" class="txt-title" >新海诚都羡慕的想象力 来自这个关于离别的故事</a>
                        <p class="txt-abstract">《朝花夕誓》不仅是一部关于母爱的颂歌，更是一段讨论相遇、离别、成长与孤独的故事。</p>
                         <div class="clearfix txt-explain">
                            <div class="txt-author"></div>
                                <div class="txt-date">2019-02-27</div>
                            </div>
                        </div>
                </li>
                <li class="clearfix" @click.prevent="goDetail(26374197)">
                    <a class="list-imgs" href="#">
                        <img class="img" src="http://image13.m1905.cn/uploadfile/2018/1225/thumb_1_320_174_20181225093645278589.jpg" data-original="http://image13.m1905.cn/uploadfile/2018/1225/thumb_1_320_174_20181225093645278589.jpg" width="320" height="174" alt="《蜘蛛侠：平行宇宙》跳出舒适圈 开启多远宇宙空间" style="display: inline;">
                    </a>
                    <div class="list-txt">
                        <a class="txt-title" href="#">《蜘蛛侠：平行宇宙》跳出舒适圈 开启多远宇宙空间</a>
                        <p class="txt-abstract">本期《今日影评》特邀中国电影艺术研究中心副研究员左衡，为您解析《蜘蛛侠：平行宇宙》：六个蜘蛛侠会发生怎样的故事？</p>
                        <div class="clearfix txt-column">
                            <div class="txt-date">2018-12-24</div>
                        </div>
                    </div>
                </li>
                <li class="clearfix"  @click.prevent="goDetail(26266893)">
                    <a class="list-imgs" href="#">
                        <img class="img" src="http://image11.m1905.cn/uploadfile/2019/0208/thumb_1_320_174_20190208021755258444.jpg" data-original="http://image11.m1905.cn/uploadfile/2019/0208/thumb_1_320_174_20190208021755258444.jpg" width="320" height="174" alt="独家解析《流浪地球》中国表达带给科幻的独特情怀" style="display: inline;">
                    </a>
                    <div class="list-txt">
                        <a class="txt-title" href="#">独家解析《流浪地球》中国表达带给科幻的独特情怀</a>
                        <p class="txt-abstract">本期《今日影评》特邀导演郭帆，送出新年“振兴福”。为您解析《流浪地球》：中国表达带给科幻的独特情怀。</p>
                        <div class="clearfix txt-column">
                            <div class="txt-date">2019-02-08</div>
                            </div>
                        </div>
                    </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            carousels:[
                {
                    img:'https://img1.doubanio.com/view/photo/l/public/p2546878599.webp',
                    id:'26266893'
                },
                {
                    img:'http://image14.m1905.cn/uploadfile/2019/0308/thumb_1_1380_460_20190308111156345002.jpg',
                    id:'11529526'
                },
                {
                    img:'https://img3.doubanio.com/view/photo/l/public/p2548554303.webp',
                    id:'26213252'
                },
                {
                    img:'http://image14.m1905.cn/uploadfile/2019/0306/thumb_1_1380_460_20190306035242407239.jpg',
                    id:'27060077'
                }
            ]
        }
    },
    methods: {
        goDetail (val) {
            this.$router.push({path:'/details',query:{id:val}})
        }
    },
    created () {
        
    },
    mounted () {
        
    }
}
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>

<style scoped>
    img {
        width: 100%;
    }
    .carousel-img {
        width: 100%;
        height: 100%;
        background:white;
        border: 1px solid #ddd;
        padding: 4px;
        cursor: pointer;
    }
    .movieReviews-title {
        font: 20px/60px "Microsoft Yahei";
        height: 60px;
        text-align: center;
        background-color: #f5f5f5;
    }
    .command-list {
        padding-top:30px;
    }
    .command-list li{
        padding-bottom: 50px;
        cursor: pointer;
    }
    .list-imgs {
        position: relative;
        float: left;
        display: block;
        width: 35%;
        height: 174px;
        margin-right: 20px;
    }
    .list-txt {
        float: right;
        width: 60%;
    }
    .txt-title {
        font: bold 16px/22px "Microsoft YaHei";
        color: #333;
        margin-bottom: 14px;
    }
    .list-txt a {
        display: block;
    }
    .txt-abstract {
        color: #888888;
        font: 14px/2 "Microsoft YaHei";
        margin-bottom: 24px;
        height: 84px;
    }
    .txt-column {
        color: #888;
        height: 20px;
        font: 14px/20px "Microsoft YaHei";
    }
    .txt-date {
        float: right;
        height: 20px;
        font: 14px/20px "Microsoft YaHei";
        font-family: Verdana;
    }
</style>