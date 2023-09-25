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
        daysBeforeCertification: 365,
        notificationCount: 1,
      },
    ],
  },
  getters: {
    currentProfiles(state) {
      return state.profiles;
    },
  },
};
