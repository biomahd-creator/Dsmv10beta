import { ComponentShowcase } from "../ui/component-showcase";
import { ContextualHelp } from "../help/ContextualHelp";
import { ProductTour } from "../help/ProductTour";
import { vinculacionTourSteps } from "../help/tourSteps";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";

export function HelpSystemDemoPage() {
  const [taxId, setTaxId] = useState("");

  return (
    <ComponentShowcase
      title="Help System"
      description="Interactive help system including Contextual Help (tooltips/popovers), Product Tours, and Help Center integration."
      category="Patterns"
      
      // Main Preview: Contextual Help
      preview={
        <div className="w-full max-w-md space-y-6">
           <div id="tour-step-nit">
            <div className="flex items-center gap-2 mb-2">
              <Label htmlFor="tax-id">Company Tax ID (NIT)</Label>
              <ContextualHelp
                quickHelp="Enter without verification digit"
                detailedHelp="The Tax Identification Number (NIT) is a unique identifier assigned to your company. Enter only the numbers without the verification digit."
                title="About Tax ID (NIT)"
              />
            </div>
            <Input
              id="tax-id"
              placeholder="900123456"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
            />
            <p className="text-xs text-muted-foreground mt-1">
              9 digits without verification digit
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Label>Read-only Field</Label>
            <ContextualHelp
              quickHelp="This field cannot be edited"
              tooltipOnly
            />
          </div>
          
          <div className="flex items-center gap-2">
             <Label>Complex Term</Label>
             <ContextualHelp
                title="What is this?"
                detailedHelp="Detailed explanation about this complex term that requires more space than a tooltip."
                popoverOnly
             />
          </div>
        </div>
      }
      
      // Code
      code={`import { ContextualHelp } from "@/components/help/ContextualHelp";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function HelpDemo() {
  return (
    <div className="flex items-center gap-2 mb-2">
      <Label htmlFor="tax-id">Company Tax ID</Label>
      <ContextualHelp
        quickHelp="Enter without verification digit"
        detailedHelp="The Tax Identification Number is a unique identifier..."
        title="About Tax ID"
      />
    </div>
  );
}`}
      
      // Usage
      usage="El sistema de ayuda contextual combina Tooltip (para pistas rápidas al hover) y Popover (para explicaciones detalladas al click). Usa el componente `ContextualHelp` junto a Labels o encabezados."
      
      props={[
        {
          name: "quickHelp",
          type: "string",
          description: "Texto corto mostrado en el Tooltip (hover)",
        },
        {
          name: "detailedHelp",
          type: "string | ReactNode",
          description: "Contenido detallado mostrado en el Popover (click)",
        },
        {
          name: "title",
          type: "string",
          description: "Título del Popover",
        },
        {
          name: "tooltipOnly",
          type: "boolean",
          default: "false",
          description: "Si es true, solo muestra el tooltip",
        },
        {
          name: "popoverOnly",
          type: "boolean",
          default: "false",
          description: "Si es true, solo muestra el popover (icono ?)",
        },
      ]}
      
      examples={[
        {
          title: "Product Tour",
          description: "Guía paso a paso interactiva usando driver.js. Los pasos se vinculan a IDs de elementos en el DOM.",
          preview: (
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-card">
                <h4 className="font-semibold mb-2">Tour Controller</h4>
                <ProductTour
                  steps={vinculacionTourSteps}
                  tourId="demo-tour"
                  showButton={true}
                  buttonText="Start Demo Tour"
                  buttonVariant="default"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Click "Start Demo Tour" to highlight the elements in the main preview above (ensure "Company Tax ID" is visible).
              </p>
            </div>
          ),
          code: `import { ProductTour } from "@/components/help/ProductTour";
import { vinculacionTourSteps } from "@/components/help/tourSteps";

<ProductTour
  steps={vinculacionTourSteps}
  tourId="my-tour"
  showButton={true}
  buttonText="Start Tour"
/>`
        },
        {
          title: "Help Center",
          description: "Centro de ayuda centralizado (Docs, FAQs, Videos).",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">📚 FAQs</h3>
                  <p className="text-sm text-muted-foreground">Searchable frequently asked questions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">🎥 Videos</h3>
                  <p className="text-sm text-muted-foreground">Video tutorials for visual learners.</p>
                </CardContent>
              </Card>
            </div>
          ),
          code: `// The Help Center is typically a modal or dedicated page accessed via the global header.`
        }
      ]}
    />
  );
}