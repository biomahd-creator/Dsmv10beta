import { ComponentShowcase } from "../ui/component-showcase";
import { InputFile } from "../ui/input-file";
import { useState } from "react";

export function InputFilePage() {
  const [files1, setFiles1] = useState<File[]>([]);
  const [files2, setFiles2] = useState<File[]>([]);
  const [files3, setFiles3] = useState<File[]>([]);

  return (
    <ComponentShowcase
      title="Input File"
      description="Componente para carga de archivos con drag & drop, preview de archivos seleccionados y soporte para múltiples archivos."
      category="Forms"
      
      // Main Preview
      preview={
        <div className="w-full max-w-md">
           <InputFile
              onFilesChange={setFiles1}
              maxFiles={1}
              accept="image/*"
              placeholder="Arrastra una imagen o haz click"
            />
        </div>
      }
      
      // Code
      code={`import { InputFile } from "@/components/ui/input-file";
import { useState } from "react";

export function InputFileDemo() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <InputFile
      onFilesChange={setFiles}
      maxFiles={1}
      accept="image/*"
    />
  );
}`}
      
      // Usage
      usage="Importa InputFile. Este componente mejora el input file nativo agregando soporte para Drag & Drop y previsualización de archivos seleccionados."
      
      props={[
        {
          name: "onFilesChange",
          type: "(files: File[]) => void",
          description: "Callback cuando cambia la selección de archivos",
        },
        {
          name: "maxFiles",
          type: "number",
          default: "1",
          description: "Número máximo de archivos permitidos",
        },
        {
          name: "showPreview",
          type: "boolean",
          default: "true",
          description: "Mostrar lista de archivos seleccionados",
        },
        {
          name: "accept",
          type: "string",
          description: "Tipos de archivo permitidos (ej: .pdf, image/*)",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Deshabilita el input",
        },
      ]}
      
      examples={[
        {
          title: "Multiple Files",
          description: "Permite seleccionar múltiples archivos (hasta 5)",
          preview: (
            <div className="w-full max-w-md">
              <InputFile
                onFilesChange={setFiles2}
                maxFiles={5}
                placeholder="Selecciona hasta 5 archivos"
              />
            </div>
          ),
          code: `<InputFile
  maxFiles={5}
  placeholder="Selecciona hasta 5 archivos"
  onFilesChange={setFiles}
/>`
        },
        {
          title: "No Preview",
          description: "Oculta la lista de archivos seleccionados (útil si manejas la UI de archivos por separado)",
          preview: (
            <div className="w-full max-w-md">
              <InputFile
                onFilesChange={setFiles3}
                showPreview={false}
                placeholder="Archivos ocultos"
              />
            </div>
          ),
          code: `<InputFile
  showPreview={false}
  onFilesChange={setFiles}
/>`
        },
        {
          title: "PDF Only",
          description: "Restringido solo a archivos PDF",
          preview: (
            <div className="w-full max-w-md">
              <InputFile
                accept=".pdf,application/pdf"
                placeholder="Selecciona archivos PDF"
              />
            </div>
          ),
          code: `<InputFile
  accept=".pdf,application/pdf"
  placeholder="Selecciona archivos PDF"
/>`
        },
        {
          title: "Disabled",
          description: "Estado deshabilitado",
          preview: (
            <div className="w-full max-w-md">
              <InputFile
                disabled
                placeholder="Input deshabilitado"
              />
            </div>
          ),
          code: `<InputFile disabled />`
        }
      ]}
    />
  );
}
