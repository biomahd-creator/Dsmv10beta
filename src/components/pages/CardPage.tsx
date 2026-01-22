import { ComponentShowcase } from "../ui/component-showcase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Bell, TrendingUp, Users, DollarSign } from "lucide-react";

export function CardPage() {
  return (
    <ComponentShowcase
      title="Card"
      description="Displays a card with header, content, and footer."
      badges={[
        { text: "Data Display", variant: "secondary" }
      ]}
      previewComponent={
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      }
      codeBlock={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          {/* Tarjeta Simple */}
          <div className="space-y-4">
            <h3 className="font-medium">Tarjeta Simple</h3>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Título de la Tarjeta</CardTitle>
                <CardDescription>Descripción breve del contenido de la tarjeta.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Este es el contenido principal de la tarjeta. Puede contener cualquier elemento.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* KPI Cards */}
          <div className="space-y-4">
            <h3 className="font-medium">Tarjetas de KPI</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Facturas</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% desde el mes pasado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2,350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% desde el mes pasado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Operaciones</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% desde el mes pasado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Notificaciones</CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 desde la hora pasada
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tarjeta con Badge */}
          <div className="space-y-4">
            <h3 className="font-medium">Tarjeta con Badge</h3>
            <Card className="w-[350px]">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1.5">
                    <CardTitle>Factura #F-2024-001</CardTitle>
                    <CardDescription>Cliente: Corporación Global S.A.</CardDescription>
                  </div>
                  <Badge className="bg-green-500 hover:bg-green-600">Pagada</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Monto:</span>
                  <span className="font-medium">$150,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Fecha:</span>
                  <span>15/12/2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Vencimiento:</span>
                  <span>30/12/2024</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Ver Detalles</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Tarjeta Interactiva */}
          <div className="space-y-4">
            <h3 className="font-medium">Tarjeta Interactiva</h3>
            <Card className="w-[350px] cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Proyecto Activo</CardTitle>
                <CardDescription>Haz clic para ver más detalles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progreso</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Plazo restante</span>
                  <Badge variant="secondary">5 días</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card Grid */}
          <div className="space-y-4">
            <h3 className="font-medium">Grid de Tarjetas</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Opción 1</CardTitle>
                  <CardDescription>Descripción de la primera opción</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Contenido breve que describe esta opción.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Seleccionar</Button>
                </CardFooter>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Opción 2</CardTitle>
                    <Badge>Recomendado</Badge>
                  </div>
                  <CardDescription>Descripción de la segunda opción</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Contenido breve que describe esta opción.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Seleccionar</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Opción 3</CardTitle>
                  <CardDescription>Descripción de la tercera opción</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Contenido breve que describe esta opción.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Seleccionar</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      }
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Componentes de Card</CardTitle>
              <CardDescription>Subcomponentes disponibles para estructurar tarjetas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium font-mono text-sm">Card</h4>
                  <p className="text-sm text-muted-foreground">
                    Contenedor principal de la tarjeta. Aplica bordes, sombra y padding base.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium font-mono text-sm">CardHeader</h4>
                  <p className="text-sm text-muted-foreground">
                    Encabezado de la tarjeta. Contiene típicamente el título y descripción.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium font-mono text-sm">CardTitle</h4>
                  <p className="text-sm text-muted-foreground">
                    Título principal de la tarjeta con estilos de encabezado.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium font-mono text-sm">CardDescription</h4>
                  <p className="text-sm text-muted-foreground">
                    Texto descriptivo secundario con color muted.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium font-mono text-sm">CardContent</h4>
                  <p className="text-sm text-muted-foreground">
                    Área de contenido principal de la tarjeta.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium font-mono text-sm">CardFooter</h4>
                  <p className="text-sm text-muted-foreground">
                    Pie de la tarjeta. Típicamente contiene botones de acción.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Card</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📊 Dashboards</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar KPIs, métricas y estadísticas en tarjetas organizadas.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📝 Formularios</h4>
                  <p className="text-sm text-muted-foreground">
                    Agrupar campos de formularios en secciones visuales claras.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📋 Listas</h4>
                  <p className="text-sm text-muted-foreground">
                    Presentar items individuales con detalles y acciones.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">💳 Detalles de Entidades</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar información detallada de clientes, facturas, etc.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🎯 Selección de Opciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Presentar múltiples opciones para que el usuario elija.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📰 Contenido</h4>
                  <p className="text-sm text-muted-foreground">
                    Organizar artículos, posts o información en bloques.
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
