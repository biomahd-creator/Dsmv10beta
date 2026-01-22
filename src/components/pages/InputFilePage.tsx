import { ComponentShowcase } from "../ui/component-showcase";
import { InputFile } from "../ui/input-file";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

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
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente InputFile</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onFilesChange</code></td>
                    <td className="p-2">(files: File[]) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback cuando cambia la selección de archivos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">maxFiles</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">1</td>
                    <td className="p-2">Número máximo de archivos permitidos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">showPreview</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">true</td>
                    <td className="p-2">Mostrar lista de archivos seleccionados</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">accept</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Tipos de archivo permitidos (ej: .pdf, image/*, .doc)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Deshabilita el input</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">placeholder</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Texto placeholder en el área de drop</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS adicionales</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente InputFile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📄 Carga de Documentos</h4>
                  <p className="text-sm text-muted-foreground">
                    Facturas, contratos, documentos de identidad en procesos de onboarding
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🖼️ Galería de Imágenes</h4>
                  <p className="text-sm text-muted-foreground">
                    Subir fotos de productos, avatares de usuario o imágenes de perfil
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Importación de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    CSV, Excel u otros formatos para importar datos masivos al sistema
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📎 Adjuntos de Tickets</h4>
                  <p className="text-sm text-muted-foreground">
                    Añadir archivos adjuntos a tickets de soporte o reportes de bugs
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💼 Portafolio y CVs</h4>
                  <p className="text-sm text-muted-foreground">
                    Subir CV en PDF, cartas de presentación o documentos profesionales
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗂️ Gestión de Archivos</h4>
                  <p className="text-sm text-muted-foreground">
                    Múltiples archivos para proyectos, documentación técnica o recursos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de InputFile</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">accept</code> para restringir tipos de archivo y evitar errores de usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Establece <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">maxFiles</code> según el contexto (1 para avatar, 5+ para galería)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Combina con validación de tamaño de archivo (ej: máx 5MB) en el callback <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">onFilesChange</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa placeholder descriptivo que indique el tipo de archivo esperado (ej: "Arrastra un PDF o haz click")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa feedback visual de error si el archivo no cumple las restricciones (tipo o tamaño)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para UX avanzada, muestra preview de imágenes o iconos por tipo de archivo en la lista</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">showPreview=false</code> si manejas la UI de archivos personalizada fuera del componente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Añade texto de ayuda indicando límite de tamaño y formatos permitidos cerca del input</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}