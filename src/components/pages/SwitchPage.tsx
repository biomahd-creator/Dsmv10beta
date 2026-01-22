import { ComponentShowcase } from "../ui/component-showcase";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Bell, Wifi, Bluetooth, Moon, Volume2, Lock } from "lucide-react";
import { useState } from "react";

export function SwitchPage() {
  return (
    <ComponentShowcase
      title="Switch"
      description="A control that allows users to toggle between checked and unchecked states, commonly used for on/off settings."
      category="Forms"
      
      // Main Preview
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="demo-1" />
            <Label htmlFor="demo-1">Airplane Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="demo-2" defaultChecked />
            <Label htmlFor="demo-2">Enabled by default</Label>
          </div>
        </div>
      }
      
      // Main Code
      code={`import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="wifi" defaultChecked />
        <Label htmlFor="wifi">WiFi</Label>
      </div>
    </div>
  );
}`}
      
      // Usage
      usage="Importa el componente Switch desde @/components/ui/switch. Ideal para ajustes de configuración, permisos, y cualquier opción binaria (on/off). Siempre usa un Label asociado con htmlFor para accesibilidad."
      usageCode={`import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

function Settings() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "checked",
          type: "boolean",
          description: "Estado controlado del switch",
        },
        {
          name: "defaultChecked",
          type: "boolean",
          default: "false",
          description: "Estado inicial no controlado",
        },
        {
          name: "onCheckedChange",
          type: "(checked: boolean) => void",
          description: "Callback cuando cambia el estado",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Deshabilita el switch",
        },
        {
          name: "required",
          type: "boolean",
          default: "false",
          description: "Campo requerido en formularios",
        },
        {
          name: "name",
          type: "string",
          description: "Nombre del campo (para formularios)",
        },
        {
          name: "id",
          type: "string",
          description: "ID para asociar con Label",
          required: true,
          default: "switch",
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
          title: "Basic Switch",
          description: "Switch simple con label",
          preview: (
            <div className="flex items-center space-x-2">
              <Switch id="basic" />
              <Label htmlFor="basic">Enable feature</Label>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function BasicSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="basic" />
      <Label htmlFor="basic">Enable feature</Label>
    </div>
  );
}`,
        },
        {
          title: "With Descriptions",
          description: "Switches con descripciones adicionales en layout horizontal",
          preview: (
            <div className="space-y-4 max-w-md">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="marketing">Marketing emails</Label>
                  <p className="text-muted-foreground">
                    Receive emails about new products
                  </p>
                </div>
                <Switch id="marketing" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="security">Security emails</Label>
                  <p className="text-muted-foreground">
                    Receive emails about your account
                  </p>
                </div>
                <Switch id="security" defaultChecked />
              </div>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function SwitchWithDescriptions() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about new products
          </p>
        </div>
        <Switch id="marketing" />
      </div>
      
      <Separator />
      
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Label htmlFor="security">Security emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about your account
          </p>
        </div>
        <Switch id="security" defaultChecked />
      </div>
    </div>
  );
}`,
        },
        {
          title: "With Icons",
          description: "Switches con iconos para mejor UX visual",
          preview: (
            <div className="space-y-4">
              <div className="flex items-center justify-between max-w-xs">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="notifications">Notifications</Label>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between max-w-xs">
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="wifi">WiFi</Label>
                </div>
                <Switch id="wifi" defaultChecked />
              </div>
              <div className="flex items-center justify-between max-w-xs">
                <div className="flex items-center gap-2">
                  <Bluetooth className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="bluetooth">Bluetooth</Label>
                </div>
                <Switch id="bluetooth" />
              </div>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Wifi, Bluetooth } from "lucide-react";

export function SwitchWithIcons() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="notifications">Notifications</Label>
        </div>
        <Switch id="notifications" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wifi className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="wifi">WiFi</Label>
        </div>
        <Switch id="wifi" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bluetooth className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="bluetooth">Bluetooth</Label>
        </div>
        <Switch id="bluetooth" />
      </div>
    </div>
  );
}`,
        },
        {
          title: "Card Layout",
          description: "Switches organizados en cards para agrupación visual",
          preview: (
            <div className="grid gap-4 max-w-md">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Moon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <Label htmlFor="dark-mode" className="cursor-pointer">Dark Mode</Label>
                      <p className="text-muted-foreground">
                        Enable dark theme
                      </p>
                    </div>
                  </div>
                  <Switch id="dark-mode" />
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Volume2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <Label htmlFor="sound" className="cursor-pointer">Sound Effects</Label>
                      <p className="text-muted-foreground">
                        Play UI sounds
                      </p>
                    </div>
                  </div>
                  <Switch id="sound" defaultChecked />
                </div>
              </Card>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Moon, Volume2 } from "lucide-react";

export function CardLayoutSwitch() {
  return (
    <div className="grid gap-4">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Moon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <Label htmlFor="dark-mode" className="cursor-pointer">
                Dark Mode
              </Label>
              <p className="text-sm text-muted-foreground">
                Enable dark theme
              </p>
            </div>
          </div>
          <Switch id="dark-mode" />
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Volume2 className="h-4 w-4 text-primary" />
            </div>
            <div>
              <Label htmlFor="sound" className="cursor-pointer">
                Sound Effects
              </Label>
              <p className="text-sm text-muted-foreground">
                Play UI sounds
              </p>
            </div>
          </div>
          <Switch id="sound" defaultChecked />
        </div>
      </Card>
    </div>
  );
}`,
        },
        {
          title: "Controlled State",
          description: "Switch con estado controlado mediante React state",
          preview: (
            <SwitchControlledExample />
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ControlledSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="controlled"
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
        />
        <Label htmlFor="controlled">
          Feature is {isEnabled ? "enabled" : "disabled"}
        </Label>
      </div>
      
      <p className="text-sm text-muted-foreground">
        Current state: <strong>{isEnabled ? "ON" : "OFF"}</strong>
      </p>
    </div>
  );
}`,
        },
        {
          title: "Disabled States",
          description: "Switch en estados deshabilitados (on y off)",
          preview: (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="disabled-off" disabled />
                <Label htmlFor="disabled-off">Disabled (off)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="disabled-on" disabled defaultChecked />
                <Label htmlFor="disabled-on">Disabled (on)</Label>
              </div>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function DisabledSwitch() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off">Disabled (off)</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on">Disabled (on)</Label>
      </div>
    </div>
  );
}`,
        },
        {
          title: "Settings Panel",
          description: "Panel completo de configuración con múltiples switches",
          preview: (
            <div className="max-w-md space-y-1 border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Privacy Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <Label htmlFor="profile-visible">Profile Visibility</Label>
                    <p className="text-muted-foreground">
                      Make your profile visible to others
                    </p>
                  </div>
                  <Switch id="profile-visible" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <Label htmlFor="search-indexing">Search Indexing</Label>
                    <p className="text-muted-foreground">
                      Allow search engines to index your profile
                    </p>
                  </div>
                  <Switch id="search-indexing" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <Label htmlFor="data-collection">Data Collection</Label>
                    <p className="text-muted-foreground">
                      Help us improve by sharing usage data
                    </p>
                  </div>
                  <Switch id="data-collection" defaultChecked />
                </div>
              </div>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function SettingsPanel() {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold mb-4">Privacy Settings</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between py-2">
          <div className="space-y-1">
            <Label htmlFor="profile-visible">Profile Visibility</Label>
            <p className="text-sm text-muted-foreground">
              Make your profile visible to others
            </p>
          </div>
          <Switch id="profile-visible" defaultChecked />
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between py-2">
          <div className="space-y-1">
            <Label htmlFor="search-indexing">Search Indexing</Label>
            <p className="text-sm text-muted-foreground">
              Allow search engines to index your profile
            </p>
          </div>
          <Switch id="search-indexing" />
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between py-2">
          <div className="space-y-1">
            <Label htmlFor="data-collection">Data Collection</Label>
            <p className="text-sm text-muted-foreground">
              Help us improve by sharing usage data
            </p>
          </div>
          <Switch id="data-collection" defaultChecked />
        </div>
      </div>
    </div>
  );
}`,
        },
        {
          title: "With Confirmation",
          description: "Switch que requiere confirmación al activarse",
          preview: (
            <SwitchWithConfirmation />
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useState } from "react";

export function SwitchWithConfirmation() {
  const [isLocked, setIsLocked] = useState(true);

  const handleChange = (checked: boolean) => {
    if (checked) {
      const confirmed = window.confirm(
        "Are you sure you want to enable this feature?"
      );
      if (confirmed) {
        setIsLocked(false);
      }
    } else {
      setIsLocked(true);
    }
  };

  return (
    <div className="flex items-center justify-between max-w-xs">
      <div className="flex items-center gap-2">
        <Lock className="h-4 w-4 text-muted-foreground" />
        <Label htmlFor="locked">Secure Mode</Label>
      </div>
      <Switch
        id="locked"
        checked={!isLocked}
        onCheckedChange={handleChange}
      />
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
              <CardDescription>API completa del componente Switch</CardDescription>
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
                      <td className="p-2 font-mono">checked</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Estado controlado del switch (true = on, false = off)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">defaultChecked</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Estado inicial en modo no controlado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onCheckedChange</td>
                      <td className="p-2">(checked: boolean) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback que se ejecuta cuando cambia el estado del switch</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita la interacción con el switch</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">required</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Marca el campo como requerido en formularios</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">name</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Nombre del campo para envío de formularios</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">id</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">ID único para asociar con Label mediante htmlFor</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">value</td>
                      <td className="p-2">string</td>
                      <td className="p-2">"on"</td>
                      <td className="p-2">Valor enviado cuando el switch está activado en formularios</td>
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
              <CardDescription>Aplicaciones comunes del componente Switch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">⚙️ Configuraciones de Sistema</h4>
                  <p className="text-sm text-muted-foreground">
                    Dark mode, notificaciones, auto-save, sonidos de UI
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔐 Permisos y Privacidad</h4>
                  <p className="text-sm text-muted-foreground">
                    Visibilidad de perfil, compartir datos, permisos de ubicación
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📡 Conectividad</h4>
                  <p className="text-sm text-muted-foreground">
                    WiFi, Bluetooth, modo avión, sincronización automática
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">✉️ Preferencias de Comunicación</h4>
                  <p className="text-sm text-muted-foreground">
                    Emails de marketing, notificaciones push, newsletters
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🎛️ Features Toggle</h4>
                  <p className="text-sm text-muted-foreground">
                    Activar/desactivar funcionalidades experimentales o premium
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">👁️ Controles de Accesibilidad</h4>
                  <p className="text-sm text-muted-foreground">
                    Subtítulos, audio descriptions, alto contraste, animaciones
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
                  <span>Siempre usa un Label asociado con htmlFor para que sea accesible y clickeable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>El efecto del switch debe ser inmediato - no requiere botón "Guardar" (a diferencia de checkbox)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa switches para configuraciones binarias on/off, no para opciones que requieren confirmación en formularios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrega descripciones o helper text cuando el comportamiento no sea obvio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para acciones destructivas o críticas, considera agregar un diálogo de confirmación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa iconos contextuales para reforzar el significado (WiFi, Bluetooth, Bell, etc)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Organiza múltiples switches en secciones lógicas con Separators o Cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>El label debe describir lo que se activa, no el estado actual ("Dark Mode" en lugar de "Activar Dark Mode")</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}

// Helper component for Controlled State example
function SwitchControlledExample() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="controlled"
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
        />
        <Label htmlFor="controlled">
          Feature is {isEnabled ? "enabled" : "disabled"}
        </Label>
      </div>
      
      <p className="text-muted-foreground">
        Current state: <strong>{isEnabled ? "ON" : "OFF"}</strong>
      </p>
    </div>
  );
}

// Helper component for Confirmation example
function SwitchWithConfirmation() {
  const [isLocked, setIsLocked] = useState(true);

  const handleChange = (checked: boolean) => {
    if (checked) {
      const confirmed = window.confirm(
        "Are you sure you want to enable this feature?"
      );
      if (confirmed) {
        setIsLocked(false);
      }
    } else {
      setIsLocked(true);
    }
  };

  return (
    <div className="flex items-center justify-between max-w-xs">
      <div className="flex items-center gap-2">
        <Lock className="h-4 w-4 text-muted-foreground" />
        <Label htmlFor="locked">Secure Mode</Label>
      </div>
      <Switch
        id="locked"
        checked={!isLocked}
        onCheckedChange={handleChange}
      />
    </div>
  );
}