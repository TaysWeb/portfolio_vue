import { createStore } from 'vuex'

export default createStore({
  state: {
    Education:null ,
    Experience:null ,
    Projects:null,
    review:null,
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
    setreview: (state,value) => {
      state.review = value 
    },
    setError: (state,value) => {
      state.Error = value 
    }

  },
  actions: {
    // async fetchResume(context) {
    //   try {
    //     const response = await fetch('https://taysweb.github.io/taysweb_data.github.io/data/resume.json')
    //     const data = await response.json()
    //     context.commit('setResume', data)
    //   } catch (error) {
    //     context.commit('setError', error.message)
    //   }
    // },
    
    fetchEduction  :  async (context) => {
    
      fetch('https://taysweb.github.io/taysweb_data.github.io/data/resume.json')
      .then((res) => res.json())
      .then((Education) => context.commit("setEducation", Education));
  
  },
  fetchExperience :  async (context) => {
    
    fetch('https://taysweb.github.io/taysweb_data.github.io/data/resume.json')
    .then((res) => res.json())
    .then((Experience) => context.commit("setExperience", Experience));

},
fetchEduction  :  async (context) => {
    
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
