import { ComponentShowcase } from "../ui/component-showcase";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function PopoverPage() {
  return (
    <ComponentShowcase
      title="Popover"
      description="Displays rich content in a portal, triggered by a button"
      category="Feedback"
      
      preview={
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium">Popover Title</h4>
              <p className="text-sm text-muted-foreground">
                This is a simple popover with some content.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      }
      
      code={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Popover Title</h4>
          <p className="text-sm text-muted-foreground">
            This is a simple popover with some content.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}`}
      
      usage="Importa Popover, PopoverTrigger y PopoverContent desde @/components/ui/popover. Envuelve el botón trigger con PopoverTrigger usando asChild, y define el contenido dentro de PopoverContent."
      
      usageCode={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

function MyComponent() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Your content here</p>
      </PopoverContent>
    </Popover>
  );
}`}
      
      props={[
        {
          name: "open",
          type: "boolean",
          description: "Estado controlado del popover (abierto/cerrado)",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Callback cuando cambia el estado del popover",
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"bottom"',
          description: "El lado preferido donde aparecerá el popover",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          default: '"center"',
          description: "La alineación del popover respecto al trigger",
        },
      ]}
      
      examples={[
        {
          title: "Popover with Form",
          description: "Interactive popover with inputs for collecting data",
          preview: (
            <Popover>
              <PopoverTrigger asChild>
                <Button>Update dimensions</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width">Width</Label>
                    <Input id="width" placeholder="100%" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input id="height" placeholder="25px" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ),
          code: `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<Popover>
  <PopoverTrigger asChild>
    <Button>Update dimensions</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="width">Width</Label>
        <Input id="width" placeholder="100%" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="height">Height</Label>
        <Input id="height" placeholder="25px" />
      </div>
    </div>
  </PopoverContent>
</Popover>`
        },
      ]}
    />
  );
}
