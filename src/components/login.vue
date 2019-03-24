<template>
    <div class="login-mask">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3 form-box">
                    <div class="form-top">
                        <div class="form-top-left">
                            <h3>请登录</h3>
                            <p>欢迎来到我的电影院</p>
                        </div>
                    </div>
                    <div class="form-bottom">
                        <div class="form-group">
                            <label class="sr-only" for="form-username">Username</label>
                            <input type="text" v-model="info.name" name="form-username" placeholder="请输入用户名" class="form-username form-control" id="form-username">
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="form-password">Password</label>
                            <input type="password" v-model="info.password" name="form-password" placeholder="请输入密码" class="form-password form-control" id="form-password">
                        </div>
                        <button @click="goLogin" class="btn" style="float:right">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            info: {
                name:'',
                password:''
            }
        }
    },
    methods: {
        goLogin () {
            if (this.info.name == '' || this.info.password == '') {
                this.$alert('请输入完整信息', '温馨提示', {
                confirmButtonText: '确定',
                    callback: action => {}
                });
            }else {
                sessionStorage.setItem('userName',this.info.name);
                this.$router.go(-1);
            }
        }
    }
}
</script>
<style scoped>
    .login-mask {
        position:absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background:url("../assets/login.jpg");
        background-size: cover;
    }
    .form-box {
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        left: 0;
        margin:auto;
        height: 350px;
    }
    .form-top {
        overflow: hidden;
        padding: 0 25px 15px 25px;
        background: #fff;
        -moz-border-radius: 4px 4px 0 0;
        -webkit-border-radius: 4px 4px 0 0;
        border-radius: 4px 4px 0 0;
        text-align: left;
    }
    .form-top-left {
        float: left;
        width: 75%;
        padding-top: 25px;
    }
    .form-top-left h3 {
        margin-top: 0;
    }
    .form-top-right {
        float: left;
        width: 25%;
        padding-top: 5px;
        font-size: 66px;
        color: #ddd;
        line-height: 100px;
        text-align: right;
    }
    .form-bottom {
        padding: 25px 25px 30px 25px;
        background: #eee;
        -moz-border-radius: 0 0 4px 4px;
        -webkit-border-radius: 0 0 4px 4px;
        border-radius: 0 0 4px 4px;
        text-align: left;
        overflow: hidden;
    }
    .form-group {
        margin-bottom: 15px;
    }
    input[type="text"], input[type="password"], textarea, textarea.form-control {
        height: 50px;
        margin: 0;
        padding: 0 20px;
        vertical-align: middle;
        background: #f8f8f8;
        border: 3px solid #ddd;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 50px;
        color: #888;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        -o-transition: all .3s;
        -moz-transition: all .3s;
        -webkit-transition: all .3s;
        -ms-transition: all .3s;
        transition: all .3s;
    }
    .form-bottom form button.btn {
        width: 100%;
    }
button.btn {
    height: 50px;
    margin: 0;
    padding: 0 20px;
    vertical-align: middle;
    background: #4aaf51;
    border: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 50px;
    color: #fff;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    text-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -o-transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    -ms-transition: all .3s;
    transition: all .3s;
}
</style>
