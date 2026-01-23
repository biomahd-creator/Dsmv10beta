// Financio Design System - NPM Package Entry Point
// Version: 5.5.0
// Total Components: 189
// Updated: January 23, 2026

// ============================================================================
// UTILITIES
// ============================================================================
export { cn } from '../lib/utils';

// ============================================================================
// HOOKS
// ============================================================================
export { useIsMobile } from '../components/ui/use-mobile';

// ============================================================================
// UI COMPONENTS (shadcn/ui)
// ============================================================================

// Accordion
export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '../components/ui/accordion';

// Alert
export { Alert, AlertTitle, AlertDescription } from '../components/ui/alert';

// Alert Dialog
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../components/ui/alert-dialog';

// Aspect Ratio
export { AspectRatio } from '../components/ui/aspect-ratio';

// Avatar
export { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

// Badge
export { Badge, badgeVariants } from '../components/ui/badge';

// Breadcrumb
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '../components/ui/breadcrumb';

// Button
export { Button, buttonVariants } from '../components/ui/button';

// Calendar
export { Calendar } from '../components/ui/calendar';

// Card
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../components/ui/card';

// Carousel
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../components/ui/carousel';

// Chart
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from '../components/ui/chart';

// Checkbox
export { Checkbox } from '../components/ui/checkbox';

// Code Block
export { CodeBlock } from '../components/ui/code-block';

// Collapsible
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../components/ui/collapsible';

// Command
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '../components/ui/command';

// Component Showcase (utility component for DSM)
export { ComponentShowcase } from '../components/ui/component-showcase';

// Context Menu
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from '../components/ui/context-menu';

// Date Range Picker
export { DateRangePicker } from '../components/ui/date-range-picker';

// Dialog
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog';

// Drawer
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from '../components/ui/drawer';

// Dropdown Menu
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from '../components/ui/dropdown-menu';

// Form
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '../components/ui/form';

// Grid Showcase (utility component for DSM)
export { GridShowcase } from '../components/ui/grid-showcase';

// Hover Card
export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '../components/ui/hover-card';

// Icon Grid (utility component for DSM)
export { IconGrid } from '../components/ui/icon-grid';

// Input
export { Input } from '../components/ui/input';

// Input File
export { InputFile } from '../components/ui/input-file';

// Input OTP
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../components/ui/input-otp';

// Label
export { Label } from '../components/ui/label';

// Menubar
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
} from '../components/ui/menubar';

// Multi Select
export { MultiSelect } from '../components/ui/multi-select';

// Navigation Menu
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from '../components/ui/navigation-menu';

// Pagination
export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../components/ui/pagination';

// Popover
export { Popover, PopoverTrigger, PopoverContent } from '../components/ui/popover';

// Progress
export { Progress } from '../components/ui/progress';

