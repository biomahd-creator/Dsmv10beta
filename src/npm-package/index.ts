// Financio Design System - NPM Package Entry Point
// Version: 5.4.0

// ============================================================================
// UTILITIES
// ============================================================================
export { cn } from '../lib/utils';

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

// Checkbox
export { Checkbox } from '../components/ui/checkbox';

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

// Hover Card
export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '../components/ui/hover-card';

// Input
export { Input } from '../components/ui/input';

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

// Toast
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '../components/ui/toast';

export { Toaster as ToastToaster } from '../components/ui/toaster';
export { useToast } from '../components/ui/use-toast';

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

export { AmountInput } from '../components/advanced/AmountInput';
export { CurrencyBadge } from '../components/advanced/CurrencyBadge';
export { CurrencySelector } from '../components/advanced/CurrencySelector';
export { DataTable } from '../components/advanced/DataTable';
export { DateRangePicker } from '../components/advanced/DateRangePicker';
export { DocViewer } from '../components/advanced/DocViewer';
export { FileUpload } from '../components/advanced/FileUpload';
export { FormWizard } from '../components/advanced/FormWizard';
export { InvoiceCard } from '../components/advanced/InvoiceCard';
export { InvoiceStatus } from '../components/advanced/InvoiceStatus';
export { KPICard } from '../components/advanced/KPICard';
export { NotificationBadge } from '../components/advanced/NotificationBadge';
export { PasswordInput } from '../components/advanced/PasswordInput';
export { PhoneInput } from '../components/advanced/PhoneInput';
export { RateDisplay } from '../components/advanced/RateDisplay';
export { RiskBadge } from '../components/advanced/RiskBadge';
export { SearchBar } from '../components/advanced/SearchBar';
export { StatCard } from '../components/advanced/StatCard';
export { StatusBadge } from '../components/advanced/StatusBadge';
export { StepIndicator } from '../components/advanced/StepIndicator';
export { Timeline } from '../components/advanced/Timeline';

// ============================================================================
// PATTERN COMPONENTS
// ============================================================================

export { EmptyState } from '../components/patterns/EmptyState';
export { ErrorState } from '../components/patterns/ErrorState';
export { LoadingState } from '../components/patterns/LoadingState';
export { PageHeader } from '../components/patterns/PageHeader';

// ============================================================================
// BUSINESS COMPONENTS
// ============================================================================

export { ColorSwatch } from '../components/business/ColorSwatch';
export { ComponentCard } from '../components/business/ComponentCard';

// ============================================================================
// TYPE EXPORTS
// ============================================================================

// Re-export commonly used types
export type { ButtonProps } from '../components/ui/button';
export type { CardProps } from '../components/ui/card';
export type { InputProps } from '../components/ui/input';
export type { LabelProps } from '../components/ui/label';
export type { BadgeProps } from '../components/ui/badge';
