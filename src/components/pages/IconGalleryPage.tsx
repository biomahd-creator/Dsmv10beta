import { ComponentShowcase } from "../ui/component-showcase";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import {
  // Arrows & Navigation
  ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ArrowUpRight, ArrowDownLeft, ArrowUpLeft, ArrowDownRight,
  ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ChevronsLeft, ChevronsRight, ChevronsUp, ChevronsDown,
  MoveHorizontal, MoveVertical, Move, 
  Map, MapPin, ExternalLink,
  
  // Actions & Editing
  Plus, Minus, X, Check, Copy, Edit, Edit2, Edit3, Trash, Trash2, Delete,
  Save, Download, Upload, Share, Share2, Send,
  RefreshCw,
  Search as SearchIcon, Filter, Settings, Sliders,
  
  // UI & Layout
  Layout, LayoutDashboard, LayoutGrid, LayoutList,
  Menu, MoreHorizontal, MoreVertical,
  Grid, List,
  
  // Communication & Social
  Mail, MessageCircle, MessageSquare,
  Phone, Video, Mic,
  Bell, 
  Heart, ThumbsUp, ThumbsDown,
  
  // Media & Files
  File, FileText, FilePlus, Folder, FolderOpen,
  Image, Camera, Video as VideoIcon,
  Play, Pause,
  
  // Status & Alerts
  CheckCircle, CheckCircle2, XCircle, AlertCircle, AlertTriangle, Info, HelpCircle,
  Lock, Unlock, Eye, EyeOff,
  Star,
  
  // User & People
  User, Users, UserPlus, UserCheck, UserX, UserCircle,
  
  // Commerce & Shopping
  ShoppingCart, CreditCard, DollarSign, Tag,
  
  // Time & Calendar
  Calendar, Clock, Timer,
  
  // Weather & Nature
  Sun, Moon, Cloud,
  
  // Technology & Development
  Code, Code2, Terminal, Database, Server, Cloud as CloudIcon,
  Smartphone, Laptop, Monitor,
  
  // Misc
  Home, Globe, Link, 
  Loader2, Loader
} from "lucide-react";

type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number; fill?: string }>;

interface IconEntry {
  name: string;
  Icon: IconComponent;
  importName: string;
}

