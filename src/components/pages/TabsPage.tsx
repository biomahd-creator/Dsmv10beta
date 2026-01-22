import { ComponentShowcase } from "../ui/component-showcase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { User, Settings, Bell, CreditCard, Shield, Activity } from "lucide-react";

export function TabsPage() {
  return (
    <ComponentShowcase
      title="Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
      category="Navigation"
      
      // Main Preview
      preview={
        <Tabs defaultValue="account" className="w-full max-w-lg">
          <TabsList>
            <TabsTrigger value="account" className="font-normal">Account</TabsTrigger>
            <TabsTrigger value="password" className="font-normal">Password</TabsTrigger>
            <TabsTrigger value="notifications" className="font-normal">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h4 className="font-normal">Account Settings</h4>
              <p className="text-sm text-muted-foreground">
                Manage your account settings and preferences here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h4 className="font-normal">Password Settings</h4>
              <p className="text-sm text-muted-foreground">
                Update your password and security settings.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h4 className="font-normal">Notification Preferences</h4>
              <p className="text-sm text-muted-foreground">
                Configure how you receive notifications.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      }
      
      // Main Code
      code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Account content here
      </TabsContent>
      <TabsContent value="password">
        Password content here
      </TabsContent>
    </Tabs>
  );
}`}
      
      // Usage
      usage="Importa los componentes Tabs desde @/components/ui/tabs. Usa Tabs como contenedor, TabsList para los botones de navegación, TabsTrigger para cada tab y TabsContent para el contenido de cada panel."
      usageCode={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "defaultValue",
          type: "string",
          description: "Tab activo por defecto (componente no controlado)",
        },
        {
          name: "value",
          type: "string",
          description: "Tab activo (componente controlado)",
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          description: "Callback que se ejecuta cuando cambia el tab activo",
        },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Orientación de los tabs",
        },
        {
          name: "dir",
          type: '"ltr" | "rtl"',
          default: '"ltr"',
          description: "Dirección del texto",
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "With Form Content",
          description: "Tabs con formularios en cada panel",
          preview: (
            <Tabs defaultValue="account" className="w-full max-w-lg">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@johndoe" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ),
          code: `<Tabs defaultValue="account">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>Make changes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Name" />
        <Input placeholder="Username" />
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    {/* Password form */}
  </TabsContent>
</Tabs>`
        },
        {
          title: "With Icons",
          description: "Tabs con iconos en los triggers",
          preview: (
            <Tabs defaultValue="profile" className="w-full max-w-lg">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile" className="gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="settings" className="gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Alerts
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Your profile information and public details.
                </p>
              </TabsContent>
              <TabsContent value="settings" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Application settings and preferences.
                </p>
              </TabsContent>
              <TabsContent value="notifications" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Manage your notification preferences.
                </p>
              </TabsContent>
            </Tabs>
          ),
          code: `import { User, Settings, Bell } from "lucide-react";

<Tabs defaultValue="profile">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="profile" className="gap-2">
      <User className="h-4 w-4" />
      Profile
    </TabsTrigger>
    <TabsTrigger value="settings" className="gap-2">
      <Settings className="h-4 w-4" />
      Settings
    </TabsTrigger>
    <TabsTrigger value="notifications" className="gap-2">
      <Bell className="h-4 w-4" />
      Alerts
    </TabsTrigger>
  </TabsList>
  <TabsContent value="profile">Content</TabsContent>
</Tabs>`
        },
        {
          title: "Disabled Tab",
          description: "Tabs con una opción deshabilitada",
          preview: (
            <Tabs defaultValue="overview" className="w-full max-w-lg">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports" disabled>
                  Reports
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Overview dashboard with key metrics.
                </p>
              </TabsContent>
              <TabsContent value="analytics" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Analytics and insights data.
                </p>
              </TabsContent>
              <TabsContent value="reports" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Reports section (coming soon).
                </p>
              </TabsContent>
            </Tabs>
          ),
          code: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports" disabled>
      Reports
    </TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Content</TabsContent>
</Tabs>`
        },
        {
          title: "With Badges",
          description: "Tabs con badges para mostrar contadores",
          preview: (
            <Tabs defaultValue="all" className="w-full max-w-lg">
              <TabsList>
                <TabsTrigger value="all" className="gap-2">
                  All
                  <Badge variant="secondary" className="ml-1">24</Badge>
                </TabsTrigger>
                <TabsTrigger value="active" className="gap-2">
                  Active
                  <Badge className="ml-1">12</Badge>
                </TabsTrigger>
                <TabsTrigger value="completed" className="gap-2">
                  Completed
                  <Badge variant="outline" className="ml-1">12</Badge>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  All 24 items in your list.
                </p>
              </TabsContent>
              <TabsContent value="active" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  12 active items requiring attention.
                </p>
              </TabsContent>
              <TabsContent value="completed" className="pt-4">
                <p className="text-sm text-muted-foreground">
                  12 completed items.
                </p>
              </TabsContent>
            </Tabs>
          ),
          code: `<Tabs defaultValue="all">
  <TabsList>
    <TabsTrigger value="all">
      All
      <Badge variant="secondary" className="ml-1">24</Badge>
    </TabsTrigger>
    <TabsTrigger value="active">
      Active
      <Badge className="ml-1">12</Badge>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="all">Content</TabsContent>
</Tabs>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Tabs</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">defaultValue</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Tab activo por defecto (componente no controlado)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">value</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Tab activo actual (componente controlado)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onValueChange</code></td>
                    <td className="p-2">(value: string) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback ejecutado cuando cambia el tab activo</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">orientation</code></td>
                    <td className="p-2">"horizontal" | "vertical"</td>
                    <td className="p-2">"horizontal"</td>
                    <td className="p-2">Orientación de la lista de tabs</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">dir</code></td>
                    <td className="p-2">"ltr" | "rtl"</td>
                    <td className="p-2">"ltr"</td>
                    <td className="p-2">Dirección del texto</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Deshabilita un TabsTrigger específico (prop individual)</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Tabs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⚙️ Paneles de Configuración</h4>
                  <p className="text-sm text-muted-foreground">
                    Organizar diferentes secciones de configuración (General, Seguridad, Notificaciones)
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Dashboards</h4>
                  <p className="text-sm text-muted-foreground">
                    Alternar entre vistas de datos diferentes (Resumen, Analytics, Reportes)
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Formularios Multi-sección</h4>
                  <p className="text-sm text-muted-foreground">
                    Dividir formularios largos en secciones lógicas y navegables
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📦 Detalles de Productos</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar especificaciones, reviews y preguntas frecuentes en tabs separados
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📄 Documentación</h4>
                  <p className="text-sm text-muted-foreground">
                    Organizar guías, API reference y ejemplos de código en pestañas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗂️ Filtros Categorizados</h4>
                  <p className="text-sm text-muted-foreground">
                    Cambiar entre categorías de contenido (Todos, Activos, Completados)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de Tabs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita el número de tabs a 3-7 para mantener la navegación simple y clara</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">defaultValue</code> para establecer el tab inicial más relevante para el usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye iconos en TabsTrigger para mejorar la identificación rápida de cada sección</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">grid w-full grid-cols-N</code> en TabsList para distribuir tabs uniformemente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén labels de tabs cortos y descriptivos (1-2 palabras idealmente)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrega badges con números para mostrar cantidad de items en cada categoría</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa estado controlado (value/onValueChange) cuando necesites sincronizar con URL o localStorage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En móviles, considera convertir tabs en un select dropdown si hay más de 4 opciones</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}
