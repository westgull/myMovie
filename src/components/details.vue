<template>
    <div class="detail panel panel-info">
        <div class="panel-heading">
            <h1 class="panel-title">{{movie.title}}</h1>
        </div>
        <div class="panel-body">
            <div class="dt-info">
                <div class="dti-i"><img :src="movie.images.large" alt=""></div>
                <div class="dti-w">
                    <p>
                        <strong>导演：</strong>
                        <span  v-for="(item,index) in movie.directors">{{item.name}}<i v-if="(index+1) != movie.directors.length">/</i></span>
                    </p>
                    <p>
                        <strong>主演：</strong>
                        <span v-for="(item,index) in movie.casts">{{item.name}}<i v-if="(index+1) != movie.casts.length">/</i></span>
                    </p>
                    <p>
                        <strong>类型：</strong>
                        <span v-for="(item,index) in movie.genres">{{item}}<i v-if="(index+1) != movie.genres.length">/</i></span>
                    </p>
                    <p>
                        <strong>国家：</strong>
                        <span v-for="(item,index) in movie.countries">{{item}}<i v-if="(index+1) != movie.countries.length">/</i></span>
                    </p>
                    <p><strong>评分：</strong>{{movie.rating.average}}</p>
                    <p><strong>时间：</strong>{{movie.year}}</p>
                    <p>
                        <strong>又名：</strong>
                        <span v-for="(item,index) in movie.aka">{{item}}<i v-if="(index+1) != movie.aka.length">/</i></span>
                    </p>
                </div>
            </div>
            <div class="comment">
                <i class="glyphicon glyphicon-pencil"></i>
                <span @click="openDialog">写短评</span>
                <i class="glyphicon glyphicon-star-empty"></i>
                <span @click="goCollect()">{{info.collect}}</span>
                <i class="glyphicon glyphicon-thumbs-up"></i>
                <span @click="goZang()"> {{info.zang}}</span>
            </div>
            <div v-if="showMy">
                <h3>我的影评:</h3>
                <div class="my-comment">
                    <h4>
                        <span class="comment-info">
                            <el-rate
                                class="comment-score"
                                v-model="commentInfo.score"
                                disabled
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                            </el-rate>
                            <span class="comment-time">
                                {{commentInfo.date}}
                            </span>
                        </span>
                    </h4>
                    <p style="color:rgb(103, 103, 103);">
                            <span class="short">{{commentInfo.comment}}</span>                     
                    </p>
                </div>
            </div>
            <h3>剧情简介:</h3>
            <p style="color:#676767;text-indent:2em">{{movie.summary}}</p>
            <h3>{{movie.title}}的演职员:</h3>
            <div class="row actors">
                <div class="actor-item"  v-for="item in movie.casts">
                    <img :src="item.avatars.small" style="width:100px;border: 1px solid #ddd;border-radius: 4px;padding:5px"/>
                    <p>{{item.name}}</p>
                </div>
            </div>
            <div>
                <h3>{{movie.title}}的影评:</h3>
                <div class="my-comment" v-for="item in comments">
                    <h4>
                        <span class="comment-info">
                            <el-rate
                                class="comment-score"
                                v-model="item.score"
                                disabled
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                            </el-rate>
                            <span class="comment-time">
                                {{item.date}}
                            </span>
                        </span>
                    </h4>
                    <p style="color:rgb(103, 103, 103);">
                            <span class="short">{{item.comment}}</span>                     
                    </p>
                </div>
            </div>
        </div>
        <div class="mask" v-show="loading">
            <div class="loader">
                <div class="loader-inner pacman" >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="comment-mask"  v-if="commentDialog">
            <div class="dialog" v-if="commentDialog">
                <div class="interest-form-hd">
                    <span class="gact rr">
                        <a href="javascript:;" @click="commentDialog = false">x</a>
                    </span>
                    <h2>写短评</h2>
                </div>
                <div id="mytags" class="clearfix">
                    <dl>
                        <dt>评分:</dt>
                        <dd>
                            <el-rate
                                v-model="commentInfo.score"
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                            </el-rate>
                        </dd>
                    </dl>
                </div>
                <div class="myComment">
                    <dl>
                        <dt>我的影评:</dt>
                        <dd>
                             <textarea class="form-control" v-model="commentInfo.comment" placeholder="请输入影评" rows="4" style="min-width: 90%"></textarea>
                        </dd>
                    </dl>
                </div>
                 <div class="interest-form-hd">
                    <button class="btn btn-success btn-sm" style="float:right" @click="confirm"> 确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                movie: {images: {large: ''},directors:[],rating:{average:[]},genres:[],aka:[],casts:[]},
                loading:true,
                collectStatus:1,
                zangStatus:1,
                commentDialog:false,
                showMy:false,
                info: {
                    'collect':'收藏',
                    'zang':'点赞'
                },
                commentInfo: {
                    score: '',
                    comment:'',
                    date:'',
                },
                comments:[
                    {
                        score: 2,
                        comment:'虽然我哭了，但真的很好笑哈哈哈哈哈哈哈',
                        date:'2019-02-14',
                    },
                    {
                        score: 5,
                        comment:'牛逼！！！好音乐真是颗幸福的原子弹！！',
                        date:'2018-09-14',
                    },
                    {
                        score: 2,
                        comment:'谁以后要找我看这种电影 对不起我们还是不要做朋友了',
                        date:'2018-06-03',
                    },
                    {
                        score:3,
                        comment:'爆米花電影的standard流水線。',
                        date:'2018-02-10',
                    },
                ]
            }
        },
        methods: {
            getInfo () {
                this.$http.jsonp('http://api.douban.com/v2/movie/subject/'+this.$route.query.id).then((response)=>{
                    if (response.status == 200) {
                        this.loading = false
                        console.log(response.json())
                        this.movie = response.json()
                    }
                });
            },
            getDate() {
                var date = new Date();
                var seperator1 = "-";
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = year + seperator1 + month + seperator1 + strDate;
                return currentdate;
            },
            goCollect () {
                this.collectStatus ? this.info.collect = '已收藏' : this.info.collect = '收藏'
                this.collectStatus = !this.collectStatus
            },
            goZang () {
                this.zangStatus ? this.info.zang = '已点赞' : this.info.zang = '点赞'
                this.zangStatus = !this.zangStatus
            },
            openDialog () {
                if (sessionStorage['userName']) {
                    this.commentDialog = true
                    this.commentInfo.comment = ''
                    this.commentInfo.score = ''
                } else {
                    this.$router.push('/login')
                }
            },
            confirm () {
                if (this.commentInfo.score == '' || this.commentInfo.comment == '') {
                    this.$alert('请输入完整内容', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        console.log(this.commentInfo)
                    }
                    });
                } else {
                    this.commentInfo.date = this.getDate()
                    this.commentDialog = false
                    this.showMy = true
                }
            }
        },
        created () {
            this.getInfo()
        }
    }