const ICON_CATALOG: Record<string, IconEntry[]> = {
  arrows: [
    { name: "arrow-left", Icon: ArrowLeft, importName: "ArrowLeft" },
    { name: "arrow-right", Icon: ArrowRight, importName: "ArrowRight" },
    { name: "arrow-up", Icon: ArrowUp, importName: "ArrowUp" },
    { name: "arrow-down", Icon: ArrowDown, importName: "ArrowDown" },
    { name: "chevron-left", Icon: ChevronLeft, importName: "ChevronLeft" },
    { name: "chevron-right", Icon: ChevronRight, importName: "ChevronRight" },
    { name: "chevron-up", Icon: ChevronUp, importName: "ChevronUp" },
    { name: "chevron-down", Icon: ChevronDown, importName: "ChevronDown" },
    { name: "external-link", Icon: ExternalLink, importName: "ExternalLink" },
  ],
  actions: [
    { name: "plus", Icon: Plus, importName: "Plus" },
    { name: "minus", Icon: Minus, importName: "Minus" },
    { name: "x", Icon: X, importName: "X" },
    { name: "check", Icon: Check, importName: "Check" },
    { name: "edit", Icon: Edit2, importName: "Edit2" },
    { name: "trash", Icon: Trash2, importName: "Trash2" },
    { name: "search", Icon: SearchIcon, importName: "Search" },
    { name: "settings", Icon: Settings, importName: "Settings" },
    { name: "filter", Icon: Filter, importName: "Filter" },
    { name: "copy", Icon: Copy, importName: "Copy" },
    { name: "save", Icon: Save, importName: "Save" },
    { name: "download", Icon: Download, importName: "Download" },
    { name: "upload", Icon: Upload, importName: "Upload" },
    { name: "share", Icon: Share2, importName: "Share2" },
    { name: "refresh", Icon: RefreshCw, importName: "RefreshCw" },
    { name: "loader", Icon: Loader2, importName: "Loader2" },
  ],
  communication: [
    { name: "mail", Icon: Mail, importName: "Mail" },
    { name: "message-circle", Icon: MessageCircle, importName: "MessageCircle" },
    { name: "phone", Icon: Phone, importName: "Phone" },
    { name: "bell", Icon: Bell, importName: "Bell" },
    { name: "send", Icon: Send, importName: "Send" },
  ],
  media: [
    { name: "image", Icon: Image, importName: "Image" },
    { name: "file", Icon: File, importName: "File" },
    { name: "file-text", Icon: FileText, importName: "FileText" },
    { name: "folder", Icon: Folder, importName: "Folder" },
    { name: "camera", Icon: Camera, importName: "Camera" },
    { name: "play", Icon: Play, importName: "Play" },
    { name: "pause", Icon: Pause, importName: "Pause" },
  ],
  status: [
    { name: "check-circle", Icon: CheckCircle2, importName: "CheckCircle2" },
    { name: "alert-circle", Icon: AlertCircle, importName: "AlertCircle" },
    { name: "alert-triangle", Icon: AlertTriangle, importName: "AlertTriangle" },
    { name: "info", Icon: Info, importName: "Info" },
    { name: "help-circle", Icon: HelpCircle, importName: "HelpCircle" },
    { name: "lock", Icon: Lock, importName: "Lock" },
    { name: "eye", Icon: Eye, importName: "Eye" },
  ],
  user: [
    { name: "user", Icon: User, importName: "User" },
    { name: "users", Icon: Users, importName: "Users" },
    { name: "user-circle", Icon: UserCircle, importName: "UserCircle" },
  ],
  commerce: [
    { name: "shopping-cart", Icon: ShoppingCart, importName: "ShoppingCart" },
    { name: "credit-card", Icon: CreditCard, importName: "CreditCard" },
    { name: "dollar-sign", Icon: DollarSign, importName: "DollarSign" },
    { name: "tag", Icon: Tag, importName: "Tag" },
  ],
  tech: [
    { name: "code", Icon: Code2, importName: "Code2" },
    { name: "terminal", Icon: Terminal, importName: "Terminal" },
    { name: "database", Icon: Database, importName: "Database" },
    { name: "server", Icon: Server, importName: "Server" },
    { name: "cloud", Icon: CloudIcon, importName: "Cloud" },
  ],
  misc: [
    { name: "home", Icon: Home, importName: "Home" },
    { name: "calendar", Icon: Calendar, importName: "Calendar" },
    { name: "clock", Icon: Clock, importName: "Clock" },
    { name: "star", Icon: Star, importName: "Star" },
    { name: "heart", Icon: Heart, importName: "Heart" },
    { name: "menu", Icon: Menu, importName: "Menu" },
    { name: "more-vertical", Icon: MoreVertical, importName: "MoreVertical" },
    { name: "more-horizontal", Icon: MoreHorizontal, importName: "MoreHorizontal" },
  ]
};

const CATEGORY_LABELS: Record<string, string> = {
  arrows: "Arrows",
  actions: "Actions",
  communication: "Comm",
  media: "Media",
  status: "Status",
  user: "User",
  commerce: "Commerce",
  tech: "Tech",
  misc: "Misc"
};

