import { ComponentShowcase } from "../ui/component-showcase";
import { BottomSheet } from "../advanced/BottomSheet";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

function BottomSheetDemo() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Bottom Sheet</h3>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => setOpen1(true)}>
            Abrir Bottom Sheet Simple
          </Button>
          <Button variant="outline" onClick={() => setOpen2(true)}>
            Abrir con Formulario
          </Button>
        </div>

        <BottomSheet open={open1} onClose={() => setOpen1(false)}>
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-semibold">Título del Bottom Sheet</h3>
            <p className="text-sm text-muted-foreground">
              Este es un bottom sheet que aparece desde la parte inferior de la pantalla.
              Ideal para móviles y tablets.
            </p>
            <div className="flex gap-2">
              <Button onClick={() => setOpen1(false)}>Aceptar</Button>
              <Button variant="outline" onClick={() => setOpen1(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </BottomSheet>

        <BottomSheet open={open2} onClose={() => setOpen2(false)}>
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-semibold">Formulario Rápido</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => setOpen2(false)}>
                  Guardar
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setOpen2(false)}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </BottomSheet>
      </Card>
    </div>
  );
}

export function BottomSheetPage() {
  return (
    <ComponentShowcase
      title="Bottom Sheet"
      description="Sheet que aparece desde la parte inferior de la pantalla. Popular en diseño móvil para acciones contextuales."
      previewComponent={<BottomSheetDemo />}
      codeBlock={`import { BottomSheet } from "@biomahd-creator/financio-design-system/advanced";

const [open, setOpen] = useState(false);

<BottomSheet open={open} onClose={() => setOpen(false)}>
  <div className="p-6">
    <h3>Contenido</h3>
    <Button onClick={() => setOpen(false)}>Cerrar</Button>
  </div>
</BottomSheet>`}
      usageExample={`// Filtros en móvil
<BottomSheet open={filtersOpen} onClose={() => setFiltersOpen(false)}>
  <FilterForm onApply={applyFilters} />
</BottomSheet>`}
    />
  );
}
