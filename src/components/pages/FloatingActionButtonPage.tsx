import { ComponentShowcase } from "../ui/component-showcase";
import { FloatingActionButton } from "../advanced/FloatingActionButton";
import { Card } from "../ui/card";
import { Plus, Edit, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";

function FABDemo() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Floating Action Button</h3>
        <div className="relative h-[400px] border rounded-lg bg-muted/20 p-4">
          <p className="text-sm text-muted-foreground">
            Contenido de la página. El FAB aparece flotando en la esquina inferior derecha.
          </p>
          
          <FloatingActionButton
            icon={<Plus className="size-6" />}
            onClick={() => toast.success("Acción principal")}
            ariaLabel="Agregar nuevo item"
          />
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Variantes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Plus />, label: "Agregar", color: "bg-primary hover:bg-primary/90" },
            { icon: <Edit />, label: "Editar", color: "bg-blue-600 hover:bg-blue-700" },
            { icon: <MessageCircle />, label: "Mensaje", color: "bg-green-600 hover:bg-green-700" },
            { icon: <Phone />, label: "Llamar", color: "bg-orange-600 hover:bg-orange-700" },
          ].map((item, i) => (
            <div key={i} className="relative h-32 border rounded-lg flex items-center justify-center bg-muted/20">
              <div className={`absolute bottom-4 right-4 rounded-full p-4 shadow-lg ${item.color} text-white cursor-pointer`}>
                {item.icon}
              </div>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function FloatingActionButtonPage() {
  return (
    <ComponentShowcase
      title="Floating Action Button (FAB)"
      description="Botón flotante para la acción principal de la página. Común en aplicaciones móviles y material design."
      previewComponent={<FABDemo />}
      codeBlock={`import { FloatingActionButton } from "@biomahd-creator/financio-design-system/advanced";

<FloatingActionButton
  icon={<Plus className="size-6" />}
  onClick={() => createNew()}
  ariaLabel="Crear nuevo"
/>`}
      usageExample={`// Agregar nueva factura
<FloatingActionButton
  icon={<Plus />}
  onClick={() => navigate('/facturas/nueva')}
  ariaLabel="Agregar nueva factura"
/>`}
    />
  );
}
