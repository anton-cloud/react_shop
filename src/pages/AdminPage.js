import React from "react";
import AdvForm from "../components/admin/AdvForm";
import Section from "../components/section/Section";

const AdminPage = ({addProduct}) => {
  return (
    <Section title="Administration">
      <AdvForm addProduct={addProduct} />
    </Section>
  );
};

export default AdminPage;
