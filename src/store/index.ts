import { createStore } from "vuex";


interface FormData {
  name: string,
  email: string,
  phone: string,
  planOption: string,
  addOnOptions: string[],
}

export interface PersonalInfo {
  name: string,
  email: string,
  phone: string,
}

export interface RootState {
  formData: FormData,
  step: number
}


const storedData: any = localStorage.getItem("formData")


export default createStore<RootState>({
  state: {
    formData: storedData ? JSON.parse(storedData) : {
      name: "",
      email: "",
      phone: "",
      planOption: "",
      addOnOptions: [],
    },
    step: 1
  },
  getters: {},
  mutations: {
    toggleStep(state, step: number) {
      state.step = step
    },
    addPersonalInfo(state, personalInfo: PersonalInfo) {
      state.formData = { ...state.formData, ...personalInfo }
      localStorage.setItem("formData", JSON.stringify(state.formData))
    }
  },
  actions: {
    toggleStep(context, step: number) {
      context.commit('toggleStep', step)
    },
    addPersonalInfo(context, personalInfo: PersonalInfo) {
      context.commit('addPersonalInfo', personalInfo)
    },
  },
  modules: {},
});
