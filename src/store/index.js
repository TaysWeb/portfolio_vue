import { createStore } from 'vuex'

export default createStore({
  state: {
    education:null ,
    experience:null ,
    Projects:null,
    review:null,
    Error:null
  },
 
  mutations: {
    setEducation: (state,value) => {
      state.education = value 
    },
    setExperience: (state,value) => {
      state.experience = value 
    },
    setProjects: (state,value) => {
      state.Projects = value 
    },
    setreview: (state,value) => {
      state.review = value 
    },
    setError: (state,value) => {
      state.Error = value 
    }

  },
  actions: {
    async fetchEducation(context) {
      try {
        let response = await fetch('https://taysweb.github.io/taysweb_data.github.io/data/resume.json')
        let {education} = await response.json()
        context.commit('setEducation', education)
   
      } catch (error) {
        context.commit('setError', error.message)
      }
    },
    async fetchExperience(context) {
      try {
        let response = await fetch('https://taysweb.github.io/taysweb_data.github.io/data/resume.json')
        let {experience} = await response.json()
        context.commit('setExperience', experience)
      } catch (error) {
        context.commit('setError', error.message)
      }
    },
 
fetchProjects:  async (context) => {
    
  fetch('https://taysweb.github.io/taysweb_data.github.io/data/projets.json')
  .then((res) => res.json())
  .then((Projects) => context.commit("setEducation", Projects));

},
       fetchreview  :  async (context) => {
        fetch('https://taysweb.github.io/taysweb_data.github.io/data/reviews.json')
        .then((res) => res.json())
        .then((review) => context.commit("setreview", review));
        // console.log(review)
    
    },

  },

})
