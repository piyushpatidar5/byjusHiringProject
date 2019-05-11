<template>
  <div class="container">
    <el-table v-if="parsedCourses.length>0" :data="parsedCourses" :height="height-200">
      <el-table-column prop="Course Id" label="Course Id" width="80"></el-table-column>
      <el-table-column prop="Course Name" label="Course Name" width="200"></el-table-column>
      <el-table-column prop="Provider" label="Provider" width="100"></el-table-column>
      <el-table-column prop="Universities" label="Institutions"></el-table-column>
      <el-table-column prop="Parent Subject" label="Parent Subject"></el-table-column>
      <el-table-column prop="Child Subject" label="Child Subject"></el-table-column>
      <el-table-column prop="Url" label="Url">
        <template slot-scope="scope">
          <a :href="scope.row.Url" target="_blank">Click here</a>
        </template>
      </el-table-column>
      <el-table-column sortable prop="Next Session Date" label="Next Session Date" min-width="100"></el-table-column>
      <el-table-column sortable prop="Length" label="Length" min-width="60"></el-table-column>
      <el-table-column prop="videoUrl" label="Video(Url)">
        <template slot-scope="scope">
          <a :href="scope.row.videoUrl" target="_blank">Click here to video</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CoursesTableComponent",
  data() {
    return {
      flag: ""
    };
  },
  computed: {
    ...mapState(["parsedCourses", "height"])
  }
};
</script>

<style>
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
</style>