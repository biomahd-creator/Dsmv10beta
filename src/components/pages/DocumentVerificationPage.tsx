import { ComponentShowcase } from "../ui/component-showcase";
import { DocumentVerificationStatus } from "../business/DocumentVerificationStatus";
import { Card } from "../ui/card";

function DocumentVerificationDemo() {
  return (
    <div className="space-y-4">
      <DocumentVerificationStatus
        documentName="Cédula de Identidad"
        status="verified"
        message="Documento verificado exitosamente"
        timestamp={new Date("2024-01-20T10:30:00")}
      />
      <DocumentVerificationStatus
        documentName="Comprobante de Domicilio"
        status="processing"
        message="En revisión por el equipo de cumplimiento"
        timestamp={new Date("2024-01-22T14:15:00")}
      />
      <DocumentVerificationStatus
        documentName="Estados Financieros"
        status="pending"
        message="Pendiente de carga"
      />
      <DocumentVerificationStatus
        documentName="Escritura de Constitución"
        status="rejected"
        message="Documento ilegible, favor reenviar en mejor calidad"
        timestamp={new Date("2024-01-21T16:45:00")}
      />
    </div>
  );
}

export function DocumentVerificationPage() {
  return (
    <ComponentShowcase
      title="Document Verification Status"
      description="Muestra el estado de verificación de documentos en procesos de onboarding o compliance."
      previewComponent={<DocumentVerificationDemo />}
      codeBlock={`import { DocumentVerificationStatus } from "@biomahd-creator/financio-design-system/business";

<DocumentVerificationStatus
  documentName="Cédula de Identidad"
  status="verified"
  message="Documento verificado exitosamente"
  timestamp={new Date()}
/>`}
      usageExample={`// Lista de documentos en proceso KYC
{documents.map(doc => (
  <DocumentVerificationStatus
    key={doc.id}
    documentName={doc.name}
    status={doc.status}
    message={doc.message}
    timestamp={doc.updatedAt}
  />
))}`}
    />
  );
}
