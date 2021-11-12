<template>
  <div class="create-product">
    <div class="back">
      <i
        @click="backProductsList"
        style="margin-left: 5px"
        class="el-icon-arrow-left"
        >Back to Products List</i
      >
    </div>
    <el-row class="muiGrid">
      <el-form
        :model="userForm"
        :rules="rules"
        ref="userForm"
        class="demo-ruleForm"
      >
        <el-col :span="24">
          <div class="general-inf">
            <div class="title">General Information</div>
            <el-form-item label="Name" prop="name">
              <el-input  v-model="userForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Address" prop="address">
              <el-input v-model="userForm.address"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input type="email" v-model="userForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Phone" prop="phone">
              <el-input type="number" v-model="userForm.phone"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('userForm')"
            >Save</el-button
          >
          </div>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      image: { size: 0 },
      userForm: {
        name: "",
        address: null,
        phone: "",
        email: null,
      },

      rules: {
        name: [
          {
            required: true,
            message: "Please input name",
            trigger: "blur",
          },
          {
            min: 2,
            message: "Length should be larger than 1",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "Please input address",
            trigger: "blur",
          },
        ],
         email: [
          {
            required: true,
            message: "Please input email",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "Please input phone",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    backProductsList() {
      this.$router.go(-1);
    },
   
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await axios
            .post("http://localhost:3000/add-user", this.userForm)
            .then((res) => {
              this.alertSuccess();
              console.log(res);
              this.$router.push("/dashboard/management");
            })
            .catch((err) => this.alertErr(err.response.data));    
        } else {
          return false;
        }
      });
    },
    alertErr(err) {
      console.log(err);
      this.$message({
        showClose: true,
        message: err.message || "Đã có lỗi xảy ra!",
        type: "error",
      });
    },
    alertSuccess() {
      this.$message({
        showClose: true,
        message: "Thêm user thành công!",
        type: "success",
      });
    },
  },
};
</script>

<style scope>
.avatar-uploader {
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.create-product .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.create-product {
  height: 100vh;
  text-align: left;
}
.create-product .back {
  background-color: white;
  padding: 15px;
  color: #747c87;
}
.create-product .el-icon-arrow-left {
  cursor: pointer;
}
.create-product .el-icon-arrow-left::before {
  margin-right: 5px;
}
.create-product .general-inf {
  background-color: white;
  padding-bottom: 15px;
}

.create-product .additional-inf {
  background-color: white;
  padding-bottom: 15px;
}

.create-product .price {
  background-color: white;
  padding-bottom: 15px;
  margin: 20px 0;
}
.title {
  padding: 16px 24px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: 500;
}
.create-product .muiGrid {
  margin: 20px auto;
  width: 95%;
}
.create-product .el-col-16 {
  padding-right: 10px;
}
.create-product .el-col-8 {
  padding-left: 10px;
}
.create-product .el-form-item {
  display: grid;
  margin-bottom: 5px;
  padding-bottom: 25px;
}
.create-product .el-form {
  padding: 10px;
}
</style>

<style>
.create-product .el-form-item__content {
  margin-left: 0 !important;
  padding: 0 20px;
}
.create-product .el-form-item__label {
  text-align: left;
  padding: 0 20px;
}
.create-product .el-form-item__error {
  padding: 10px 20px;
}
.form-control-file {
  max-width: 300px;
}
.upload-img {
  border: 1px black dashed;
  width: 300px;
  height: 300px;
}
</style>