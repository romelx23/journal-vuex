export default {
  name: "diario",
  component: () => import("../../components/layouts/DayBookLayout.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () => import("../../pages/daybook/NoEntrySelected.vue"),
    },
    {
      path: ":id",
      name: "entry",
      component: () => import("../../pages/daybook/EntryPage.vue"),
    },
  ],
};
