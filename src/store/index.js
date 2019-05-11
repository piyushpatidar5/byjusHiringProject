import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        courses: [],
        parsedCourses:[],
        height: 0
    },
    actions: {
        loadCoursesData({ commit }) {
            return new Promise((resolve, reject) => {
                axios
                    .get('https://api.myjson.com/bins/1fq8pm')
                    .then(r => r.data)
                    .then(courses => {
                        commit('SetCourses', courses);
                        resolve(courses);
                    }, error => {
                        // http failed, let the calling function know that action did not work out
                        reject(error);
                    })
            });
        }
    },
    mutations: {
        SetCourses(state, courses) {
            state.courses = [];
            courses.forEach(course => {
                state.courses.push({
                    "Course Id": course["Course Id"],
                    "Course Name": course["Course Name"],
                    "Provider": course["Provider"],
                    "Universities": course["Universities"]["Institutions"],
                    "Parent Subject": course["Parent Subject"],
                    "Child Subject": course["Child Subject"],
                    "Url": course["Url"],
                    "Next Session Date": course["Next Session Date"],
                    "Length": course.Length ? course.Length : 0,
                    "videoUrl": course["Video(Url)"] != "" ? course["Video(Url)"] : "https://www.youtube.com"
                });
            });
        },
        setHeight(state, height) {
            state.height = window.innerHeight;
        }
    }
})