import { 
  MousePointerClick, 
  FormInput, 
  Compass, 
  Grid3x3, 
  MessageSquare, 
  LayoutGrid,
  Sparkles,
  CheckCircle,
  Accessibility,
  Palette,
  Paintbrush,
  Scale,
  Zap,
  Home,
  Search,
  PanelLeft,
  X,
  Clapperboard,
  ImageIcon,
  BookOpen,
  Layers,
  FileText,
  Upload,
  ListChecks,
  Workflow,
  TrendingUp,
  // Actions icons
  ToggleLeft,
  ToggleRight,
  // Advanced icons
  BarChart3,
  PieChart,
  Table,
  GitBranch,
  Download,
  Star,
  Type,
  Clock,
  List,
  ArrowDown,
  SeparatorHorizontal,
  CirclePlus,
  PanelBottom,
  Columns,
  ArrowLeftRight,
  Activity,
  AreaChart,
  // Data Display icons
  Square,
  Table2,
  Award,
  User,
  MousePointer,
  Minus,
  // Feedback icons
  AlertCircle,
  AlertTriangle,
  Bell,
  HelpCircle,
  Loader,
  Box,
  SidebarOpen,
  MessageCircle,
  // Forms icons
  FileUp,
  AlignLeft,
  Maximize2,
  ChevronDown,
  CheckSquare,
  Circle,
  SlidersHorizontal,
  Calendar,
  CalendarDays,
  CalendarRange,
  ChevronsUpDown,
  Hash,
  Tag,
  // Layout icons
  ChevronRight,
  ChevronsDown,
  Maximize,
  ScrollText,
  Sidebar as SidebarIcon,
  // Navigation icons
  LayoutDashboard,
  Terminal,
  Menu,
  MenuSquare,
  Navigation,
  ChevronsRight,
  MoreVertical
} from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  useSidebar,
} from "../ui/sidebar";
import { Badge } from "../ui/badge";
import { Logo } from "./Logo";

// ⚠️ CRITICAL: PageId es la FUENTE DE VERDAD de todos los IDs de página
// ⚠️ ANTES DE MODIFICAR: Leer /DSM_ARCHITECTURE.md sección "MAPA COMPLETO DE PageId"
// ⚠️ Cada PageId DEBE tener:
//    1. Caso en PageRenderer.tsx (switch statement)
//    2. Import del componente en PageRenderer.tsx
//    3. Item en menuSections array (abajo en línea 102+)
// ⚠️ NO eliminar PageId sin buscar TODAS las referencias (Ctrl+F)
export type PageId =
  // Home
  | "home"
  // Actions
  | "button" | "button-new" | "toggle" | "toggle-group"
  // Forms
  | "input" | "input-new" | "input-file" | "select" | "select-new" | "checkbox" | "checkbox-new" | "radio-group" | "radio-group-new" | "switch" | "switch-new" | "slider" | "slider-new"
  | "textarea" | "textarea-new" | "textarea-autoresize" | "calendar" | "calendar-new" | "form" | "form-new" | "input-otp" | "input-otp-new" | "label" | "combobox" | "combobox-new" | "multi-select" | "date-picker" | "date-picker-new" | "date-range-picker"
  // Navigation
  | "tabs" | "tabs-new" | "breadcrumb" | "command" | "dropdown-menu" | "menubar" 
  | "navigation-menu" | "pagination" | "context-menu"
  // Data Display
  | "card" | "card-new" | "badge" | "badge-new" | "avatar" | "hover-card" | "separator"
  // Feedback
  | "alert" | "alert-new" | "alert-dialog" | "dialog" | "dialog-new" | "toast" | "tooltip" | "progress" 
  | "skeleton" | "sheet" | "drawer" | "popover"
  // Layout
  | "accordion" | "carousel" | "collapsible" | "resizable" | "scroll-area" | "sidebar-showcase"
  // Patterns
  | "invoice-generator" | "payment-form" | "editable-table" | "invoice-upload" | "business-components"
  | "stats-dashboard" | "quick-action" | "data-table-advanced" | "advanced-filter" | "approval-timeline" | "multi-step-wizard" | "multi-step-form" | "multi-step-form-vertical" | "multi-step-wizard-vertical"
  | "empty-state" | "error-boundary"
  // Atomic
  | "atomic-atoms" | "atomic-molecules" | "atomic-organisms" | "atomic-templates" | "atomic-pages"
  // Advanced
  | "charts" | "color-picker" | "rating" | "date-range-advanced" | "file-uploader" | "rich-text-editor" | "timeline" | "data-table" | "tree-table" | "pivot-table" | "export-data" | "kpi-showcase"
  | "virtualized-list" | "infinite-scroll" | "split-button" | "floating-action-button" | "bottom-sheet" | "masonry-grid" | "transfer-list" | "radar-chart" | "area-chart" | "org-chart"
  // Business Components
  | "invoice-card" | "payor-card" | "risk-indicator" | "cash-flow-projection" | "liquidity-meter" | "factoring-rate-display" | "document-verification" | "collection-timeline"
  // Data Visualization (Medium Priority)
  | "data-visualization"
  // Advanced Forms (Medium Priority)
  | "advanced-forms"
  // Special
  | "official" | "accessibility" | "brand-layout" | "theme-customizer" | "elevation" | "grid-showcase" | "help-system-demo" | "animations" | "icon-gallery" | "changelog";

