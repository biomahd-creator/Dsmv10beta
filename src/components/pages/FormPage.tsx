import { ComponentShowcase } from "../ui/component-showcase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form@7.55.0";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "sonner@2.0.3";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function FormPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("You submitted the following values:", {
        description: JSON.stringify(values, null, 2),
    });
    console.log(values);
  }

  return (
    <ComponentShowcase
      title="Form"
      description="Building forms with React Hook Form and Zod."
      category="Forms"
      preview={
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-2/3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      }
      code={`"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-foreground text-background p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}
      usage={`import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"

// ... inside component
const form = useForm({ ... })

return (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
         control={form.control}
         name="fieldname"
         render={({ field }) => (
           <FormItem>
             <FormLabel>Label</FormLabel>
             <FormControl>
               <Input {...field} />
             </FormControl>
             <FormMessage />
           </FormItem>
         )}
      />
    </form>
  </Form>
)`}
      props={[
        {
          name: "Form",
          type: "Component",
          default: "-",
          description: "Root provider component (FormProvider de react-hook-form)",
        },
        {
          name: "FormField",
          type: "Component",
          default: "-",
          description: "Wrapper para inputs controlados (Controller de react-hook-form)",
        },
        {
          name: "FormItem",
          type: "Component",
          default: "-",
          description: "Contenedor de campo con espaciado y estructura",
        },
        {
          name: "FormLabel",
          type: "Component",
          default: "-",
          description: "Label del campo con asociación automática",
        },
        {
          name: "FormControl",
          type: "Component",
          default: "-",
          description: "Wrapper para el input con accesibilidad",
        },
        {
          name: "FormDescription",
          type: "Component",
          default: "-",
          description: "Texto de ayuda descriptivo",
        },
        {
          name: "FormMessage",
          type: "Component",
          default: "-",
          description: "Mensaje de error con validación automática",
        },
      ]}
      examples={[
        {
          title: "Multi-Field Form",
          description: "Formulario con múltiples campos y validación Zod",
          preview: (() => {
            const multiFormSchema = z.object({
              email: z.string().email({ message: "Email inválido" }),
              password: z.string().min(8, { message: "Mínimo 8 caracteres" }),
            });

            const MultiForm = () => {
              const multiForm = useForm<z.infer<typeof multiFormSchema>>({
                resolver: zodResolver(multiFormSchema),
                defaultValues: { email: "", password: "" },
              });

              function onSubmit(values: z.infer<typeof multiFormSchema>) {
                toast.success("Formulario enviado", {
                  description: JSON.stringify(values, null, 2),
                });
              }

              return (
                <Form {...multiForm}>
                  <form onSubmit={multiForm.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                    <FormField
                      control={multiForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="tu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={multiForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contraseña</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormDescription>Mínimo 8 caracteres</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Iniciar sesión</Button>
                  </form>
                </Form>
              );
            };

            return <MultiForm />;
          })(),
          code: `const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "Mínimo 8 caracteres" }),
});

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: { email: "", password: "" },
});

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Contraseña</FormLabel>
          <FormControl>
            <Input type="password" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Iniciar sesión</Button>
  </form>
