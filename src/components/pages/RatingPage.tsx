import { ComponentShowcase } from "../ui/component-showcase";
import { Rating } from "../advanced/RatingComponent";
import { Separator } from "../ui/separator";

export function RatingPage() {
  return (
    <ComponentShowcase
      title="Rating"
      description="Interactive star rating component with different sizes and states"
      category="Advanced"
      
      preview={
        <Rating value={4} />
      }
      
      code={`import { Rating } from "@/components/advanced/RatingComponent"

export function RatingDemo() {
  return <Rating value={4} />
}`}
      
      usage="Importa Rating desde @/components/advanced/RatingComponent. El componente permite calificaciones interactivas con estrellas, ideal para feedback de usuarios, evaluaciones de calidad o niveles de riesgo."
      
      usageCode={`import { Rating } from "@/components/advanced/RatingComponent"
import { useState } from "react"

function MyComponent() {
  const [rating, setRating] = useState(0);
  
  return (
    <Rating 
      value={rating} 
      onChange={setRating}
    />
  );
}`}
      
      props={[
        {
          name: "value",
          type: "number",
          description: "Valor actual del rating (0-5)",
        },
        {
          name: "onChange",
          type: "(value: number) => void",
          description: "Callback cuando cambia el rating",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          description: "Tamaño de las estrellas",
        },
        {
          name: "readonly",
          type: "boolean",
          default: "false",
          description: "Si true, el rating no es editable",
        },
      ]}
      
      examples={[
        {
          title: "Available Sizes",
          description: "Rating component in different sizes",
          preview: (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Small:</span>
                <Rating size="sm" value={4} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Medium:</span>
                <Rating size="md" value={3} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Large:</span>
                <Rating size="lg" value={5} />
              </div>
            </div>
          ),
          code: `import { Rating } from "@/components/advanced/RatingComponent"

<div className="space-y-4">
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Small:</span>
    <Rating size="sm" value={4} />
  </div>
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Medium:</span>
    <Rating size="md" value={3} />
  </div>
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Large:</span>
    <Rating size="lg" value={5} />
  </div>
</div>`
        },
        {
          title: "States",
          description: "Interactive and read-only states",
          preview: (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Interactive:</span>
                <Rating value={0} />
                <span className="text-xs text-muted-foreground">
                  (Hover and click to select)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Read only:</span>
                <Rating value={4} readonly />
                <span className="text-xs text-muted-foreground">
                  (Not editable)
                </span>
              </div>
            </div>
          ),
          code: `import { Rating } from "@/components/advanced/RatingComponent"

<div className="space-y-4">
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Interactive:</span>
    <Rating value={0} />
  </div>
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Read only:</span>
    <Rating value={4} readonly />
  </div>
</div>`
        },
        {
          title: "Use Cases",
          description: "Real-world applications for rating component",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Service Quality
                  </span>
                  <Rating value={5} readonly size="sm" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Customer rating for the process
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Risk Level
                  </span>
                  <Rating value={2} readonly size="sm" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Credit risk evaluation
                </p>
              </div>
            </div>
          ),
          code: `import { Rating } from "@/components/advanced/RatingComponent"

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="p-4 border rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium">Service Quality</span>
      <Rating value={5} readonly size="sm" />
    </div>
    <p className="text-xs text-muted-foreground">
      Customer rating for the process
    </p>
  </div>
  <div className="p-4 border rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium">Risk Level</span>
      <Rating value={2} readonly size="sm" />
    </div>
    <p className="text-xs text-muted-foreground">
      Credit risk evaluation
    </p>
  </div>
</div>`
        },
      ]}
    />
  );
}
