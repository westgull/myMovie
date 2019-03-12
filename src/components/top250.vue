<template>
    <div class="container">
        <div class="row">
            <div class="row-top">
                <p class="board-content">榜单规则：将电影库中的经典影片，按照评分和评分人数从高到低综合排序取前250名。相关数据来源于“豆瓣电影库”。</p>
            </div>
            <ul class="top-ul">
                <li v-for="movie in movies.subjects" class="top-list">
                    <router-link :to="{path:'/details',query:{id:movie.id}}">
                        <div class="thumbnail">
                            <img :src="movie.images.large" :alt="movie.title">
                        </div>
                        <div class="board-item-main">
                            <div class="movie-item-info">
                                <p class="name">{{movie.title}}</p>
                                <p class="star">主演：<span v-for="(item,index) in movie.casts">{{item.name}}<i v-if="(index+1) != movie.casts.length">,</i></span></p>
                                <p class="releasetime">上映时间：1993-01-01</p>    
                            </div>
                            <p class="score-num">{{movie.rating.average}}</p>
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
        margin-left: 50px;
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
    .board-item-main {
        position: relative;
        display: inline-block;
        width: calc(100% - 280px);
        height: 219px;
        float: right;
        margin-top: 30px;
        border-bottom: 1px solid #e5e5e5;
    }
    .score-num {
        position: absolute;
        right: 10px;
        top: 20px;
        color: #ffb400;
        font-size: 56px;
        font-weight: 700;
        font-style: italic;
    }
    .movie-item-info {
        float: left;
    }
    .movie-item-info {
        width: 420px;
        vertical-align: middle;
    }
    .name {
        font-size: 26px;
        color: #333;
        width: 420px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .star {
        margin-top: 18px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .releasetime {
        margin-top: 8px;
        color: #999;
    }
    .movie-item-info, .movie-item-number {
        display: inline-block;
        font-size: 16px;
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
    .top-ul {
        width: 85%;
        margin: 0 auto;
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
