import { ComponentShowcase } from "../ui/component-showcase";
import { FileUploader } from "../advanced/FileUploader";
import { toast } from "sonner@2.0.3";

export function FileUploaderPage() {
  const handleUpload = (files: File[]) => {
    console.log("Files uploaded:", files);
    toast.success(`${files.length} files successfully uploaded!`);
  };

  return (
    <ComponentShowcase
      title="File Uploader"
      description="Advanced file upload component with drag & drop, previews, and progress tracking."
      category="Advanced"
      
      // Main Preview
      preview={
        <div className="w-full max-w-xl">
          <FileUploader 
            maxFiles={5}
            maxSize={5 * 1024 * 1024}
            accept={["image/png", "image/jpeg", "application/pdf"]}
            onUpload={handleUpload}
          />
        </div>
      }
      
      // Code
      code={`import { FileUploader } from "@/components/advanced/FileUploader";
import { toast } from "sonner";

export function FileUploaderDemo() {
  const handleUpload = (files: File[]) => {
    toast.success(\`\${files.length} files uploaded\`);
  };

  return (
    <FileUploader 
      maxFiles={5}
      maxSize={5 * 1024 * 1024} // 5MB
      accept={["image/png", "image/jpeg", "application/pdf"]}
      onUpload={handleUpload}
    />
  );
}`}
      
      // Usage
      usage="Importa el componente FileUploader. Este componente maneja internamente la zona de arrastre (drag & drop), validación de tipos y tamaños de archivo, y previsualización de imágenes."
      
      props={[
        {
          name: "onUpload",
          type: "(files: File[]) => void",
          description: "Callback ejecutado cuando se suben archivos válidos",
        },
        {
          name: "maxFiles",
          type: "number",
          default: "1",
          description: "Número máximo de archivos permitidos",
        },
        {
          name: "maxSize",
          type: "number",
          description: "Tamaño máximo por archivo en bytes",
        },
        {
          name: "accept",
          type: "string[]",
          description: "Lista de tipos MIME permitidos (ej: ['image/*'])",
        },
      ]}
      
      examples={[
        {
          title: "Single File Upload",
          description: "Configuración para subir un solo archivo (ej: Foto de perfil)",
          preview: (
            <div className="w-full max-w-xl">
              <FileUploader 
                maxFiles={1}
                maxSize={2 * 1024 * 1024}
                accept={["image/*"]}
                onUpload={(files) => toast.success("Profile photo updated")}
              />
            </div>
          ),
          code: `<FileUploader 
  maxFiles={1}
  maxSize={2 * 1024 * 1024}
  accept={["image/*"]}
  onUpload={handleUpload}
/>`
        },
        {
          title: "PDF Only",
          description: "Restringir subida solo a documentos PDF",
          preview: (
            <div className="w-full max-w-xl">
              <FileUploader 
                maxFiles={3}
                accept={["application/pdf"]}
                onUpload={(files) => toast.success("Documents uploaded")}
              />
            </div>
          ),
          code: `<FileUploader 
  maxFiles={3}
  accept={["application/pdf"]}
  onUpload={handleUpload}
/>`
        }
      ]}
    />
  );
}