interface SidebarProps extends React.ComponentProps<typeof Sidebar> {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
}

interface MenuItem {
  id: PageId;
  label: string;
  new?: boolean;
}

export function SidebarNew({ activePage, onPageChange, ...props }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleSidebar } = useSidebar();

  const components = [
    // Actions
    { id: "button", label: "Button", icon: MousePointerClick },
    { id: "toggle", label: "Toggle", icon: ToggleLeft },
    { id: "toggle-group", label: "Toggle Group", icon: ToggleRight },
    
    // Advanced
    { id: "charts", label: "Charts", icon: BarChart3 },
    { id: "data-visualization", label: "Data Visualization", new: true, icon: PieChart },
    { id: "advanced-forms", label: "Advanced Forms", new: true, icon: FormInput },
    { id: "data-table", label: "Data Table", icon: Table },
    { id: "tree-table", label: "Tree Table", icon: GitBranch },
    { id: "pivot-table", label: "Pivot Table", icon: Grid3x3 },
    { id: "export-data", label: "Export Data", icon: Download },
    { id: "color-picker", label: "Color Picker", icon: Palette },
    { id: "rating", label: "Rating", icon: Star },
    { id: "file-uploader", label: "File Uploader", icon: Upload },
    { id: "rich-text-editor", label: "Rich Text Editor", icon: Type },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "kpi-showcase", label: "KPI Showcase", new: true, icon: TrendingUp },
    { id: "virtualized-list", label: "Virtualized List", icon: List },
    { id: "infinite-scroll", label: "Infinite Scroll", icon: ArrowDown },
    { id: "split-button", label: "Split Button", icon: SeparatorHorizontal },
    { id: "floating-action-button", label: "Floating Action Button", icon: CirclePlus },
    { id: "bottom-sheet", label: "Bottom Sheet", icon: PanelBottom },
    { id: "masonry-grid", label: "Masonry Grid", icon: Columns },
    { id: "transfer-list", label: "Transfer List", icon: ArrowLeftRight },
    { id: "radar-chart", label: "Radar Chart", icon: Activity },
    { id: "area-chart", label: "Area Chart", icon: AreaChart },
    { id: "org-chart", label: "Org Chart", icon: Workflow },

    // Data Display
    { id: "card", label: "Card", icon: Square },
    { id: "table", label: "Table", icon: Table2 },
    { id: "badge", label: "Badge", icon: Award },
    { id: "avatar", label: "Avatar", icon: User },
    { id: "hover-card", label: "Hover Card", icon: MousePointer },
    { id: "separator", label: "Separator", icon: Minus },

    // Feedback
    { id: "alert", label: "Alert", icon: AlertCircle },
    { id: "alert-dialog", label: "Alert Dialog", icon: AlertTriangle },
    { id: "dialog", label: "Dialog", icon: MessageSquare },
    { id: "toast", label: "Toast (Sonner)", icon: Bell },
    { id: "tooltip", label: "Tooltip", icon: HelpCircle },
    { id: "progress", label: "Progress", icon: Loader },
    { id: "skeleton", label: "Skeleton", icon: Box },
    { id: "sheet", label: "Sheet", icon: SidebarOpen },
    { id: "drawer", label: "Drawer", icon: PanelLeft },
    { id: "popover", label: "Popover", icon: MessageCircle },

    // Forms
    { id: "input", label: "Input", icon: FormInput },
    { id: "input-file", label: "Input File", icon: FileUp },
    { id: "textarea", label: "Textarea", icon: AlignLeft },
    { id: "textarea-autoresize", label: "Textarea Autoresize", icon: Maximize2 },
    { id: "select", label: "Select", icon: ChevronDown },
    { id: "checkbox", label: "Checkbox", icon: CheckSquare },
    { id: "radio-group", label: "Radio Group", icon: Circle },
    { id: "switch", label: "Switch", icon: ToggleRight },
    { id: "slider", label: "Slider", icon: SlidersHorizontal },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "date-picker", label: "Date Picker", icon: CalendarDays },
    { id: "date-range-picker", label: "Date Range Picker", icon: CalendarRange },
    { id: "combobox", label: "Combobox", icon: ChevronsUpDown },
    { id: "multi-select", label: "Multi Select", icon: ListChecks },
    { id: "form", label: "Form", icon: FileText },
    { id: "input-otp", label: "Input OTP", icon: Hash },
    { id: "label", label: "Label", icon: Tag },

    // Layout
    { id: "accordion", label: "Accordion", icon: ChevronRight },
    { id: "carousel", label: "Carousel", icon: ImageIcon },
    { id: "collapsible", label: "Collapsible", icon: ChevronsDown },
    { id: "resizable", label: "Resizable", icon: Maximize },
    { id: "scroll-area", label: "Scroll Area", icon: ScrollText },
    { id: "sidebar-showcase", label: "Sidebar", icon: SidebarIcon },
    { id: "grid-showcase", label: "Grid Showcase", icon: LayoutGrid },

    // Navigation
    { id: "tabs", label: "Tabs", icon: LayoutDashboard },
    { id: "breadcrumb", label: "Breadcrumb", icon: ChevronRight },
    { id: "command", label: "Command", icon: Terminal },
    { id: "dropdown-menu", label: "Dropdown Menu", icon: Menu },
    { id: "menubar", label: "Menubar", icon: MenuSquare },
    { id: "navigation-menu", label: "Navigation Menu", icon: Navigation },
    { id: "pagination", label: "Pagination", icon: ChevronsRight },
    { id: "context-menu", label: "Context Menu", icon: MoreVertical },
  ].sort((a, b) => a.label.localeCompare(b.label));

  const designSystemPages: MenuItem[] = [
    { id: "brand-layout", label: "Brand Layout" },
    { id: "theme-customizer", label: "Theme Customizer" },
    { id: "elevation", label: "Elevation Styles" },
  ];

  const patternsPages: MenuItem[] = [
    { id: "business-components", label: "Business Components" },
    { id: "editable-table", label: "Editable Table" },
    { id: "invoice-generator", label: "Invoice Generator" },
    { id: "invoice-upload", label: "Invoice Upload" },
    { id: "multi-step-form", label: "Multi-Step Form" },
    { id: "multi-step-form-vertical", label: "Multi-Step Form (Vertical)" },
    { id: "multi-step-wizard", label: "Multi-Step Wizard" },
    { id: "multi-step-wizard-vertical", label: "Multi-Step Wizard (Vertical)" },
    { id: "empty-state", label: "Empty State" },
    { id: "error-boundary", label: "Error Boundary" },
  ].sort((a, b) => a.label.localeCompare(b.label));

  const businessPages: MenuItem[] = [
    { id: "invoice-card", label: "Invoice Card", new: true },
    { id: "payor-card", label: "Payor Card", new: true },
    { id: "risk-indicator", label: "Risk Indicator", new: true },
    { id: "cash-flow-projection", label: "Cash Flow Projection", new: true },
    { id: "liquidity-meter", label: "Liquidity Meter", new: true },
    { id: "factoring-rate-display", label: "Factoring Rate", new: true },
    { id: "document-verification", label: "Document Verification", new: true },
    { id: "collection-timeline", label: "Collection Timeline", new: true },
  ].sort((a, b) => a.label.localeCompare(b.label));

  const resourcePages: MenuItem[] = [
    { id: "animations", label: "Animations", new: true },
    { id: "icon-gallery", label: "Icon Gallery", new: true },
    { id: "help-system-demo", label: "Help System" },
  ];

  const specialPages: MenuItem[] = [
    { id: "official", label: "Official Verification" },
    { id: "accessibility", label: "WCAG Accessibility" },
    { id: "changelog", label: "Changelog" },
  ];

  // Flatten items for search (updated to use the new components array)
  const allItems = [
    ...components.map(item => ({ 
      ...item, 
      section: "Components",
    })),
    ...resourcePages.map(item => ({ 
      ...item, 
      section: "Analysis", 
      icon: Sparkles 
    })),
    ...specialPages.map(item => ({ 
      ...item, 
      section: "Analysis", 
      icon: Sparkles 
    })),
    ...designSystemPages.map(item => ({ 
      ...item, 
      section: "Design System", 
      icon: Sparkles 
    })),
    ...patternsPages.map(item => ({ 
      ...item, 
      section: "Patterns", 
      icon: Sparkles 
    })),
    ...businessPages.map(item => ({ 
      ...item, 
      section: "Business Components", 
      icon: Sparkles 
    }))
  ];

  const searchResults = searchQuery 
    ? allItems.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <Sidebar 
      collapsible="icon" 
      {...props} 
      className="border-r border-sidebar-border"
    >
      <SidebarHeader>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-2 py-2">
            <Logo size="md" variant="auto" className="flex-shrink-0" />
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={activePage === "home"}
                onClick={() => onPageChange("home")}
                tooltip="Home"
                className="w-full"
              >
                <Home className="h-4 w-4" />
                <span className="text-sidebar-foreground">Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Search Input */}
          <div className="px-2 pb-2">
            <div className="relative group/search">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-sidebar-foreground/50 transition-colors group-focus-within/search:text-primary" />
              <input
                type="text"
                placeholder="Buscar componente..."
                className="w-full rounded-md bg-sidebar-accent/20 border border-sidebar-border/50 pl-9 pr-8 py-2 text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:bg-sidebar-accent/30 focus:border-primary/50 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-2.5 text-sidebar-foreground/50 hover:text-sidebar-foreground p-0.5 hover:bg-sidebar-accent/50 rounded-sm transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="overflow-y-auto no-scrollbar">
        {searchQuery ? (
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground/90 px-2 mb-2">
              Resultados ({searchResults.length})
            </SidebarGroupLabel>
            <SidebarMenu>
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={activePage === item.id}
                      onClick={() => {
                        onPageChange(item.id);
                        // Optional: keep search active or clear it? keeping it active is usually better for browsing results
                      }}
                      tooltip={item.label}
                      className="h-auto py-2"
                    >
                      {item.icon ? <item.icon className="h-4 w-4 shrink-0" /> : <Sparkles className="h-4 w-4 shrink-0" />}
                      <div className="flex flex-col gap-0.5 items-start overflow-hidden w-full">
                        <span className="text-sidebar-foreground truncate w-full">{item.label}</span>
                        <span className="text-xs text-sidebar-foreground/50 uppercase">{item.section}</span>
                      </div>
                      {item.new && (
                        <Badge variant="default" className="ml-auto h-4 px-1 text-xs border-none bg-primary text-primary-foreground font-medium">
                          NEW
                        </Badge>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              ) : (
                <div className="px-4 py-12 flex flex-col items-center text-center gap-2">
                   <div className="h-12 w-12 rounded-full bg-sidebar-accent/20 flex items-center justify-center text-sidebar-foreground/30">
                     <Search className="h-6 w-6" />
                   </div>
                   <p className="text-sm text-sidebar-foreground/60">
                     No se encontraron resultados para "{searchQuery}"
                   </p>
                </div>
              )}
            </SidebarMenu>
          </SidebarGroup>
        ) : (
          <>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Components</SidebarGroupLabel>
          <SidebarMenu>
            {components.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton 
                  isActive={activePage === item.id}
                  onClick={() => onPageChange(item.id)}
                  tooltip={item.label}
                >
                  <item.icon />
                  <span className="flex flex-1 items-center gap-2 overflow-hidden text-sidebar-foreground group-data-[active=true]/menu-button:text-sidebar-primary-foreground group-data-[active=true]/menu-button:font-medium">
                    <span className="truncate">{item.label}</span>
                    {item.new && (
                      <Badge variant="default" className="shrink-0 h-4 px-1 text-xs border-none font-medium">
                        NEW
                      </Badge>
                    )}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Recursos</SidebarGroupLabel>
          <SidebarMenu>
            {resourcePages.map((page) => (
              <SidebarMenuItem key={page.id}>
                <SidebarMenuButton 
                  isActive={activePage === page.id}
                  onClick={() => onPageChange(page.id)}
                  tooltip={page.label}
                >
                  {page.id === "help-system-demo" && <Zap />}
                  {page.id === "animations" && <Clapperboard />}
                  {page.id === "icon-gallery" && <ImageIcon />}
                  <span className="flex flex-1 items-center gap-2 overflow-hidden text-sidebar-foreground group-data-[active=true]/menu-button:text-sidebar-primary-foreground group-data-[active=true]/menu-button:font-medium">
                    <span className="truncate">{page.label}</span>
                    {page.new && (
                      <Badge variant="default" className="shrink-0 h-4 px-1 text-xs border-none font-medium">
                        NEW
                      </Badge>
                    )}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Design System</SidebarGroupLabel>
          <SidebarMenu>
            {designSystemPages.map((page) => (
              <SidebarMenuItem key={page.id}>
                <SidebarMenuButton 
                  isActive={activePage === page.id}
                  onClick={() => onPageChange(page.id)}
                  tooltip={page.label}
                >
                  {page.id === "brand-layout" && <Paintbrush />}
                  {page.id === "theme-customizer" && <Palette />}
                  {page.id === "elevation" && <Scale />}
                  <span className="flex flex-1 items-center gap-2 overflow-hidden text-sidebar-foreground group-data-[active=true]/menu-button:text-sidebar-primary-foreground group-data-[active=true]/menu-button:font-medium">
                    <span className="truncate">{page.label}</span>
                    {page.new && (
                      <Badge variant="default" className="shrink-0 h-4 px-1 text-xs border-none font-medium">
                        NEW
                      </Badge>
                    )}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Patterns</SidebarGroupLabel>
          <SidebarMenu>
            {patternsPages.map((page) => (
              <SidebarMenuItem key={page.id}>
                <SidebarMenuButton 
                  isActive={activePage === page.id}
                  onClick={() => onPageChange(page.id)}
                  tooltip={page.label}
                >
                  {page.id === "business-components" && <Layers />}
                  {page.id === "editable-table" && <ListChecks />}
                  {page.id === "invoice-generator" && <FileText />}
                  {page.id === "invoice-upload" && <Upload />}
                  {page.id === "multi-step-form" && <Workflow />}
                  {page.id === "multi-step-form-vertical" && <Workflow />}
                  {page.id === "multi-step-wizard" && <Workflow />}
                  {page.id === "multi-step-wizard-vertical" && <Workflow />}
                  <span className="flex flex-1 items-center gap-2 overflow-hidden text-sidebar-foreground group-data-[active=true]/menu-button:text-sidebar-primary-foreground group-data-[active=true]/menu-button:font-medium">
                    <span className="truncate">{page.label}</span>
                    {page.new && (
                      <Badge variant="default" className="shrink-0 h-4 px-1 text-xs border-none font-medium">
                        NEW
                      </Badge>
                    )}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Business Components</SidebarGroupLabel>
          <SidebarMenu>
            {businessPages.map((page) => (
              <SidebarMenuItem key={page.id}>
                <SidebarMenuButton 
                  isActive={activePage === page.id}
                  onClick={() => onPageChange(page.id)}
                  tooltip={page.label}
                >
                  {page.id === "invoice-card" && <FileText />}
                  {page.id === "payor-card" && <Layers />}
                  {page.id === "risk-indicator" && <Accessibility />}
                  {page.id === "cash-flow-projection" && <Sparkles />}
                  {page.id === "liquidity-meter" && <Scale />}
                  {page.id === "factoring-rate-display" && <Sparkles />}
                  {page.id === "document-verification" && <CheckCircle />}
                  {page.id === "collection-timeline" && <Workflow />}
                  <span className="flex flex-1 items-center gap-2 overflow-hidden text-sidebar-foreground group-data-[active=true]/menu-button:text-sidebar-primary-foreground group-data-[active=true]/menu-button:font-medium">
                    <span className="truncate">{page.label}</span>
                    {page.new && (
                      <Badge variant="default" className="shrink-0 h-4 px-1 text-xs border-none font-medium">
                        NEW
                      </Badge>
                    )}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90">Verificación</SidebarGroupLabel>
          <SidebarMenu>
            {specialPages.map((page) => (
              <SidebarMenuItem key={page.id}>
                <SidebarMenuButton 
                  isActive={activePage === page.id}
                  onClick={() => onPageChange(page.id)}
                  tooltip={page.label}
                >
                  {page.id === "official" && <CheckCircle />}
                  {page.id === "accessibility" && <Accessibility />}
                  {page.id === "changelog" && <BookOpen />}
                  <span className="text-sidebar-foreground group-data-[active=true]/menu-button:text-sidebar-primary-foreground group-data-[active=true]/menu-button:font-medium">{page.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
          </>
        )}
      </SidebarContent>

      <SidebarFooter>
         <div className="p-4 bg-sidebar-accent/10 rounded-lg m-2 group-data-[collapsible=icon]:hidden">
            <div className="flex items-center gap-2 text-sidebar-foreground/90 text-xs">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>189 Componentes</span>
            </div>
         </div>
         
         <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                onClick={toggleSidebar} 
                tooltip="Colapsar Sidebar"
              >
                <PanelLeft className="h-4 w-4" />
                <span>Colapsar Sidebar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}