import { ComponentShowcase } from "../ui/component-showcase";
import * as React from "react";
import { Badge } from "../ui/badge";
import { RichTextEditor } from "../advanced/RichTextEditor";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";

function RichTextEditorPreview() {
  const [content, setContent] = React.useState("<h3>Initial Content</h3><p>Try editing this text to see the <b>rich text</b> features in action.</p>");

  const handleSave = () => {
    console.log("Saved content:", content);
    toast.success("Content saved successfully!");
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Main Editor */}
      <Card>
        <CardHeader>
          <CardTitle>Content Editor</CardTitle>
          <CardDescription>
            Compose your document with rich formatting options.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Description / Notes</Label>
            <RichTextEditor 
              value={content} 
              onChange={setContent} 
              className="min-h-[300px]"
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSave}>Save Content</Button>
          </div>
        </CardContent>
      </Card>

      {/* Live Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Live Preview (HTML Output)</CardTitle>
          <CardDescription>
            Real-time raw HTML rendering of the editor content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md font-mono text-xs overflow-x-auto whitespace-pre-wrap break-all">
            {content}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function RichTextEditorPage() {
  return (
    <ComponentShowcase
      title="Rich Text Editor"
      description="WYSIWYG editor for rich content creation with formatting tools."
      badges={[
        { text: "Advanced", variant: "default" },
        { text: "New", variant: "outline", className: "border-green-500 text-green-500" }
      ]}
      previewComponent={<RichTextEditorPreview />}
      codeBlock={`import { RichTextEditor } from "@/components/advanced/RichTextEditor";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function MyEditor() {
  const [content, setContent] = useState("<h3>Title</h3><p>Content here...</p>");

  const handleSave = () => {
    console.log("Saved content:", content);
    // Send to API or save to database
  };

  return (
    <div className="space-y-4">
      <Label>Description</Label>
      <RichTextEditor 
        value={content} 
        onChange={setContent} 
        className="min-h-[300px]"
      />
      <Button onClick={handleSave}>
        Save Content
      </Button>
    </div>
  );
}`}
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Características</CardTitle>
              <CardDescription>Funcionalidades del editor WYSIWYG</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium">✅ Formato de Texto</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Negrita</strong>, <em>Cursiva</em>, <u>Subrayado</u></li>
                    <li>• Encabezados (H1, H2, H3)</li>
                    <li>• Listas ordenadas y desordenadas</li>
                    <li>• Alineación de texto (izquierda, centro, derecha)</li>
                    <li>• Links y enlaces externos</li>
                    <li>• Citas y bloques de código</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">🎨 Editor Visual</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Edición WYSIWYG en tiempo real</li>
                    <li>• Toolbar con iconos intuitivos</li>
                    <li>• Preview automático del HTML generado</li>
                    <li>• Soporte para copiar/pegar desde Word</li>
                    <li>• Atajos de teclado (Ctrl+B, Ctrl+I, etc.)</li>
                    <li>• Compatible con modo claro/oscuro</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API del componente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Prop</th>
                      <th className="text-left p-2">Tipo</th>
                      <th className="text-left p-2">Default</th>
                      <th className="text-left p-2">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground text-sm">
                    <tr className="border-b">
                      <td className="p-2 font-mono">value *</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Contenido HTML del editor</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onChange *</td>
                      <td className="p-2">(value: string) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback cuando cambia el contenido</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">placeholder</td>
                      <td className="p-2">string</td>
                      <td className="p-2">"Escribe aquí..."</td>
                      <td className="p-2">Texto placeholder</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Escenarios de aplicación en sistemas de factoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📝 Notas de Operación</h4>
                  <p className="text-sm text-muted-foreground">
                    Crear y editar notas detalladas sobre operaciones de factoring con formato rico.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📄 Términos y Condiciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Redactar condiciones contractuales con formato profesional y estructurado.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📧 Templates de Email</h4>
                  <p className="text-sm text-muted-foreground">
                    Crear plantillas de correo HTML para comunicación con clientes.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📊 Reportes Ejecutivos</h4>
                  <p className="text-sm text-muted-foreground">
                    Generar informes con secciones formateadas, listas y encabezados.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">💬 Comentarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Permitir comentarios enriquecidos en revisiones de facturas.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📋 Documentación</h4>
                  <p className="text-sm text-muted-foreground">
                    Crear documentos internos con formato y estructura clara.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}