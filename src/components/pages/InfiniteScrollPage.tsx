import { ComponentShowcase } from "../ui/component-showcase";
import { InfiniteScroll } from "../advanced/InfiniteScroll";
import { Card } from "../ui/card";
import { useState } from "react";

function InfiniteScrollDemo() {
  const [items, setItems] = useState<number[]>(Array.from({ length: 20 }, (_, i) => i));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from(
        { length: 20 },
        (_, i) => items.length + i
      );
      setItems([...items, ...newItems]);
      setLoading(false);
      if (items.length > 100) setHasMore(false);
    }, 1000);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Scroll Infinito</h3>
      <div className="border rounded-lg max-h-[500px] overflow-auto">
        <InfiniteScroll
          hasMore={hasMore}
          loading={loading}
          onLoadMore={loadMore}
        >
          {items.map((item) => (
            <div
              key={item}
              className="p-4 border-b last:border-0 hover:bg-muted/50"
            >
              <p className="font-medium">Item #{item + 1}</p>
              <p className="text-sm text-muted-foreground">
                Contenido del item {item + 1}
              </p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </Card>
  );
}

export function InfiniteScrollPage() {
  return (
    <ComponentShowcase
      title="Infinite Scroll"
      description="Carga automática de contenido al hacer scroll. Ideal para feeds, listas largas y resultados paginados."
      previewComponent={<InfiniteScrollDemo />}
      codeBlock={`import { InfiniteScroll } from "@biomahd-creator/financio-design-system/advanced";

const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
const [hasMore, setHasMore] = useState(true);

const loadMore = () => {
  setLoading(true);
  fetchMoreData().then(newItems => {
    setItems([...items, ...newItems]);
    setLoading(false);
  });
};

<InfiniteScroll
  hasMore={hasMore}
  loading={loading}
  onLoadMore={loadMore}
>
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</InfiniteScroll>`}
      usageExample={`// Feed de actividades
<InfiniteScroll
  hasMore={hasMoreActivities}
  loading={loadingActivities}
  onLoadMore={loadActivities}
>
  {activities.map(activity => (
    <ActivityCard key={activity.id} activity={activity} />
  ))}
</InfiniteScroll>`}
    />
  );
}