// Radio Group
export { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

// Resizable
export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../components/ui/resizable';

// Scroll Area
export { ScrollArea, ScrollBar } from '../components/ui/scroll-area';

// Select
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from '../components/ui/select';

// Separator
export { Separator } from '../components/ui/separator';

// Sheet
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '../components/ui/sheet';

// Sidebar
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '../components/ui/sidebar';

// Skeleton
export { Skeleton } from '../components/ui/skeleton';

// Slider
export { Slider } from '../components/ui/slider';

// Sonner (Toast)
export { Toaster, toast } from '../components/ui/sonner';

// Switch
export { Switch } from '../components/ui/switch';

// Table
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '../components/ui/table';

// Tabs
export { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

// Textarea
export { Textarea } from '../components/ui/textarea';

// Textarea Autoresize
export { TextareaAutoresize } from '../components/ui/textarea-autoresize';

// Toggle
export { Toggle, toggleVariants } from '../components/ui/toggle';

// Toggle Group
export {
  ToggleGroup,
  ToggleGroupItem,
} from '../components/ui/toggle-group';

// Tooltip
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '../components/ui/tooltip';

// ============================================================================
// ADVANCED COMPONENTS
// ============================================================================

export { AreaChart } from '../components/advanced/AreaChart';
export { BottomSheet } from '../components/advanced/BottomSheet';
export { ChartShowcase } from '../components/advanced/ChartShowcase';
export { ColorPicker } from '../components/advanced/ColorPicker';
export { Combobox } from '../components/advanced/Combobox';
export { ConditionalForm } from '../components/advanced/ConditionalForm';
export { DataTable } from '../components/advanced/DataTable';
export { DatePickerWithPresets } from '../components/advanced/DatePickerWithPresets';
export { DateRangePicker as DateRangePickerAdvanced } from '../components/advanced/DateRangePicker';
export { ExportData } from '../components/advanced/ExportData';
export { FileUploader } from '../components/advanced/FileUploader';
export { FloatingActionButton } from '../components/advanced/FloatingActionButton';
export { FormBuilder } from '../components/advanced/FormBuilder';
export { FunnelChart } from '../components/advanced/FunnelChart';
export { GanttChart } from '../components/advanced/GanttChart';
export { GaugeChart } from '../components/advanced/GaugeChart';
export { Heatmap } from '../components/advanced/Heatmap';
export { InfiniteScroll } from '../components/advanced/InfiniteScroll';
export { InvoiceGenerator } from '../components/advanced/InvoiceGenerator';
export { KanbanBoard } from '../components/advanced/KanbanBoard';
export { MasonryGrid } from '../components/advanced/MasonryGrid';
export { MultiColumnForm } from '../components/advanced/MultiColumnForm';
export { MultiSelect as MultiSelectAdvanced } from '../components/advanced/MultiSelect';
export { OrgChart } from '../components/advanced/OrgChart';
export { PivotTable } from '../components/advanced/PivotTable';
export { RadarChart } from '../components/advanced/RadarChart';
export { RatingComponent } from '../components/advanced/RatingComponent';
export { RichTextEditor } from '../components/advanced/RichTextEditor';
export { SankeyDiagram } from '../components/advanced/SankeyDiagram';
export { Sparkline } from '../components/advanced/Sparkline';
export { SplitButton } from '../components/advanced/SplitButton';
export { StepIndicator } from '../components/advanced/StepIndicator';
export { Timeline } from '../components/advanced/Timeline';
export { TransferList } from '../components/advanced/TransferList';
export { TreeTable } from '../components/advanced/TreeTable';
export { TreemapChart } from '../components/advanced/TreemapChart';
export { VirtualizedList } from '../components/advanced/VirtualizedList';

// ============================================================================
// BUSINESS COMPONENTS
// ============================================================================

export { AuditLogViewer } from '../components/business/AuditLogViewer';
export { BarChart } from '../components/business/BarChart';
export { BookingCalendar } from '../components/business/BookingCalendar';
export { CashFlowProjection } from '../components/business/CashFlowProjection';
export { ChartLegendItem } from '../components/business/ChartLegendItem';
export { CollectionTimeline } from '../components/business/CollectionTimeline';
export { ColorBox } from '../components/business/ColorBox';
export { ColorPresetButton } from '../components/business/ColorPresetButton';
export { ColorSwatch } from '../components/business/ColorSwatch';
export { ContactForm } from '../components/business/ContactForm';
export { ContrastPreview } from '../components/business/ContrastPreview';
export { DocumentVerificationStatus } from '../components/business/DocumentVerificationStatus';
export { FactoringRateDisplay } from '../components/business/FactoringRateDisplay';
export { GridSystemPreview } from '../components/business/GridSystemPreview';
export { InvoiceCard } from '../components/business/InvoiceCard';
export { LiquidityMeter } from '../components/business/LiquidityMeter';
export { OperationDetailCard } from '../components/business/OperationDetailCard';
export { PayorCard } from '../components/business/PayorCard';
export { ProgressBar } from '../components/business/ProgressBar';
export { RiskIndicator } from '../components/business/RiskIndicator';
export { SpacingPreview } from '../components/business/SpacingPreview';
export { StatusAlert } from '../components/business/StatusAlert';
export { StatusKPICard } from '../components/business/StatusKPICard';
export { TestimonialsCarousel } from '../components/business/TestimonialsCarousel';

// ============================================================================
// PATTERNS
// ============================================================================

export { ActivityFeed } from '../components/patterns/ActivityFeed';
export { AdminPortal } from '../components/patterns/AdminPortal';
export { AdvancedFilterPanel } from '../components/patterns/AdvancedFilterPanel';
export { ApprovalFlowWizard } from '../components/patterns/ApprovalFlowWizard';
export { ApprovalTimeline } from '../components/patterns/ApprovalTimeline';
export { CFDashboard } from '../components/patterns/CFDashboard';
export { CommentThread } from '../components/patterns/CommentThread';
export { ComparisonTable } from '../components/patterns/ComparisonTable';
export { CupoValidator } from '../components/patterns/CupoValidator';
export { DataTableAdvanced } from '../components/patterns/DataTableAdvanced';
export { EditableTable } from '../components/patterns/EditableTable';
export { EmptyState } from '../components/patterns/EmptyState';
export { ErrorBoundary } from '../components/patterns/ErrorBoundary';
export { FactoringCalculator } from '../components/patterns/FactoringCalculator';
export { FactoringDashboard } from '../components/patterns/FactoringDashboard';
export { LiquidityCalculator } from '../components/patterns/LiquidityCalculator';
export { LoadingStates } from '../components/patterns/LoadingStates';
export { MultiStepWizard } from '../components/patterns/MultiStepWizard';
export { NotificationCenter } from '../components/patterns/NotificationCenter';
export { NotificationDropdown } from '../components/patterns/NotificationDropdown';
export { OnboardingWizard } from '../components/patterns/OnboardingWizard';
export { OperationsList } from '../components/patterns/OperationsList';
export { PaymentForm } from '../components/patterns/PaymentForm';
export { PricingTable } from '../components/patterns/PricingTable';
export { QuickActionToolbar } from '../components/patterns/QuickActionToolbar';
export { SearchResults } from '../components/patterns/SearchResults';
export { StatsDashboard } from '../components/patterns/StatsDashboard';
export { UploadZone } from '../components/patterns/UploadZone';
export { UserProfileCard } from '../components/patterns/UserProfileCard';

// ============================================================================
// ATOMIC DESIGN
// ============================================================================

// Molecules
export { ActionButton } from '../components/atomic/molecules/ActionButton';
export { FilterChip } from '../components/atomic/molecules/FilterChip';
export { FormField } from '../components/atomic/molecules/FormField';
export { SearchBar } from '../components/atomic/molecules/SearchBar';
export { StatCard } from '../components/atomic/molecules/StatCard';
export { TimelineItem } from '../components/atomic/molecules/TimelineItem';

// Organisms
export { FilterBar } from '../components/atomic/organisms/FilterBar';
export { InvoiceTable } from '../components/atomic/organisms/InvoiceTable';
export { LoginForm } from '../components/atomic/organisms/LoginForm';
export { NavigationBar } from '../components/atomic/organisms/NavigationBar';
export { StatsGrid } from '../components/atomic/organisms/StatsGrid';

// Templates
export { AuthTemplate } from '../components/atomic/templates/AuthTemplate';
export { DashboardTemplate } from '../components/atomic/templates/DashboardTemplate';
export { ListPageTemplate } from '../components/atomic/templates/ListPageTemplate';

// Pages
export { DashboardPage } from '../components/atomic/pages/DashboardPage';
export { FactoringSelectionPage } from '../components/atomic/pages/FactoringSelectionPage';
export { InvoiceListPage } from '../components/atomic/pages/InvoiceListPage';
export { LoginPage } from '../components/atomic/pages/LoginPage';

// ============================================================================
// ACCESSIBILITY COMPONENTS
// ============================================================================

export { FocusTrap } from '../components/accessibility/FocusTrap';
export { LiveRegion } from '../components/accessibility/LiveRegion';
export { SkipLink } from '../components/accessibility/SkipLink';

// ============================================================================
// HELP SYSTEM
// ============================================================================

export { ContextualHelp } from '../components/help/ContextualHelp';
export { HelpButton } from '../components/help/HelpButton';
export { HelpCenter } from '../components/help/HelpCenter';
export { HelpProvider } from '../components/help/HelpProvider';
export { ProductTour } from '../components/help/ProductTour';

// ============================================================================
// THEME PROVIDER
// ============================================================================

export { ThemeProvider } from '../components/core/ThemeProvider';