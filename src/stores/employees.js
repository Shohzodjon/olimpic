import { defineStore } from "pinia";
import { ref } from "vue";
import $axios from "@/plugins/axios";
export const useEmployeesStore = defineStore("employees", () => {
  const bos = ref([]);
  const secretary = ref([]);
  const deputy = ref([]);
  const advisor = ref([]);
  const department = ref([]);
  const employees=ref([]);
  const executive=ref([]);
  const fetchBosList = async () => {
    try {
      const res = await $axios.get("/manage/predsedatel");
      bos.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSecretaryList = async () => {
    try {
      const res = await $axios.get("/manage/generalnyj-sekretar");
      secretary.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDeputyList = async () => {
    try {
      const res = await $axios.get("/manage/zamestiteli-predsedatelja");
      deputy.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAdvisorList = async () => {
    try {
      const res = await $axios.get("/manage/sovetniki-predsedatelja");
      advisor.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchExsecutev= async () => {
    try {
      const res = await $axios.get("/manage/ispolnitelnyj-komitet");
      executive.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDepartmentList = async () => {
    try {
      const res = await $axios.get("/manage/direktora-departamentov");
      department.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  // ispolnitelnyj-komitet
  const fetchEmployeeList = async () => {
    try {
      const res = await $axios.get("/manage/m_category");
      employees.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    bos,
    secretary,
    deputy,
    advisor,
    department,
    employees,
    executive,
    fetchBosList,
    fetchSecretaryList,
    fetchDeputyList,
    fetchAdvisorList,
    fetchDepartmentList,
    fetchEmployeeList,
    fetchExsecutev
  };
});
