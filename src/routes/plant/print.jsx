import { useState } from "react";
import { redirect, useActionData, useNavigation } from "react-router";

import stylesheet from "./print.css?url";

// Components
import PrintForm from "../../components/plant/print/PrintForm";
import PrintPreview from "../../components/plant/print/PrintPreview";
import { requireAuth } from "../../utils";

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export function meta() {
  return [
    { title: "Print price tags - Bloomable" },
    {
      name: "description",
      content: "Enter information and print a price tag from Bloomable.",
    },
  ];
}

function PlantPrintPage() {
  const [details, setDetails] = useState({});
  const { state } = useNavigation();
  const errors = useActionData();
  const isSubmitting = state === "submitting";

  return (
    <div className="plant-print">
      <PrintForm
        details={details}
        setDetails={setDetails}
        isSubmitting={isSubmitting}
        errors={errors}
      />
      <PrintPreview details={details} />
    </div>
  );
}

export async function clientLoader() {
  const isLoggedIn = await requireAuth();

  if (!isLoggedIn) return redirect("/login");

  return null;
}

export async function clientAction({ request }) {
  const formData = await request.formData();
  const errors = {};
  window.print();

  return null;
}

export default PlantPrintPage;
