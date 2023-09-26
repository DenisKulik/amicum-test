export default {
  state: {
    profiles: [
      {
        id: 1,
        name: "Моисеев Михаил Сергеевич",
        birthdate: "13.08.1980",
        report: "Таб №: ГОКИ 0000",
        position:
          "Электрослесарь (слесарь дежурный и по ремонту оборудования) I разряда",
        isSuccessBriefing: true,
        isSuccessExaminer: true,
        successTestsCount: 122,
        totalTestsCount: 200,
        daysBeforeCertification: 1825,
        notificationCount: 2,
      },
      {
        id: 2,
        name: "Иванова Елена Александровна",
        birthdate: "25.05.1995",
        report: "Таб №: ГОКИ 0001",
        position: "Инженер-конструктор",
        isSuccessBriefing: false,
        isSuccessExaminer: false,
        successTestsCount: 60,
        totalTestsCount: 80,
        daysBeforeCertification: 365,
        notificationCount: 1,
      },
      {
        id: 3,
        name: "Петров Алексей Васильевич",
        birthdate: "15.09.1988",
        report: "Таб №: ГОКИ 0002",
        position: "Главный инженер",
        isSuccessBriefing: true,
        isSuccessExaminer: false,
        successTestsCount: 80,
        totalTestsCount: 80,
        daysBeforeCertification: 25,
        notificationCount: 0,
      },
      {
        id: 4,
        name: "Неизвестно",
        birthdate: "Неизвестно",
        report: "Неизвестно",
        position: "Неизвестно",
        isSuccessBriefing: null,
        isSuccessExaminer: null,
        successTestsCount: 0,
        totalTestsCount: 40,
        daysBeforeCertification: 0,
        notificationCount: 0,
      },
    ],
    currentProfile: 0, // change index to display a different profile
  },
  mutations: {
    changeCurrentProfile(state, profileIndex) {
      state.currentProfile = profileIndex;
    },
  },
  getters: {
    allProfiles(state) {
      return state.profiles;
    },
    currentProfile(state) {
      return state.currentProfile;
    },
  },
};
