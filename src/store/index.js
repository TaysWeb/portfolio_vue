import { createStore } from 'vuex'

export default createStore({
  state: {
    Education:null ,
    Experience :null,
    Projects:null,
    Reviews:null,
    Error:null
  },
 
  mutations: {
    setEducation: (state,value) => {
      state.Education = value 
    },
    setExperience: (state,value) => {
      state.Experience = value 
    },
    setProjects: (state,value) => {
      state.Projects = value 
    },
    setReviews: (state,value) => {
      state.Reviews = value 
    },
    setError: (state,value) => {
      state.Error = value 
    }

  },
  actions: {
    async fetchData(context) {
      try {
        const response = await fetch('https://taysweb.github.io/taysweb_data.github.io/data/resume.json')
        const data = await response.json()
        context.commit('setResume', data)
      } catch (error) {
        context.commit('setError', error.message)
      }
    },

    async fetchData(context) {
      try {
        const response = await fetch('https://taysweb.github.io/taysweb_data.github.io/data/projects.json')
        const data = await response.json()
        context.commit('setProjects', data)
      } catch (error) {
        context.commit('setError', error.message)
      }
    },
    
    async fetchData(context) {
      try {
        const response = await fetch('https://taysweb.github.io/taysweb_data.github.io/data/reviews.json')
        const data = await response.json()
        context.commit('setReviews', data)
      } catch (error) {
        context.commit('setError', error.message)
      }
    }

  },

})
