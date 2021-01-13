import React, { createElement } from "react";
import { useCMS, useForm, usePlugin } from "tinacms";
import { TinaVueRenderer } from "./tinaVueRenderer";

export function EditablePage({ app }) {
  const cms = useCMS();
  const [modifiedValues, form] = useForm({
    ...EditablePageTemplate,
    id: "page",
    loadInitialValues: async () => {
      return cms.api.example.getPage();
    },
    onSubmit: (values) => {
      console.log(values);

      cms.alerts.success("Pretending to save!");
    }
  });

  usePlugin(form);

  return createElement(TinaVueRenderer, { app, page: modifiedValues });
}

const EditablePageTemplate = {
  label: "Page",
  fields: [
    { name: "title", label: "Title", component: "text" },
    { name: "description", label: "Description", component: "textarea" }
  ]
};
