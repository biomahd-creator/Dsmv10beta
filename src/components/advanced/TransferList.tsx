import * as React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "../ui/utils";

interface TransferListItem {
  id: string;
  label: string;
  disabled?: boolean;
}

interface TransferListProps {
  leftTitle?: string;
  rightTitle?: string;
  leftItems: TransferListItem[];
  rightItems: TransferListItem[];
  onTransfer: (items: TransferListItem[], direction: "left" | "right") => void;
  className?: string;
}

export function TransferList({
  leftTitle = "Disponibles",
  rightTitle = "Seleccionados",
  leftItems,
  rightItems,
  onTransfer,
  className,
}: TransferListProps) {
  const [leftChecked, setLeftChecked] = React.useState<string[]>([]);
  const [rightChecked, setRightChecked] = React.useState<string[]>([]);

  const handleToggle = (id: string, side: "left" | "right") => {
    const setter = side === "left" ? setLeftChecked : setRightChecked;
    const current = side === "left" ? leftChecked : rightChecked;

    if (current.includes(id)) {
      setter(current.filter((item) => item !== id));
    } else {
      setter([...current, id]);
    }
  };

  const handleTransferRight = () => {
    const itemsToTransfer = leftItems.filter((item) =>
      leftChecked.includes(item.id)
    );
    onTransfer(itemsToTransfer, "right");
    setLeftChecked([]);
  };

  const handleTransferLeft = () => {
    const itemsToTransfer = rightItems.filter((item) =>
      rightChecked.includes(item.id)
    );
    onTransfer(itemsToTransfer, "left");
    setRightChecked([]);
  };

  const renderList = (
    items: TransferListItem[],
    checked: string[],
    side: "left" | "right"
  ) => (
    <div className="space-y-2 max-h-80 overflow-y-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "flex items-center space-x-2 p-2 rounded hover:bg-accent",
            item.disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <Checkbox
            checked={checked.includes(item.id)}
            onCheckedChange={() => handleToggle(item.id, side)}
            disabled={item.disabled}
          />
          <label className="flex-1 text-sm cursor-pointer">
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("grid grid-cols-[1fr_auto_1fr] gap-4 items-center", className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">{leftTitle}</CardTitle>
        </CardHeader>
        <CardContent>{renderList(leftItems, leftChecked, "left")}</CardContent>
      </Card>

      <div className="flex flex-col gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleTransferRight}
          disabled={leftChecked.length === 0}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={handleTransferLeft}
          disabled={rightChecked.length === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">{rightTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          {renderList(rightItems, rightChecked, "right")}
        </CardContent>
      </Card>
    </div>
  );
}