</Form>`
        },
        {
          title: "Form with Select",
          description: "Formulario con Select y validación",
          preview: (() => {
            const selectFormSchema = z.object({
              role: z.string({ required_error: "Selecciona un rol" }),
            });

            const SelectForm = () => {
              const selectForm = useForm<z.infer<typeof selectFormSchema>>({
                resolver: zodResolver(selectFormSchema),
              });

              function onSubmit(values: z.infer<typeof selectFormSchema>) {
                toast.success("Rol seleccionado: " + values.role);
              }

              return (
                <Form {...selectForm}>
                  <form onSubmit={selectForm.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                    <FormField
                      control={selectForm.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rol de usuario</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona un rol" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="admin">Administrador</SelectItem>
                              <SelectItem value="editor">Editor</SelectItem>
                              <SelectItem value="viewer">Visualizador</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Guardar</Button>
                  </form>
                </Form>
              );
            };

            return <SelectForm />;
          })(),
          code: `<FormField
  control={form.control}
  name="role"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Rol de usuario</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un rol" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="admin">Administrador</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>`
        },
        {
          title: "Form with Checkbox",
          description: "Formulario con checkbox y validación booleana",
          preview: (() => {
            const checkboxFormSchema = z.object({
              terms: z.boolean().refine((val) => val === true, {
                message: "Debes aceptar los términos",
              }),
            });

            const CheckboxForm = () => {
              const checkboxForm = useForm<z.infer<typeof checkboxFormSchema>>({
                resolver: zodResolver(checkboxFormSchema),
                defaultValues: { terms: false },
              });

              function onSubmit(values: z.infer<typeof checkboxFormSchema>) {
                toast.success("Términos aceptados");
              }

              return (
                <Form {...checkboxForm}>
                  <form onSubmit={checkboxForm.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                    <FormField
                      control={checkboxForm.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Acepto términos y condiciones</FormLabel>
                            <FormDescription>
                              Al marcar esta casilla aceptas nuestros términos
                            </FormDescription>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Continuar</Button>
                  </form>
                </Form>
              );
            };

            return <CheckboxForm />;
          })(),
          code: `<FormField
  control={form.control}
  name="terms"
  render={({ field }) => (
    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      <div className="space-y-1 leading-none">
        <FormLabel>Acepto términos y condiciones</FormLabel>
        <FormMessage />
      </div>
    </FormItem>
  )}
/>`
        },
        {
          title: "Form with Textarea",
          description: "Formulario con textarea para textos largos",
          preview: (() => {
            const textareaFormSchema = z.object({
              message: z.string().min(10, { message: "Mínimo 10 caracteres" }).max(200),
            });

            const TextareaForm = () => {
              const textareaForm = useForm<z.infer<typeof textareaFormSchema>>({
                resolver: zodResolver(textareaFormSchema),
                defaultValues: { message: "" },
              });

              function onSubmit(values: z.infer<typeof textareaFormSchema>) {
                toast.success("Mensaje enviado");
              }

              return (
                <Form {...textareaForm}>
                  <form onSubmit={textareaForm.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                    <FormField
                      control={textareaForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Escribe tu mensaje aquí..." {...field} />
                          </FormControl>
                          <FormDescription>Máximo 200 caracteres</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Enviar</Button>
                  </form>
                </Form>
              );
            };

            return <TextareaForm />;
          })(),
          code: `<FormField
  control={form.control}
  name="message"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Mensaje</FormLabel>
      <FormControl>
        <Textarea placeholder="Escribe tu mensaje..." {...field} />
      </FormControl>
      <FormDescription>Máximo 200 caracteres</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>`
        },
        {
          title: "Form with RadioGroup",
          description: "Formulario con opciones de radio button",
          preview: (() => {
            const radioFormSchema = z.object({
              notification: z.enum(["email", "sms", "none"], {
                required_error: "Selecciona una opción",
              }),
            });

            const RadioForm = () => {
              const radioForm = useForm<z.infer<typeof radioFormSchema>>({
                resolver: zodResolver(radioFormSchema),
              });

              function onSubmit(values: z.infer<typeof radioFormSchema>) {
                toast.success("Preferencia guardada: " + values.notification);
              }

              return (
                <Form {...radioForm}>
                  <form onSubmit={radioForm.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                    <FormField
                      control={radioForm.control}
                      name="notification"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Notificarme por:</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="email" />
                                </FormControl>
                                <FormLabel className="font-normal">Email</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="sms" />
                                </FormControl>
                                <FormLabel className="font-normal">SMS</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="none" />
                                </FormControl>
                                <FormLabel className="font-normal">No notificar</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Guardar preferencias</Button>
                  </form>
                </Form>
              );
            };

            return <RadioForm />;
          })(),
          code: `<FormField
  control={form.control}
  name="notification"
  render={({ field }) => (
    <FormItem className="space-y-3">
      <FormLabel>Notificarme por:</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex flex-col space-y-1"
        >
          <FormItem className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <RadioGroupItem value="email" />
            </FormControl>
            <FormLabel className="font-normal">Email</FormLabel>
          </FormItem>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>`
        },
        {
          title: "Complete Registration Form",
          description: "Formulario completo de registro con validaciones complejas",
          preview: (() => {
            const registrationSchema = z.object({
              fullName: z.string().min(2, { message: "Nombre muy corto" }),
              email: z.string().email({ message: "Email inválido" }),
              country: z.string({ required_error: "Selecciona un país" }),
            });

            const RegistrationForm = () => {
              const regForm = useForm<z.infer<typeof registrationSchema>>({
                resolver: zodResolver(registrationSchema),
                defaultValues: { fullName: "", email: "" },
              });

              function onSubmit(values: z.infer<typeof registrationSchema>) {
                toast.success("Registro exitoso", {
                  description: `Bienvenido ${values.fullName}`,
                });
              }

              return (
                <Form {...regForm}>
                  <form onSubmit={regForm.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                    <FormField
                      control={regForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={regForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@ejemplo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={regForm.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>País</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona tu país" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mx">México</SelectItem>
                              <SelectItem value="co">Colombia</SelectItem>
                              <SelectItem value="ar">Argentina</SelectItem>
                              <SelectItem value="cl">Chile</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">Registrarse</Button>
                  </form>
                </Form>
              );
            };

            return <RegistrationForm />;
          })(),
          code: `const registrationSchema = z.object({
  fullName: z.string().min(2, { message: "Nombre muy corto" }),
  email: z.string().email({ message: "Email inválido" }),
  country: z.string({ required_error: "Selecciona un país" }),
});

const form = useForm<z.infer<typeof registrationSchema>>({
  resolver: zodResolver(registrationSchema),
  defaultValues: { fullName: "", email: "" },
});

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="fullName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre completo</FormLabel>
          <FormControl>
            <Input placeholder="Juan Pérez" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    {/* Más campos... */}
    <Button type="submit" className="w-full">Registrarse</Button>
  </form>
</Form>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa de los componentes Form</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Componente</th>
                    <th className="text-left p-2 text-foreground">Tipo</th>
                    <th className="text-left p-2 text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">Form</code></td>
                    <td className="p-2">FormProvider</td>
                    <td className="p-2">Root provider de react-hook-form con contexto</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">FormField</code></td>
                    <td className="p-2">Controller</td>
                    <td className="p-2">Wrapper para inputs controlados con validación</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">FormItem</code></td>
                    <td className="p-2">div</td>
                    <td className="p-2">Contenedor con espaciado automático</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">FormLabel</code></td>
                    <td className="p-2">label</td>
                    <td className="p-2">Label con asociación automática al input</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">FormControl</code></td>
                    <td className="p-2">Slot</td>
                    <td className="p-2">Wrapper que pasa props al input</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">FormDescription</code></td>
                    <td className="p-2">p</td>
                    <td className="p-2">Texto de ayuda descriptivo</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">FormMessage</code></td>
                    <td className="p-2">p</td>
                    <td className="p-2">Mensaje de error con validación automática</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Form</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔐 Formularios de Login</h4>
                  <p className="text-sm text-muted-foreground">
                    Email, password con validación y manejo de errores
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Formularios de Registro</h4>
                  <p className="text-sm text-muted-foreground">
                    Múltiples campos con validaciones complejas y confirmación
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⚙️ Formularios de Configuración</h4>
                  <p className="text-sm text-muted-foreground">
                    Settings con checkboxes, radio buttons y selects
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💳 Formularios de Pago</h4>
                  <p className="text-sm text-muted-foreground">
                    Datos sensibles con validación estricta y formato
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Formularios de Búsqueda</h4>
                  <p className="text-sm text-muted-foreground">
                    Filtros avanzados con múltiples criterios de búsqueda
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">✍️ Formularios de Contacto</h4>
                  <p className="text-sm text-muted-foreground">
                    Mensajes con textarea, email y validación personalizada
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de Form</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">zodResolver</code> con Zod para validaciones type-safe y mensajes claros</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Define <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">defaultValues</code> para evitar inputs no controlados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa FormDescription para guiar al usuario con textos de ayuda contextual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Coloca FormMessage debajo de cada campo para mostrar errores específicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">form.handleSubmit</code> para manejar validación antes de submit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para Select y custom inputs, usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">onValueChange</code> en lugar de onChange</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aplica <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">space-y-4</code> o <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">space-y-6</code> al form para espaciado consistente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">form.formState.isSubmitting</code> para deshabilitar el botón durante submit</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}