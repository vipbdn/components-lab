import React from "react";
import Spinner from "../components/ui/Spinner/Spinner";

const SpinnerPlayground = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Spinner />

      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />

      <Spinner variant="secondary" />
      <Spinner variant="danger" />
      <Spinner variant="muted" />

      <Spinner label="Loading users..." />
      <Spinner label="dfdssd" />
    </div>
  );
};

export default SpinnerPlayground;
