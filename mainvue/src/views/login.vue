<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-row>
      <a-col :span="8" :offset="8">
        <a-form :form="form">
          <a-form-item label="用户名" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input placeholder="请输入用户名" v-decorator="['name', validatorRules.name]"></a-input>
          </a-form-item>
          <a-form-item label="密码" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input type="password" autocomplete="off" placeholder="请输入密码" v-decorator="['pass', validatorRules.pass]" @keyup.enter="login"></a-input>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" @click="login">
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import actions from '@/shared/actions';

export default {
  name: 'login',
  data() {
    return {
      form: this.$form.createForm(this),
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 18,
        offset: 2,
      },
      validatorRules: {
        name: {
          rules: [
            { required: true, message: '请输入用户名'}
          ]
        },
        pass: {
          rules: [
            { required: true, message: '请输入密码'}
          ]
        }
      }
    }
  },
  mounted() {
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：token 改变前的值为 ", prevState.token);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
    });

  },
  methods: {
    ...mapMutations([
      'setToken'
    ]),
    login() {
      this.form.validateFields((err,values)=>{
        if(!err) {
          console.log(values);
          this.$message.success('登录成功')
          let token = values.name + values.pass + '_' + Math.random();
          actions.setGlobalState({ token });
          this.setToken(token);
          setTimeout(()=>{
            if(values.name !== '' && values.pass !== '') {
              // console.log('登录成功')
              this.$router.push('/')
            }
          }, 500)
        }
      })
    }
  }
};
</script>

<style scoped lang="less">

</style>
