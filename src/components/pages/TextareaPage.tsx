import { ComponentShowcase } from "../ui/component-showcase";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useState } from "react";

export function TextareaPage() {
  return (
    <ComponentShowcase
      title="Textarea"
      description="Displays a multi-line text input field for longer content like messages, descriptions, and comments."
      category="Forms"
      
      // Main Preview
      preview={
        <div className="w-full max-w-md space-y-4">
          <Textarea placeholder="Type your message here..." />
          <Textarea placeholder="Disabled textarea" disabled />
        </div>
      }
      
      // Main Code
      code={`import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo() {
  return (
    <div className="space-y-4">
      <Textarea placeholder="Type your message here..." />
      <Textarea placeholder="Disabled textarea" disabled />
    </div>
  );
}`}
      
      // Usage
      usage="Importa el componente Textarea desde @/components/ui/textarea. Ideal para formularios que requieren entrada de texto multilínea como comentarios, descripciones, mensajes, o cualquier contenido que supere una sola línea."
      usageCode={`import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function ContactForm() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea 
        id="message"
        placeholder="Enter your message..."
        rows={5}
      />
    </div>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "placeholder",
          type: "string",
          description: "Texto de ayuda cuando está vacío",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Deshabilita el textarea",
        },
        {
          name: "rows",
          type: "number",
          default: "3",
          description: "Número de líneas visibles",
        },
        {
          name: "value",
          type: "string",
          description: "Valor controlado del textarea",
        },
        {
          name: "defaultValue",
          type: "string",
          description: "Valor inicial no controlado",
        },
        {
          name: "onChange",
          type: "(e: ChangeEvent<HTMLTextAreaElement>) => void",
          description: "Callback cuando cambia el valor",
        },
        {
          name: "maxLength",
          type: "number",
          description: "Longitud máxima de caracteres",
        },
        {
          name: "required",
          type: "boolean",
          default: "false",
          description: "Campo requerido en formularios",
        },
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales",
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "With Label",
          description: "Textarea con label descriptivo para mejor accesibilidad",
          preview: (
            <div className="w-full max-w-md space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Enter your message here..." 
              />
            </div>
          ),
          code: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextareaWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea 
        id="message" 
        placeholder="Enter your message here..." 
      />
    </div>
  );
}`,
        },
        {
          title: "Different Sizes",
          description: "Control del tamaño mediante la prop rows",
          preview: (
            <div className="w-full max-w-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="small">Small (3 rows)</Label>
                <Textarea id="small" rows={3} placeholder="Small textarea..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medium">Medium (5 rows)</Label>
                <Textarea id="medium" rows={5} placeholder="Medium textarea..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="large">Large (10 rows)</Label>
                <Textarea id="large" rows={10} placeholder="Large textarea..." />
              </div>
            </div>
          ),
          code: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextareaSizes() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="small">Small (3 rows)</Label>
        <Textarea id="small" rows={3} placeholder="Small..." />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="medium">Medium (5 rows)</Label>
        <Textarea id="medium" rows={5} placeholder="Medium..." />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="large">Large (10 rows)</Label>
        <Textarea id="large" rows={10} placeholder="Large..." />
      </div>
    </div>
  );
}`,
        },
        {
          title: "With Helper Text",
          description: "Textarea con texto de ayuda y contador de caracteres",
          preview: (
            <div className="w-full max-w-md space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about yourself..." 
                rows={5}
              />
              <p className="text-muted-foreground">
                Maximum 500 characters
              </p>
            </div>
          ),
          code: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextareaWithHelper() {
  return (
    <div className="space-y-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea 
        id="bio" 
        placeholder="Tell us about yourself..." 
        rows={5}
      />
      <p className="text-sm text-muted-foreground">
        Maximum 500 characters
      </p>
    </div>
  );
}`,
        },
        {
          title: "Character Counter",
          description: "Textarea con contador de caracteres en tiempo real",
          preview: (
            <TextareaWithCounter />
          ),
          code: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function TextareaWithCounter() {
  const [value, setValue] = useState("");
  const maxLength = 200;

  return (
    <div className="space-y-2">
      <Label htmlFor="comment">Comment</Label>
      <Textarea
        id="comment"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write a comment..."
        maxLength={maxLength}
        rows={4}
      />
      <p className="text-sm text-muted-foreground text-right">
        {value.length}/{maxLength}
      </p>
    </div>
  );
}`,
        },
        {
          title: "Disabled State",
          description: "Textarea en estado deshabilitado",
          preview: (
            <div className="w-full max-w-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="disabled1">Disabled Empty</Label>
                <Textarea id="disabled1" disabled placeholder="This is disabled" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled2">Disabled with Content</Label>
                <Textarea 
                  id="disabled2" 
                  disabled 
                  defaultValue="This textarea is disabled and contains some text that cannot be edited."
                  rows={3}
                />
              </div>
            </div>
          ),
          code: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function DisabledTextarea() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="disabled1">Disabled Empty</Label>
        <Textarea 
          id="disabled1" 
          disabled 
          placeholder="This is disabled" 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="disabled2">Disabled with Content</Label>
        <Textarea 
          id="disabled2" 
          disabled 
          defaultValue="This textarea is disabled..."
          rows={3}
        />
      </div>
    </div>
  );
}`,
        },
        {
          title: "Form Integration",
          description: "Textarea integrado en un formulario completo",
          preview: (
            <div className="w-full max-w-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Textarea 
                  id="subject" 
                  placeholder="Email subject..."
                  rows={1}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="body">Message Body</Label>
                <Textarea 
                  id="body" 
                  placeholder="Write your message..."
                  rows={6}
                />
              </div>
              <div className="flex gap-2">
                <Button>Send</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          ),
          code: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function EmailForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Textarea 
          id="subject" 
          placeholder="Email subject..."
          rows={1}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="body">Message Body</Label>
        <Textarea 
          id="body" 
          placeholder="Write your message..."
          rows={6}
        />
      </div>
      
      <div className="flex gap-2">
        <Button type="submit">Send</Button>
        <Button type="button" variant="outline">Cancel</Button>
      </div>
    </form>
  );
}`,
        },
        {
          title: "Required Field",
          description: "Textarea como campo requerido con indicador visual",
          preview: (
            <div className="w-full max-w-md space-y-2">
              <Label htmlFor="required">
                Feedback <span className="text-destructive">*</span>
              </Label>
              <Textarea 
                id="required" 
                required
                placeholder="Your feedback is required..."
                rows={4}
              />
              <p className="text-muted-foreground">
                This field is required
              </p>
            </div>
          ),
          code: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function RequiredTextarea() {
  return (
    <div className="space-y-2">
      <Label htmlFor="required">
        Feedback <span className="text-destructive">*</span>
      </Label>
      <Textarea 
        id="required" 
        required
        placeholder="Your feedback is required..."
        rows={4}
      />
      <p className="text-sm text-muted-foreground">
        This field is required
      </p>
    </div>
  );
}`,
        },
        {
          title: "With Error State",
          description: "Textarea mostrando un estado de error",
          preview: (
            <div className="w-full max-w-md space-y-2">
              <Label htmlFor="error">Description</Label>
              <Textarea 
                id="error" 
                placeholder="Enter description..."
                className="border-destructive focus-visible:ring-destructive"
                rows={4}
              />
              <p className="text-destructive">
                Description must be at least 10 characters long
              </p>
            </div>
          ),
          code: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextareaWithError() {
  return (
    <div className="space-y-2">
      <Label htmlFor="error">Description</Label>
      <Textarea 
        id="error" 
        placeholder="Enter description..."
        className="border-destructive focus-visible:ring-destructive"
        rows={4}
      />
      <p className="text-sm text-destructive">
        Description must be at least 10 characters long
      </p>
    </div>
  );
}`,
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Textarea</CardDescription>
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
                      <td className="p-2 font-mono">value</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Valor controlado del textarea (modo controlado)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">defaultValue</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Valor inicial no controlado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onChange</td>
                      <td className="p-2">(e: ChangeEvent) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback que se ejecuta cuando cambia el contenido</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">placeholder</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Texto de ayuda mostrado cuando el campo está vacío</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita la interacción con el textarea</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">rows</td>
                      <td className="p-2">number</td>
                      <td className="p-2">3</td>
                      <td className="p-2">Número de líneas visibles (altura inicial)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">maxLength</td>
                      <td className="p-2">number</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Longitud máxima de caracteres permitidos</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">required</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Marca el campo como requerido en formularios</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">readOnly</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Campo de solo lectura (no editable pero focuseable)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">name</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Nombre del campo para envío de formularios</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales para personalización</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Textarea</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">💬 Comentarios y Reviews</h4>
                  <p className="text-sm text-muted-foreground">
                    Comentarios en productos, reviews, feedback de usuarios
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📧 Mensajes y Emails</h4>
                  <p className="text-sm text-muted-foreground">
                    Cuerpo de emails, mensajes directos, formularios de contacto
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📝 Descripciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Descripciones de productos, bio de perfil, detalles de proyectos
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📄 Contenido Largo</h4>
                  <p className="text-sm text-muted-foreground">
                    Artículos, posts de blog, documentación, notas
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🐛 Reportes</h4>
                  <p className="text-sm text-muted-foreground">
                    Reportes de bugs, issues, tickets de soporte, incidencias
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📋 Formularios Extensos</h4>
                  <p className="text-sm text-muted-foreground">
                    Motivaciones, explicaciones, razones, información adicional
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Siempre usa un Label asociado con htmlFor para accesibilidad y mejor UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Proporciona un placeholder descriptivo que guíe al usuario sobre qué escribir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa la prop rows para establecer un tamaño apropiado según el contexto (3-5 para comentarios, 8-10 para contenido largo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa maxLength con un contador visible cuando hay límite de caracteres</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra helper text debajo del textarea para dar contexto o límites (ej: "Máximo 500 caracteres")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para campos requeridos, marca visualmente con * en el label y valida apropiadamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa estilos de error claros (border-destructive) y mensajes específicos cuando falle la validación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Evita textarea para contenido muy corto (menos de 50 caracteres) - usa Input en su lugar</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}

// Helper component for Character Counter example
function TextareaWithCounter() {
  const [value, setValue] = useState("");
  const maxLength = 200;

  return (
    <div className="w-full max-w-md space-y-2">
      <Label htmlFor="comment">Comment</Label>
      <Textarea
        id="comment"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write a comment..."
        maxLength={maxLength}
        rows={4}
      />
      <p className="text-muted-foreground text-right">
        {value.length}/{maxLength}
      </p>
    </div>
  );
}