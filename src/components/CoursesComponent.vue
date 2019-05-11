<template>
  <div class="container">
    <el-row class="margin-10" :gutter="10">
      <el-col :span="12">
        <div class="grid-content">
          <el-input
            v-model="ProviderSearch"
            @change="(value)=>{filterTableDataBasedOn('Provider', value)}"
            placeholder="search by Provider"
          ></el-input>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <el-input
            v-model="UniversitiesSearch"
            @change="(value)=>{filterTableDataBasedOn('Universities', value)}"
            placeholder="search by Universities"
          ></el-input>
        </div>
      </el-col>
    </el-row>

    <el-row class="margin-10" :gutter="10">
      <el-col :span="12">
        <div class="grid-content">
          <el-input
            v-model="PSubjectSearch"
            @change="(value)=>{filterTableDataBasedOn('Parent Subject', value)}"
            placeholder="search by Parent Subject"
          ></el-input>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <el-input
            v-model="CSubjectSearch"
            @change="(value)=>{filterTableDataBasedOn('Child Subject', value)}"
            placeholder="search by ParChildent Subject"
          ></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="margin-10" :gutter="10" justify="center">
      <el-col :span="1">
        <el-tag class="coursesCount">{{parsedCourses.length}}</el-tag>
      </el-col>
    </el-row>
    <courses-table-component></courses-table-component>
  </div>
</template>

<script>
import CoursesTableComponent from "./CoursesTableComponent.vue";
import { _ } from "vue-underscore";
export default {
  name: "CoursesComponent",
  data() {
    return {
      ProviderSearch: "",
      UniversitiesSearch: "",
      PSubjectSearch: "",
      CSubjectSearch: ""
    };
  },
  components: { CoursesTableComponent },
  mounted() {
    const loading = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "spinner-border",
      background: "#fff"
    });
    this.$store.dispatch("loadCoins").then(
      response => {
        if (response) loading.close();
      },
      error => {
        loading.close(error);
      }
    );
  },
  methods: {
    filterTableDataBasedOn(type, string) {
      var _self = this;
      _self.parsedCourses = _self.$_.filter(_self.courses, function(course) {
        return course["Provider"]
          .toLowerCase()
          .includes(_self.ProviderSearch.toLowerCase());
      });
      _self.parsedCourses =
        _self.parsedCourses.length > 0
          ? _self.$_.filter(_self.parsedCourses, function(course) {
              return course["Universities"]
                .toLowerCase()
                .includes(_self.UniversitiesSearch.toLowerCase());
            })
          : "";

      _self.parsedCourses =
        _self.parsedCourses.length > 0
          ? _self.$_.filter(_self.parsedCourses, function(course) {
              return course["Parent Subject"]
                .toLowerCase()
                .includes(_self.PSubjectSearch.toLowerCase());
            })
          : "";

      _self.parsedCourses =
        _self.parsedCourses.length > 0
          ? _self.$_.filter(_self.parsedCourses, function(course) {
              return course["Child Subject"]
                .toLowerCase()
                .includes(_self.CSubjectSearch.toLowerCase());
            })
          : "";
    }
  },
  computed: {
    courses() {
      return this.$store.state.courses;
    },
    parsedCourses: {
      // getter
      get: function() {
        return this.$store.state.parsedCourses;
      },
      // setter
      set: function(newValue) {
        this.$store.state.parsedCourses = newValue;
      }
    }
  }
};
</script>

<style>
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: loading-rotate 1s linear infinite;
}

th {
  font-size: 14px;
  font-weight: 800;
  border-bottom: 1px solid #fff;
  color: #fff;
  background-color: #039 !important;
  padding: 8px;
}

td {
  font-size: 13px;
  color: #339;
  font-weight: 600;
  background-color: hsl(63, 100%, 98%);
}

.margin-10 {
  margin: 10px;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}

.centerAlign {
  text-align: center;
}

.coursesCount {
  font-size: 20px !important;
  font-weight: bold;
  background-color: red !important;
  color: white !important;
}
</style>