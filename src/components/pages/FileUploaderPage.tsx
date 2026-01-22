import { ComponentShowcase } from "../ui/component-showcase";
import { FileUploader } from "../advanced/FileUploader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
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

      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades Detalladas</CardTitle>
              <CardDescription>API completa del componente FileUploader</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Prop</th>
                    <th className="text-left p-2 text-foreground">Tipo</th>
                    <th className="text-left p-2 text-foreground">Default</th>
                    <th className="text-left p-2 text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onUpload *</code></td>
                    <td className="p-2">(files: File[]) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback ejecutado cuando se suben archivos válidos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">maxFiles</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">1</td>
                    <td className="p-2">Número máximo de archivos permitidos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">maxSize</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">Infinity</td>
                    <td className="p-2">Tamaño máximo por archivo en bytes (ej: 5 * 1024 * 1024 = 5MB)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">accept</code></td>
                    <td className="p-2">string[]</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Lista de tipos MIME permitidos (ej: ["image/*", "application/pdf"])</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Deshabilita el componente</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente FileUploader</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📸 Foto de Perfil</h4>
                  <p className="text-sm text-muted-foreground">
                    Subida de foto de usuario con preview inmediato y validación de tamaño
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📄 Documentos Legales</h4>
                  <p className="text-sm text-muted-foreground">
                    Carga de contratos, facturas o documentos PDF con límite de tamaño
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🖼️ Galería de Imágenes</h4>
                  <p className="text-sm text-muted-foreground">
                    Subida múltiple de imágenes con previews y gestión de archivos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Importación de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Carga de archivos CSV o Excel para importar datos masivos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💾 Archivos Adjuntos</h4>
                  <p className="text-sm text-muted-foreground">
                    Agregar adjuntos a mensajes, tickets o tareas con soporte multi-archivo
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎨 Assets de Diseño</h4>
                  <p className="text-sm text-muted-foreground">
                    Subida de logos, banners o recursos visuales en formato específico
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del FileUploader</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Define <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">maxSize</code> adecuado según contexto (2MB para fotos, 10MB para docs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">accept</code> para restringir tipos MIME y evitar formatos no deseados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra feedback visual claro cuando se exceda el límite de archivos o tamaño</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa drag & drop para mejor UX, permitiendo arrastrar archivos desde el escritorio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye preview de imágenes antes de confirmar la subida para validación visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Valida archivos en el cliente pero también en el servidor para seguridad completa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra progreso de subida con ProgressBar para archivos grandes (&gt;1MB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Permite eliminar archivos antes de subir y reintentar si la subida falla</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}