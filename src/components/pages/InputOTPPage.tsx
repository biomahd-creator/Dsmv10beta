import { ComponentShowcase } from "../ui/component-showcase";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import { Button } from "../ui/button";

export function InputOTPPage() {
  return (
    <ComponentShowcase
      title="Input OTP"
      description="Accessible one-time password component with copy paste functionality."
      category="Forms"
      preview={
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      }
      code={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`}
      usage={`import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>`}
      props={[
        {
          name: "maxLength",
          type: "number",
          default: "-",
          description: "The number of characters for the OTP.",
          required: true,
        },
        {
          name: "render",
          type: "function",
          default: "-",
          description: "Custom render function for slots (advanced).",
        },
        {
          name: "containerClassName",
          type: "string",
          default: "-",
          description: "Class name for the container.",
        }
      ]}
      examples={[
        {
          title: "Pattern",
          description: "Use a pattern to allow only specific characters (e.g. alphanumeric).",
          preview: (
            <InputOTP maxLength={6} pattern="^[a-zA-Z0-9]+$">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          ),
          code: `<InputOTP maxLength={6} pattern="^[a-zA-Z0-9]+$">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>`
        },
        {
          title: "Separator",
          description: "Group slots with a separator.",
          preview: (
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          ),
          code: `<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`
        }
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente InputOTP</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">maxLength</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Número de caracteres del OTP (requerido)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">pattern</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Regex pattern para validar caracteres permitidos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">value</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Valor controlado del input</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onChange</code></td>
                    <td className="p-2">(value: string) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback cuando cambia el valor</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Deshabilita el input</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">containerClassName</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS adicionales para el contenedor</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente InputOTP</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔐 Autenticación 2FA</h4>
                  <p className="text-sm text-muted-foreground">
                    Verificación de dos factores con códigos de 6 dígitos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📧 Verificación de Email</h4>
                  <p className="text-sm text-muted-foreground">
                    Confirmar dirección de correo con código de 4-6 dígitos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📱 Verificación SMS</h4>
                  <p className="text-sm text-muted-foreground">
                    Validar número telefónico con código enviado por SMS
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💳 PIN de Seguridad</h4>
                  <p className="text-sm text-muted-foreground">
                    Input de PIN para transacciones o accesos seguros
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔑 Códigos de Invitación</h4>
                  <p className="text-sm text-muted-foreground">
                    Validar códigos alfanuméricos para acceso a plataforma
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🚀 Activación de Cuenta</h4>
                  <p className="text-sm text-muted-foreground">
                    Activar cuenta nueva con código recibido por correo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de InputOTP</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">maxLength</code> de 4 o 6 dígitos para balance entre seguridad y UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrupa los slots con InputOTPGroup y usa InputOTPSeparator para mejor legibilidad visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa auto-submit cuando se complete el código para UX fluida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">pattern</code> para restringir solo dígitos: <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">^[0-9]+$</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Soporta paste desde clipboard - el usuario puede pegar el código completo de una vez</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra feedback visual inmediato (error/success) después de completar el código</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye opción "Reenviar código" con temporizador para mejor experiencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aplica auto-focus en el primer slot al montar el componente</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}