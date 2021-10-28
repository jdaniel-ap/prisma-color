import React from "react";

const messages = {
  A: "Cada litro de tinta Prisma é capaz de pintar 5 metros quadrados",
  B: "Prisma esta presente só na region sul do pais",
  C: "Atualmente temos só quatro presentações",
  D: "Só um paso mais pra o calculo ;)",
};

function Aside({ page }) {
  return (
    <aside>
      <div>
        <p>{page ? messages[page] : "Prisma-color"}</p>
      </div>
    </aside>
  );
}

export default Aside;
