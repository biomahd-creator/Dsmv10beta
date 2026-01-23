import { ComponentShowcase } from "../ui/component-showcase";
import { TransferList } from "../advanced/TransferList";
import { Card } from "../ui/card";
import { useState } from "react";

function TransferListDemo() {
  const [leftItems, setLeftItems] = useState([
    { id: "1", label: "Usuario 1" },
    { id: "2", label: "Usuario 2" },
    { id: "3", label: "Usuario 3" },
    { id: "4", label: "Usuario 4" },
    { id: "5", label: "Usuario 5" },
  ]);

  const [rightItems, setRightItems] = useState([
    { id: "6", label: "Usuario 6" },
    { id: "7", label: "Usuario 7" },
  ]);

  const handleTransfer = (
    items: { id: string; label: string }[],
    direction: "left" | "right"
  ) => {
    if (direction === "right") {
      // Move from left to right
      setLeftItems(leftItems.filter((item) => !items.find((i) => i.id === item.id)));
      setRightItems([...rightItems, ...items]);
    } else {
      // Move from right to left
      setRightItems(rightItems.filter((item) => !items.find((i) => i.id === item.id)));
      setLeftItems([...leftItems, ...items]);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Transfer List</h3>
      <TransferList
        leftItems={leftItems}
        rightItems={rightItems}
        leftTitle="Disponibles"
        rightTitle="Seleccionados"
        onTransfer={handleTransfer}
      />
    </Card>
  );
}

export function TransferListPage() {
  return (
    <ComponentShowcase
      title="Transfer List"
      description="Componente para mover items entre dos listas. Ideal para asignación de permisos, roles o recursos."
      previewComponent={<TransferListDemo />}
      codeBlock={`import { TransferList } from "@biomahd-creator/financio-design-system/advanced";

const [available, setAvailable] = useState(users);
const [selected, setSelected] = useState([]);

const handleTransfer = (items, direction) => {
  if (direction === "right") {
    setAvailable(available.filter(u => !items.includes(u)));
    setSelected([...selected, ...items]);
  } else {
    setSelected(selected.filter(u => !items.includes(u)));
    setAvailable([...available, ...items]);
  }
};

<TransferList
  leftItems={available}
  rightItems={selected}
  leftTitle="Disponibles"
  rightTitle="Seleccionados"
  onTransfer={handleTransfer}
/>`}
      usageExample={`// Asignar usuarios a un proyecto
<TransferList
  leftItems={allUsers}
  rightItems={projectUsers}
  leftTitle="Todos los usuarios"
  rightTitle="Usuarios del proyecto"
  onTransfer={handleTransfer}
/>`}
    />
  );
}
