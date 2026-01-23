import { ComponentShowcase } from "../ui/component-showcase";
import { MasonryGrid } from "../advanced/MasonryGrid";
import { Card } from "../ui/card";

const mockItems = [
  { id: 1, title: "Item 1", height: 200, color: "bg-blue-100 dark:bg-blue-900" },
  { id: 2, title: "Item 2", height: 300, color: "bg-green-100 dark:bg-green-900" },
  { id: 3, title: "Item 3", height: 150, color: "bg-purple-100 dark:bg-purple-900" },
  { id: 4, title: "Item 4", height: 250, color: "bg-pink-100 dark:bg-pink-900" },
  { id: 5, title: "Item 5", height: 180, color: "bg-yellow-100 dark:bg-yellow-900" },
  { id: 6, title: "Item 6", height: 220, color: "bg-indigo-100 dark:bg-indigo-900" },
  { id: 7, title: "Item 7", height: 280, color: "bg-red-100 dark:bg-red-900" },
  { id: 8, title: "Item 8", height: 160, color: "bg-teal-100 dark:bg-teal-900" },
];

function MasonryGridDemo() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Masonry Grid (Estilo Pinterest)</h3>
      <MasonryGrid columns={3} gap={16}>
        {mockItems.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg ${item.color} p-4 flex items-center justify-center font-semibold`}
            style={{ height: item.height }}
          >
            {item.title}
          </div>
        ))}
      </MasonryGrid>
    </Card>
  );
}

export function MasonryGridPage() {
  return (
    <ComponentShowcase
      title="Masonry Grid"
      description="Grid estilo Pinterest con items de diferentes alturas que se distribuyen en columnas. Perfecto para galerías y feeds."
      previewComponent={<MasonryGridDemo />}
      codeBlock={`import { MasonryGrid } from "@biomahd-creator/financio-design-system/advanced";

<MasonryGrid columns={3} gap={16}>
  {items.map(item => (
    <Card key={item.id}>
      <img src={item.image} />
      <h3>{item.title}</h3>
    </Card>
  ))}
</MasonryGrid>`}
      usageExample={`// Galería de imágenes
<MasonryGrid columns={4} gap={20}>
  {images.map(img => (
    <img key={img.id} src={img.url} alt={img.alt} />
  ))}
</MasonryGrid>`}
    />
  );
}
