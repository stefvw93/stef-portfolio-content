import { list } from "@keystone-6/core";
import { text, password } from "@keystone-6/core/fields";
import { Lists } from ".keystone/types";
import { document } from "@keystone-6/fields-document";

export const lists: Lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
        isFilterable: true,
      }),

      password: password({ validation: { isRequired: true } }),
    },

    ui: {
      listView: {
        initialColumns: ["name"],
      },
    },
  }),

  Post: list({
    fields: {
      title: text(),
      slug: text({ isIndexed: "unique", isFilterable: true }),
      content: document({ formatting: true, dividers: true, links: true }),
    },
  }),
};
