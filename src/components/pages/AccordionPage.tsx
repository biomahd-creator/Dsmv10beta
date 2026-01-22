import { ComponentShowcase } from "../ui/component-showcase";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function AccordionPage() {
  return (
    <ComponentShowcase
      title="Accordion"
      description="A vertically stacked set of interactive headings that reveal content"
      category="Layout"
      
      preview={
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern and follows WCAG 2.1 Level AA guidelines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match your design system but can be customized.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default with smooth transitions for opening and closing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      }
      
      code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}
      
      usage="Importa Accordion, AccordionItem, AccordionTrigger y AccordionContent. Usa type='single' para permitir solo un item abierto, o type='multiple' para permitir varios items abiertos simultáneamente."
      
      usageCode={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function MyComponent() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Question 1</AccordionTrigger>
        <AccordionContent>
          Answer 1
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Question 2</AccordionTrigger>
        <AccordionContent>
          Answer 2
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
      
      props={[
        {
          name: "type",
          type: '"single" | "multiple"',
          description: "Define si solo un item puede estar abierto ('single') o múltiples ('multiple')",
        },
        {
          name: "collapsible",
          type: "boolean",
          description: "Permite que el item abierto se pueda cerrar (solo con type='single')",
        },
        {
          name: "defaultValue",
          type: "string | string[]",
          description: "Valor(es) del/los item(s) abierto(s) por defecto",
        },
        {
          name: "value",
          type: "string | string[]",
          description: "Valor(es) controlado(s) del/los item(s) abierto(s)",
        },
      ]}
      
      examples={[
        {
          title: "Multiple Open",
          description: "Multiple items can be expanded simultaneously",
          preview: (
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="feature-1">
                <AccordionTrigger>Feature One</AccordionTrigger>
                <AccordionContent>
                  This is the content for feature one. Multiple items can be expanded at the same time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="feature-2">
                <AccordionTrigger>Feature Two</AccordionTrigger>
                <AccordionContent>
                  This is the content for feature two. All items remain independent.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="feature-3">
                <AccordionTrigger>Feature Three</AccordionTrigger>
                <AccordionContent>
                  This is the content for feature three. Expand as many as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
          code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="multiple" className="w-full">
  <AccordionItem value="feature-1">
    <AccordionTrigger>Feature One</AccordionTrigger>
    <AccordionContent>
      This is the content for feature one. Multiple items can be expanded.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="feature-2">
    <AccordionTrigger>Feature Two</AccordionTrigger>
    <AccordionContent>
      This is the content for feature two. All items remain independent.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="feature-3">
    <AccordionTrigger>Feature Three</AccordionTrigger>
    <AccordionContent>
      This is the content for feature three. Expand as many as needed.
    </AccordionContent>
  </AccordionItem>
</Accordion>`
        },
        {
          title: "FAQ Example",
          description: "Common use case for accordions in FAQ sections",
          preview: (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How long is the free trial?</AccordionTrigger>
                <AccordionContent>
                  Our free trial lasts for 14 days with full access to all features. No credit card required.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your subscription at any time. No questions asked, no cancellation fees.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
          code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="faq-1">
    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
    <AccordionContent>
      We accept all major credit cards, PayPal, and bank transfers.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-2">
    <AccordionTrigger>How long is the free trial?</AccordionTrigger>
    <AccordionContent>
      Our free trial lasts for 14 days with full access to all features.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-3">
    <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
    <AccordionContent>
      Yes, you can cancel your subscription at any time.
    </AccordionContent>
  </AccordionItem>
</Accordion>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Accordion</CardDescription>
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
                      <td className="p-2 font-mono">type</td>
                      <td className="p-2">"single" | "multiple"</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Define si solo un item puede estar abierto a la vez ('single') o múltiples ('multiple')</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">collapsible</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Permite cerrar el item activo (solo aplica con type="single")</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">defaultValue</td>
                      <td className="p-2">string | string[]</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Valor(es) de los items abiertos por defecto (modo no controlado)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">value</td>
                      <td className="p-2">string | string[]</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Valor(es) controlados de los items abiertos (modo controlado)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onValueChange</td>
                      <td className="p-2">(value: string | string[]) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback que se ejecuta cuando cambia el estado de expansión</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita todo el accordion</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales para el contenedor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Accordion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">❓ FAQs</h4>
                  <p className="text-sm text-muted-foreground">
                    Preguntas frecuentes organizadas en secciones colapsables para facilitar la navegación
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📋 Términos y Condiciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Documentos legales divididos en secciones para mejor legibilidad
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🎓 Contenido Educativo</h4>
                  <p className="text-sm text-muted-foreground">
                    Lecciones o módulos de aprendizaje con contenido progresivo
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">⚙️ Configuraciones Avanzadas</h4>
                  <p className="text-sm text-muted-foreground">
                    Opciones técnicas agrupadas por categorías para no abrumar al usuario
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📊 Reportes Detallados</h4>
                  <p className="text-sm text-muted-foreground">
                    Secciones de datos expandibles para mostrar información bajo demanda
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🗂️ Navegación de Documentos</h4>
                  <p className="text-sm text-muted-foreground">
                    Índices de documentación con subsecciones anidadas
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
                  <span>Usa type="single" con collapsible para FAQs y contenido donde el usuario revisa una pregunta a la vez</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa type="multiple" cuando el usuario necesita comparar información entre secciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén los títulos de AccordionTrigger concisos (máximo 60 caracteres)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No anides accordions dentro de accordions - usa mejor una estructura de navegación diferente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa defaultValue para abrir la primera sección en FAQs o contenido importante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Evita poner formularios complejos dentro de accordions - puede confundir al usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrupa lógicamente el contenido - máximo 10-12 items por accordion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Considera agregar iconos a los triggers para mayor claridad visual</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}