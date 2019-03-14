<template>
   <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to="/index">我的电影院</router-link>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li :class="{'active':$route.path === '/index'}"><router-link to='/index'>首页</router-link></li>
                        <li :class="{'active':$route.path === '/in_theaters'}"><router-link :to="{path:'/in_theaters',query:{page:1}}">正在热映</router-link></li>
                        <li :class="{'active':$route.path === '/coming_soon'}"><router-link :to="{path:'/coming_soon',query:{page:1}}">即将上映</router-link></li>
                        <li :class="{'active':$route.path === '/top250'}"><router-link :to="{path:'/top250',query:{page:1}}">Top 250</router-link></li>
                        <li :class="{'active':$route.path === '/diagram'}"><router-link to='/diagram'>电影大数据</router-link></li>
                    </ul>
                    <form class="navbar-form navbar-right" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="电影搜索" v-model="search">
                        </div>
                        <button type="submit" class="btn btn-default" @click="searchMovie">搜索</button>
                    </form>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
  data: function () {
            return {
                search: ''
            }
        },
        methods: {
            searchMovie: function () {
                if(this.search.trim()!==''){
                    this.$router.push({path:'/search',query:{q:this.search}})
                }
            }
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-default .navbar-brand{
    color: #27a;
    font-weight: 600;
}
.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover{
    color: #27a;
}

</style>
