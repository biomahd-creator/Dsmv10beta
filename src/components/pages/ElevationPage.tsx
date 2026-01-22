import { ComponentShowcase } from "../ui/component-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function ElevationPage() {
  return (
    <ComponentShowcase
      title="Elevation & Shadows"
      description="System elevation styles designed for depth and hierarchy, adapted for light and dark modes."
      category="Design Tokens"
      
      // Main Preview
      preview={
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
          {/* Level 1 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-24 w-24 bg-card rounded-xl flex items-center justify-center shadow-elevation-1 transition-all hover:scale-105 duration-300">
              <span className="font-medium text-sm">Level 1</span>
            </div>
            <Badge variant="outline" className="text-[10px]">shadow-elevation-1</Badge>
          </div>

          {/* Level 2 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-24 w-24 bg-card rounded-xl flex items-center justify-center shadow-elevation-2 transition-all hover:scale-105 duration-300">
              <span className="font-medium text-sm">Level 2</span>
            </div>
            <Badge variant="outline" className="text-[10px]">shadow-elevation-2</Badge>
          </div>

          {/* Level 3 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-24 w-24 bg-card rounded-xl flex items-center justify-center shadow-elevation-3 transition-all hover:scale-105 duration-300">
              <span className="font-medium text-sm">Level 3</span>
            </div>
            <Badge variant="outline" className="text-[10px]">shadow-elevation-3</Badge>
          </div>

          {/* Level 4 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-24 w-24 bg-card rounded-xl flex items-center justify-center shadow-elevation-4 transition-all hover:scale-105 duration-300">
              <span className="font-medium text-sm">Level 4</span>
            </div>
            <Badge variant="outline" className="text-[10px]">shadow-elevation-4</Badge>
          </div>
        </div>
      }
      
      // Code
      code={`// Tailwind Classes
<div className="shadow-elevation-1">Level 1</div>
<div className="shadow-elevation-2">Level 2</div>
<div className="shadow-elevation-3">Level 3</div>
<div className="shadow-elevation-4">Level 4</div>`}
      
      // Usage
      usage="Usa las clases de utilidad `shadow-elevation-{1-4}` para aplicar sombras consistentes. Las sombras se adaptan automáticamente al modo claro/oscuro y tienen un tinte de color en modo claro para integrarse mejor con la marca."
      
      props={[]}
      
      examples={[
        {
          title: "Interactive Elevation",
          description: "Elevation change on hover to indicate interactivity",
          preview: (
            <Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow duration-300 cursor-pointer border-none w-full max-w-sm">
              <CardHeader>
                <CardTitle>Hover Me</CardTitle>
                <CardDescription>Starts at Level 1, lifts to Level 3</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Provides a tactile feel for clickable cards.
                </p>
              </CardContent>
            </Card>
          ),
          code: `<Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow duration-300 cursor-pointer border-none">
  <CardHeader>
    <CardTitle>Hover Me</CardTitle>
  </CardHeader>
</Card>`
        },
        {
          title: "Static Elevation",
          description: "Fixed elevation for floating elements like Dropdowns or Dialogs",
          preview: (
            <Card className="shadow-elevation-3 border-none w-full max-w-sm">
              <CardHeader>
                <CardTitle>Floating Element</CardTitle>
                <CardDescription>Fixed at Level 3</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Used for modals, drawers, and dropdowns to separate them from the background layer.
                </p>
              </CardContent>
            </Card>
          ),
          code: `<Card className="shadow-elevation-3 border-none">
  <CardHeader>
    <CardTitle>Floating Element</CardTitle>
  </CardHeader>
</Card>`
        }
      ]}
    />
  );
}
