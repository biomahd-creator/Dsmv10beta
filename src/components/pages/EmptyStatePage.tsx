import { ComponentShowcase } from "../ui/component-showcase";
import { EmptyState } from "../patterns/EmptyState";
import { FileQuestion, Inbox, Users, CreditCard } from "lucide-react";
import { toast } from "sonner";

function EmptyStateDemo() {
  return (
    <div className="grid gap-6">
      <EmptyState
        icon={<FileQuestion className="size-12" />}
        title="No hay facturas"
        description="Aún no has cargado ninguna factura. Comienza agregando tu primera factura para iniciar el proceso de factoring."
        action={{
          label: "Agregar Factura",
          onClick: () => toast.success("Redirigiendo a formulario..."),
        }}
      />
      
      <div className="grid md:grid-cols-2 gap-6">
        <EmptyState
          icon={<Inbox className="size-10" />}
          title="Bandeja vacía"
          description="No tienes notificaciones pendientes"
        />
        <EmptyState
          icon={<Users className="size-10" />}
          title="Sin usuarios"
          description="Invita a tu equipo para colaborar"
          action={{
            label: "Invitar",
            onClick: () => toast.info("Invitando..."),
          }}
        />
      </div>
    </div>
  );
}

export function EmptyStatePage() {
  return (
    <ComponentShowcase
      title="Empty State"
      description="Estado vacío con mensaje, icono opcional y call-to-action. Mejora la experiencia cuando no hay contenido."
      previewComponent={<EmptyStateDemo />}
      codeBlock={`import { EmptyState } from "@biomahd-creator/financio-design-system/patterns";

<EmptyState
  icon={<FileQuestion className="size-12" />}
  title="No hay facturas"
  description="Comienza agregando tu primera factura"
  action={{
    label: "Agregar Factura",
    onClick: () => handleAdd(),
  }}
/>`}
      usageExample={`// Lista vacía de items
{items.length === 0 ? (
  <EmptyState
    title="Sin items"
    description="Agrega tu primer item"
    action={{ label: "Agregar", onClick: handleAdd }}
  />
) : (
  <ItemList items={items} />
)}`}
    />
  );
}
