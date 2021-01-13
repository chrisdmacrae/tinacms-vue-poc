import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export function TinaVueRenderer({ app, page }) {
  const renderApp = React.useMemo(
    () => (app.$el ? createPortal(null, app.$el) : null),
    [app.$el]
  );

  useEffect(() => {
    app.page = {
      title: "pretty girl",
      description: "yes"
    };
  });

  return renderApp;
}