function IconGrid({ icons, copiedIcon, onCopyIcon }: { icons: IconEntry[], copiedIcon: string | null, onCopyIcon: (name: string) => void }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {icons.map((icon) => (
        <button
          key={icon.name}
          onClick={() => {
            const code = `import { ${icon.importName} } from "lucide-react";`;
            navigator.clipboard.writeText(code);
            onCopyIcon(icon.importName);
          }}
          className="group relative flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-muted transition-colors"
          title={`Click to copy: ${icon.importName}`}
        >
          <icon.Icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
          <span className="text-xs text-center text-muted-foreground group-hover:text-foreground line-clamp-1">
            {icon.importName}
          </span>
          {copiedIcon === icon.importName && (
            <div className="absolute top-1 right-1">
              <Badge className="h-5 w-5 p-0 flex items-center justify-center">
                <Check className="h-3 w-3" />
              </Badge>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

function IconGalleryPreview() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCopyIcon = (iconName: string) => {
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const filteredIcons = useMemo(() => {
    let icons: IconEntry[] = [];
    if (selectedCategory === "all") {
      Object.values(ICON_CATALOG).forEach(cat => icons.push(...cat));
    } else {
      icons = ICON_CATALOG[selectedCategory] || [];
    }

    if (searchQuery) {
      icons = icons.filter(icon => 
        icon.importName.toLowerCase().includes(searchQuery.toLowerCase()) || 
        icon.name.includes(searchQuery.toLowerCase())
      );
    }
    return icons;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search icons..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge 
            variant={selectedCategory === "all" ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/90"
            onClick={() => setSelectedCategory("all")}
          >
            All
          </Badge>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <Badge
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/90"
              onClick={() => setSelectedCategory(key)}
            >
              {label}
            </Badge>
          ))}
        </div>
      </div>

      <div className="border rounded-lg p-4 bg-card max-h-[500px] overflow-y-auto">
        <IconGrid 
          icons={filteredIcons} 
          copiedIcon={copiedIcon} 
          onCopyIcon={handleCopyIcon}
        />
        {filteredIcons.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No icons found
          </div>
        )}
      </div>
    </div>
  );
}

export function IconGalleryPage() {
  return (
    <ComponentShowcase
      title="Icon Gallery"
      description="Curated gallery of most used lucide-react icons. Includes search and one-click copy."
      category="Icons"
      
      preview={<IconGalleryPreview />}
      
      code={`import { 
  Home, 
  Settings, 
  User, 
  Search, 
  Menu 
} from "lucide-react";

export function IconDemo() {
  return (
    <div className="flex gap-4">
      <Home className="h-6 w-6" />
      <Settings className="h-6 w-6 text-muted-foreground" />
      <User className="h-6 w-6 text-primary" />
    </div>
  );
}`}
      
      usage="Import icons as components from 'lucide-react'. Use className for sizing and coloring with Tailwind utilities."
      
      props={[
        {
          name: "size",
          type: "number | string",
          default: "24",
          description: "Icon size (width & height)",
        },
        {
          name: "strokeWidth",
          type: "number",
          default: "2",
          description: "Stroke thickness",
        },
        {
          name: "className",
          type: "string",
          description: "CSS classes",
        }
      ]}
      
      examples={[
        {
          title: "Sizing",
          description: "Control size with Tailwind classes (recommended) or size prop.",
          preview: (
            <div className="flex items-end gap-6">
              <div className="text-center">
                <Star className="h-4 w-4 mx-auto" />
                <span className="text-xs text-muted-foreground">h-4 w-4</span>
              </div>
              <div className="text-center">
                <Star className="h-6 w-6 mx-auto" />
                <span className="text-xs text-muted-foreground">h-6 w-6</span>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 mx-auto" />
                <span className="text-xs text-muted-foreground">h-8 w-8</span>
              </div>
            </div>
          ),
          code: `<Star className="h-4 w-4" />
<Star className="h-6 w-6" />
<Star className="h-8 w-8" />`
        }
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades de Lucide Icons</CardTitle>
              <CardDescription>API de iconos lucide-react</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">size</code></td>
                    <td className="p-2">number | string</td>
                    <td className="p-2">24</td>
                    <td className="p-2">Tamaño del icono en píxeles (width y height)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">strokeWidth</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">2</td>
                    <td className="p-2">Grosor del trazo SVG</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">color</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">currentColor</td>
                    <td className="p-2">Color del icono (hex, rgb o CSS variable)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS de Tailwind para tamaño, color, etc.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">absoluteStrokeWidth</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Mantiene strokeWidth absoluto al escalar</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones de iconos lucide-react</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎨 UI Components</h4>
                  <p className="text-sm text-muted-foreground">
                    Botones, inputs, menús y navegación con iconografía consistente
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Dashboards</h4>
                  <p className="text-sm text-muted-foreground">
                    KPIs, gráficos y estadísticas con iconos descriptivos para métricas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗂️ Navegación</h4>
                  <p className="text-sm text-muted-foreground">
                    Sidebars, breadcrumbs y menús de navegación principal
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">✅ Estados y Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    Success, error, warning, info en alerts, toasts y notifications
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⚙️ Toolbars</h4>
                  <p className="text-sm text-muted-foreground">
                    Barras de herramientas con acciones rápidas: editar, eliminar, compartir
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📱 Mobile Actions</h4>
                  <p className="text-sm text-muted-foreground">
                    Bottom navigation, FAB buttons y menús de acción en mobile
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de iconos lucide</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa clases Tailwind h-4 w-4 (16px), h-5 w-5 (20px), h-6 w-6 (24px) en lugar de prop size para consistencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aplica text-muted-foreground para iconos secundarios y text-primary para acciones principales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén strokeWidth=2 como default - solo cambia para iconos muy pequeños (&lt;16px) o grandes (&gt;32px)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa iconos semánticos: CheckCircle para success, AlertTriangle para warning, XCircle para error</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Acompaña iconos con labels en botones principales - mejora accesibilidad y comprensión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para iconos decorativos, usa aria-hidden="true" - para iconos funcionales, añade aria-label descriptivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Importa solo los iconos que usas - tree-shaking automático reduce bundle size significativamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén consistencia de tamaños: h-4 para inline text, h-5 para botones, h-6 para headers y navigation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}