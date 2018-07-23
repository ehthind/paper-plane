<template>
  <el-card class="box-card">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form ref="form" label-position="top" :model="formFrom">
          <el-form-item label="Ship From">
            <el-input v-model="formFrom.country" placeholder="Country"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="formFrom.province" placeholder="Province"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="formFrom.city" placeholder="City"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="formFrom.postal" placeholder="Postal / Zip"></el-input>
          </el-form-item>
        </el-form>
      </el-col>

      <el-col :span="12">
        <el-form ref="form" label-position="top" :model="formTo">
          <el-form-item label="Ship To">
            <el-input v-model="formTo.country" placeholder="Country"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="formTo.province" placeholder="Province"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="formTo.city" placeholder="City"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="formTo.postal" placeholder="Postal / Zip"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" :push=".1">
        <el-button class="get-quote-button" @click="getQuote()" type="primary">Get Quote</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'QuickQuote',
  props: {

  },
  data () {
    return {
      formFrom: {
        country: '',
        province: '',
        city: '',
        postal: ''
      },
      formTo: {
        country: '',
        province: '',
        city: '',
        postal: ''
      }
    }
  },
  getters: {

  },
  methods: {
    ...mapActions('auth', [
      'login'
    ]),

    getQuote () {
      this.login({email: '', password: ''})
        .then(response => {
          console.log(response)
        })
    }
  }

}

</script>

<style scoped>
.box-card {
  max-width: 560px;
}

.get-quote-button {
  float: right;
}
</style>