</script>
<style scoped>
    h3 {
        color: #007722;
    }
    .comment {
        margin-top: 30px;
        color: #37a;
    }
    .my-comment {
        width: 80%;
        padding: 14px 0 14px 1em;
        border-bottom:1px solid #ddd;
    }
    .comment span {
        cursor: pointer;
        padding-right:20px;
    }
    .comment-score {
        float: left;
    }
    .comment-time {
        margin-left: 20px;
        font-size: 14px;
        color: #37a;
    }
    .detail {
        padding: 10px;
        width: 80%;
        margin: 0 auto;
        margin-top: 30px;
        background: #fff;
    }
    .detail h1 {
        font-size: 25px;
    }
    .dt-info {
        margin-top: 15px;
        height: 285px;
        overflow: hidden;
    }
    .detail h3 {
        margin: 30px auto 10px;
        font-size: 16px;
    }
    .dti-i {
        float: left;
        width: 210px;
    }
    .dti-i img {
        width: 100%;
        cursor: pointer;
    }
    .dti-w {
        float: left;
        margin-left: 15px;
        width:calc(100% - 250px)
    }
    .dti-w p {
        margin: 20px 0;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .actors {
        margin: 0 10px;
    }
    .actor-item {
        float:left;
        margin-right: 20px;
    }
    .mask {
        position: fixed;
        top: 50px;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.5);
    }
    .loader{
        position: absolute;
        width: 250px;
        height: 200px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

    @-webkit-keyframes rotate_pacman_half_up {
        0% {
            -webkit-transform: rotate(270deg);
            transform: rotate(270deg); }

        50% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg); }

        100% {
            -webkit-transform: rotate(270deg);
            transform: rotate(270deg); } }

    @keyframes rotate_pacman_half_up {
        0% {
            -webkit-transform: rotate(270deg);
            transform: rotate(270deg); }

        50% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg); }

        100% {
            -webkit-transform: rotate(270deg);
            transform: rotate(270deg); } }

    @-webkit-keyframes rotate_pacman_half_down {
        0% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg); }

        50% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }

        100% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

    @keyframes rotate_pacman_half_down {
        0% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg); }

        50% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }

        100% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

    @-webkit-keyframes pacman-balls {
        75% {
            opacity: 0.7; }

        100% {
            -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px); } }

    @keyframes pacman-balls {
        75% {
            opacity: 0.7; }

        100% {
            -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px); } }

    .pacman {
        position: relative; }
    .pacman > div:nth-child(2) {
        -webkit-animation: pacman-balls 1s 0s infinite linear;
        animation: pacman-balls 1s 0s infinite linear; }
    .pacman > div:nth-child(3) {
        -webkit-animation: pacman-balls 1s 0.33s infinite linear;
        animation: pacman-balls 1s 0.33s infinite linear; }
    .pacman > div:nth-child(4) {
        -webkit-animation: pacman-balls 1s 0.66s infinite linear;
        animation: pacman-balls 1s 0.66s infinite linear; }
    .pacman > div:nth-child(5) {
        -webkit-animation: pacman-balls 1s 0.99s infinite linear;
        animation: pacman-balls 1s 0.99s infinite linear; }
    .pacman > div:first-of-type {
        width: 0px;
        height: 0px;
        border-right: 25px solid transparent;
        border-top: 25px solid #fff;
        border-left: 25px solid #fff;
        border-bottom: 25px solid #fff;
        border-radius: 25px;
        -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
        animation: rotate_pacman_half_up 0.5s 0s infinite; }
    .pacman > div:nth-child(2) {
        width: 0px;
        height: 0px;
        border-right: 25px solid transparent;
        border-top: 25px solid #fff;
        border-left: 25px solid #fff;
        border-bottom: 25px solid #fff;
        border-radius: 25px;
        -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
        animation: rotate_pacman_half_down 0.5s 0s infinite;
        margin-top: -50px; }
    .pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
        background-color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        width: 10px;
        height: 10px;
        position: absolute;
        -webkit-transform: translate(0, -6.25px);
        -ms-transform: translate(0, -6.25px);
        transform: translate(0, -6.25px);
        top: 25px;
        left: 100px; }
    .dialog {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 550px;
        height: 292px;
        border-radius: 6px;
        background:white;
    }
    .interest-form-hd {
        padding: 12px 18px;
        width: 100%;
        clear: both;
        background: #ebf5ea;
        overflow: hidden;
    }
    .gact {
        color: #BBBBBB;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
    }
    .rr {
        float: right;
    }
    .interest-form-hd h2 {
        margin: 0;
        line-height: 1.2;
        font: 15px Arial, Helvetica, sans-serif;
        color: #072;
    }
    .comment-mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.5);
    }
    #mytags {
        margin-top: 30px;
        padding: 0 18px;
    }
    .myComment {
        padding: 0 18px;
    }
    dl {
        overflow: hidden;
    }
    dt {
        float: left;
        width: 65px;
        color: #666;
        text-align: right;
    }
    dd {
        float: left;
        width: 420px;
        margin: 0 0 3px 8px;
        line-height: 23px;
    }
</style>