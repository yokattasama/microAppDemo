<template>
  <div class="home">
    子应用首页
    用户登录token {{token}}
  </div>
</template>

<script>
// @ is an alias to /src
import actions from '@/shared/actions';

export default {
  name: 'Home',
  data() {
    return {
      token: '',
    }
  },
  mounted() {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      const { token } = state;
      // 未登录 - 返回主页
      if (!token) {
        this.$message.error("未检测到登录信息！");
        return this.$router.push("/about");
      }

      // 获取用户信息
      this.token = token;
    }, true);
  },
};
</script>
