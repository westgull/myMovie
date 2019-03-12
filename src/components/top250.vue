<template>
    <div class="container">
        <div class="row">
            <div class="row-top">
                <div v-if="$route.fullPath.indexOf('top250')==1">
                    <p class="update-time">2019-03-12<span class="has-fresh-text">已更新</span></p>
                    <p class="board-content">榜单规则：将电影库中的经典影片，按照评分和评分人数从高到低综合排序取前250名。相关数据来源于“豆瓣电影库”。</p>
                </div>
            </div>
            <ul>
                <li v-for="movie in movies.subjects" class="top-list">
                    <router-link :to="{path:'/details',query:{id:movie.id}}">
                        <div class="thumbnail">
                            <!-- <img :src="'https://images.weserv.nl/?url='+movie.images.large" :alt="movie.title"> -->
                            <img :src="movie.images.large" :alt="movie.title">
                            <div class="caption">
                                <h5>{{movie.title}} <span class="badge">{{movie.rating.average}}分</span></h5>
                                <div class="sort">
                                    <span v-for="info in movie.genres" @click.prevent="toSearch(info)" class="label label-primary">{{info}}</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <nav class="clearfix" v-show="!loading">
            <el-pagination
                class="pagination pagination-lg"
                background
                layout="prev, pager, next"
                :page-size='20'
                :current-page.sync="nowPage"
                @current-change="changePage"
                :total="total">
            </el-pagination>
        </nav>
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
    </div>
    <!--<p>test</p>-->
</template>
<script>
    window.onscroll = function () {
        var mask = document.getElementsByClassName('mask')[0]
        if(!!mask){
            if(document.body.scrollTop || document.documentElement.scrollTop>50){
                mask.style.top = '0';
            }else {
                mask.style.top = '50px'
            }
        }
    };
    export default {
        data(){
            return {
                movies: {},
                total: 0,
                start: 0,
                nowPage:1,
                loading:true,
            }
        },
        methods: {
            getInfo() {
                this.$http.jsonp('http://api.douban.com/v2/movie'+this.$route.fullPath).then((response)=>{
                    console.log(response)
                    if (response.status == 200) {
                        this.loading = false
                        this.movies = response.json(),
                        this.total = response.json().total,
                        this.start = response.json().start
                    } 
                });
            },
            changePage (val) {
                this.$router.push({path:this.$route.fullPath,query:{start:(val-1)*20,count:20,page:val}})
            },
            toSearch (val) {
                this.$router.push({path:'/search',query:{q:val}})
                this.nowPage = 1
            }
        },
        created () {
            this.getInfo()
        },
        watch: {
            '$route'() {
                this.getInfo()
                this.nowPage = this.$route.query.page
                this.loading = true
            },
        }
    }
</script>
<style scoped>
    .label{
        margin-left: 5px;
    }
    .thumbnail{
        transition: all .5s ease;
        position: relative;
        display: inline-block;
        width: 160px;
        height: 220px;
        margin-left: 80px;
        position: relative;
        float: left;
    }
    .thumbnail:hover {
        transform: translate(2px,-2px);
        box-shadow: -5px 5px 2px #f0f0f0;
    }
    .thumbnail img {
        width: 100%;
        max-height: 380px;
        cursor: pointer;
    }
    h5{
        width: 70%;
    }
    .badge{
        position: absolute;
        right: 5px;
        background-color: orangered;
    }
    .sort{
        position: absolute;
        bottom: 15px;
        left: 5px;
    }
    @media screen and (min-width: 1170px){
        .thumbnail{
            height: 458px;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1169px){
        .thumbnail{
            height: 392px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px){
        .thumbnail{
            height: 400px;
        }
    }
    @media screen and (max-width: 767px){
        .sort{
            position: static;
        }
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
    .has-fresh-text {
        color: #ffb400;
        margin-left: 4px;
    }
    .board-content, .update-time {
        text-align: center;
        font-size: 12px;
        color: #999;
    }
    .board-content {
        margin-top: 6px;
    }
    .row-top {
        margin-bottom: 20px;
    }
    .top-list {
        margin-bottom: 30px;
        font-size: 0;
        position: relative;
        overflow: hidden;
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

    .pagination{
        float: right;
    }
</style>
