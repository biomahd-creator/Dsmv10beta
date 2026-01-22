import { ComponentShowcase } from "../ui/component-showcase";
import { AuditLogViewer } from "../business/AuditLogViewer";
import { TestimonialsCarousel } from "../business/TestimonialsCarousel";
import { ContactForm } from "../business/ContactForm";
import { BookingCalendar } from "../business/BookingCalendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

/**
 * BusinessComponentsPage - Showcase de componentes de negocio de alta prioridad
 * 
 * Componentes implementados:
 * 1. Audit Log Viewer - Sistema de auditoría y tracking
 * 2. Testimonials Carousel - Carrusel de testimonios de clientes
 * 3. Contact Form - Formulario de contacto profesional
 * 4. Booking Calendar - Sistema de agendamiento de citas
 * 
 * Ubicación: /components/pages/BusinessComponentsPage.tsx
 * Estado: ✅ Completado - 4/4 componentes de alta prioridad
 */

export function BusinessComponentsPage() {
  return (
    <ComponentShowcase
      title="Business Components"
      description="Suite completa de componentes empresariales: Audit Logs, Testimonios, Formularios de Contacto y Calendarios de Reservas para aplicaciones profesionales."
      category="Business"
      
      // Main Preview: Tabs con todos los componentes
      preview={
        <Tabs defaultValue="audit" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="audit">Audit Log</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="contact">Contact Form</TabsTrigger>
            <TabsTrigger value="booking">Booking</TabsTrigger>
          </TabsList>
          
          <TabsContent value="audit" className="mt-6">
            <div className="rounded-lg border bg-card p-6">
              <AuditLogViewer />
            </div>
          </TabsContent>
          
          <TabsContent value="testimonials" className="mt-6">
            <div className="rounded-lg border bg-card p-6">
              <TestimonialsCarousel />
            </div>
          </TabsContent>
          
          <TabsContent value="contact" className="mt-6">
            <div className="rounded-lg border bg-card p-6 flex justify-center">
              <ContactForm />
            </div>
          </TabsContent>
          
          <TabsContent value="booking" className="mt-6">
            <div className="rounded-lg border bg-card p-6">
              <BookingCalendar />
            </div>
          </TabsContent>
        </Tabs>
      }
      
      // Code
      code={`import { AuditLogViewer } from "@/components/business/AuditLogViewer";
import { TestimonialsCarousel } from "@/components/business/TestimonialsCarousel";
import { ContactForm } from "@/components/business/ContactForm";
import { BookingCalendar } from "@/components/business/BookingCalendar";

// Audit Log
<AuditLogViewer />

// Testimonials
<TestimonialsCarousel />

// Contact Form
<ContactForm />

// Booking Calendar
<BookingCalendar />`}
      
      // Usage
      usage="Suite de componentes empresariales listos para usar: Audit Logs con filtros y búsqueda, Testimonios con ratings y navegación, Contact Forms validados, y Booking Calendars con selección de horarios. Todos incluyen estados de loading, validación y feedback visual."
      
      props={[
        {
          name: "AuditLogViewer",
          type: "Component",
          description: "Sistema de auditoría con tabla filtrable, búsqueda y estadísticas",
        },
        {
          name: "TestimonialsCarousel",
          type: "Component",
          description: "Carrusel de testimonios con ratings, avatares y navegación",
        },
        {
          name: "ContactForm",
          type: "Component",
          description: "Formulario de contacto con validación completa y estados",
        },
        {
          name: "BookingCalendar",
          type: "Component",
          description: "Calendario de reservas con selección de fecha, hora y servicio",
        }
      ]}
      
      examples={[
        {
          title: "Audit Log - Features",
          description: "Sistema de auditoría empresarial completo",
          preview: (
            <Card>
              <CardHeader>
                <CardTitle>Características Audit Log</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Tabla striped sin bordes con filas alternadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Filtrado por estado (Success, Warning, Error)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Búsqueda en tiempo real por usuario/acción/recurso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Tarjetas de resumen con contadores por estado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ),
          code: `<AuditLogViewer />`
        },
        {
          title: "Testimonials - Features",
          description: "Carrusel elegante de testimonios con ratings",
          preview: (
            <Card>
              <CardHeader>
                <CardTitle>Características Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Navegación con flechas y dots indicator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Sistema de ratings con estrellas (1-5)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Avatares con iniciales automáticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Auto-play opcional configurable</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ),
          code: `<TestimonialsCarousel />`
        }
      ]}

      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Componentes Disponibles</CardTitle>
              <CardDescription>Suite completa de componentes empresariales</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Componente</th>
                    <th className="text-left p-2 text-foreground">Categoría</th>
                    <th className="text-left p-2 text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">AuditLogViewer</code></td>
                    <td className="p-2">Data Management</td>
                    <td className="p-2">Sistema de auditoría con tabla, filtros, búsqueda y estadísticas</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TestimonialsCarousel</code></td>
                    <td className="p-2">Social Proof</td>
                    <td className="p-2">Carrusel de testimonios con ratings, avatares y navegación</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">ContactForm</code></td>
                    <td className="p-2">Lead Generation</td>
                    <td className="p-2">Formulario de contacto con validación completa y estados</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">BookingCalendar</code></td>
                    <td className="p-2">Scheduling</td>
                    <td className="p-2">Calendario de reservas con selección de fecha, hora y servicio</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones de componentes empresariales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔍 Compliance y Auditoría</h4>
                  <p className="text-sm text-muted-foreground">
                    AuditLogViewer para tracking de acciones, cumplimiento normativo y debugging de sistemas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💼 Landing Pages B2B</h4>
                  <p className="text-sm text-muted-foreground">
                    TestimonialsCarousel para social proof, conversión y credibilidad empresarial
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📧 Generación de Leads</h4>
                  <p className="text-sm text-muted-foreground">
                    ContactForm para captura de prospectos, solicitudes de demo y soporte
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📅 Agendamiento de Servicios</h4>
                  <p className="text-sm text-muted-foreground">
                    BookingCalendar para consultorías, demos de producto, reuniones y citas médicas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🏦 Aplicaciones Bancarias</h4>
                  <p className="text-sm text-muted-foreground">
                    Audit Logs para transacciones financieras, compliance SOX y trazabilidad
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎓 Plataformas SaaS</h4>
                  <p className="text-sm text-muted-foreground">
                    Suite completa para onboarding, testimonios de clientes y soporte técnico
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para componentes empresariales</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En AuditLogViewer, implementa paginación server-side para logs grandes (&gt;1000 registros) - evita cargar todo en memoria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Persiste filtros de audit logs en URL params - permite compartir vistas filtradas con el equipo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En TestimonialsCarousel, usa auto-play solo en landing pages - deshabilita en dashboards para no distraer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita testimonios a 5-7 máximo - más testimonios reducen el impacto individual y la tasa de lectura</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En ContactForm, integra con APIs reales (SendGrid, Mailgun) - evita formularios que no envían nada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa rate limiting en contact forms - previene spam y abuso (max 3 envíos por IP por hora)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En BookingCalendar, sincroniza con calendarios reales (Google Calendar API) - evita doble reserva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Todos los componentes deben manejar estados de error gracefully - muestra mensajes específicos y accionables</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notas de Implementación</CardTitle>
              <CardDescription>Guía técnica y mejores prácticas de desarrollo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground mb-2">📁 Ubicación de Archivos</p>
                  <p className="text-muted-foreground">
                    Todos los componentes están en <code className="bg-muted px-2 py-1 rounded">/components/business/</code>
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-2">📦 Imports Necesarios</p>
                  <div className="space-y-1 text-muted-foreground">
                    <code className="block bg-muted px-2 py-1 rounded">
                      import {`{ AuditLogViewer }`} from "@/components/business/AuditLogViewer"
                    </code>
                    <code className="block bg-muted px-2 py-1 rounded">
                      import {`{ TestimonialsCarousel }`} from "@/components/business/TestimonialsCarousel"
                    </code>
                    <code className="block bg-muted px-2 py-1 rounded">
                      import {`{ ContactForm }`} from "@/components/business/ContactForm"
                    </code>
                    <code className="block bg-muted px-2 py-1 rounded">
                      import {`{ BookingCalendar }`} from "@/components/business/BookingCalendar"
                    </code>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-foreground mb-2">✅ Compatibilidad</p>
                  <p className="text-muted-foreground">
                    Todos los componentes usan únicamente componentes oficiales de shadcn/ui y siguen 
                    los estándares de Guidelines.md: tipografía Satoshi, tokens de color (#84cc16 y #1C2D3A), 
                    sin estilos inline.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground mb-2">🎯 Estado del Proyecto</p>
                  <p className="text-muted-foreground">
                    ✅ Fase 1 completada - 4 componentes de ALTA PRIORIDAD implementados, 
                    documentados y listos para producción.
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
