import {
  HomePage,
  ButtonPage,
  TogglePage,
  ToggleGroupPage,
  AccessibilityPage,
  BrandLayoutPage,
  ThemeCustomizerPage,
  DatePickerPage,
  ComboboxPage,
  FormPage,
  InputOTPPage,
  AlertDialogPage,
  ToastPage,
  DrawerPage,
  HoverCardPage,
  ResizablePage,
  MenubarPage,
  NavigationMenuPage,
  ContextMenuPage,
  InputPage,
  InputFilePage,
  TextareaPage,
  TextareaAutoresizePage,
  SelectPage,
  CheckboxPage,
  RadioGroupPage,
  SwitchPage,
  SliderPage,
  CalendarPage,
  LabelPage,
  CardPage,
  BadgePage,
  TablePage,
  AvatarPage,
  SeparatorPage,
  TabsPage,
  BreadcrumbPage,
  CommandPage,
  DropdownMenuPage,
  PaginationPage,
  AlertPage,
  DialogPage,
  TooltipPage,
  ProgressPage,
  SkeletonPage,
  PopoverPage,
  SheetPage,
  AccordionPage,
  CarouselPage,
  CollapsiblePage,
  ScrollAreaPage,
  ChartsPage,
  ColorPickerPage,
  RatingPage,
  DateRangePickerPage,
  FileUploaderPage,
  RichTextEditorPage,
  MultiSelectPage,
  TimelinePage,
  DataTablePage,
  ElevationPage,
  TreeTablePage,
  PivotTablePage,
  ExportDataPage,
  InvoiceGeneratorPage,
  InvoiceUploadPage,
  GridShowcasePage,
  SidebarShowcasePage,
  MultiStepWizardPage,
  MultiStepFormPage,
  MultiStepFormVerticalPage,
  MultiStepWizardVerticalPage,
  BusinessComponentsPage,
  DataVisualizationPage,
  AdvancedFormsPage,
  HelpSystemDemoPage,
  AnimationsPage,
  IconGalleryPage,
  ChangelogPage,
  KPIShowcasePage
} from "../pages";

// Advanced Components (NEW)
import { VirtualizedListPage } from "../pages/VirtualizedListPage";
import { InfiniteScrollPage } from "../pages/InfiniteScrollPage";
import { SplitButtonPage } from "../pages/SplitButtonPage";
import { FloatingActionButtonPage } from "../pages/FloatingActionButtonPage";
import { BottomSheetPage } from "../pages/BottomSheetPage";
import { MasonryGridPage } from "../pages/MasonryGridPage";
import { TransferListPage } from "../pages/TransferListPage";
import { RadarChartPage } from "../pages/RadarChartPage";
import { AreaChartPage } from "../pages/AreaChartPage";
import { OrgChartPage } from "../pages/OrgChartPage";

// Business Components (NEW)
import { InvoiceCardPage } from "../pages/InvoiceCardPage";
import { PayorCardPage } from "../pages/PayorCardPage";
import { RiskIndicatorPage } from "../pages/RiskIndicatorPage";
import { CashFlowProjectionPage } from "../pages/CashFlowProjectionPage";
import { LiquidityMeterPage } from "../pages/LiquidityMeterPage";
import { FactoringRateDisplayPage } from "../pages/FactoringRateDisplayPage";
import { DocumentVerificationPage } from "../pages/DocumentVerificationPage";
import { CollectionTimelinePage } from "../pages/CollectionTimelinePage";

// Patterns (NEW)
import { EmptyStatePage } from "../pages/EmptyStatePage";
import { ErrorBoundaryPage } from "../pages/ErrorBoundaryPage";

import { PaymentForm } from "../patterns/PaymentForm";
import { EditableTable } from "../patterns/EditableTable";

// Import section components for grouped patterns/atomic
import { ComposedPatternsSection } from "../sections/ComposedPatternsSection";
import { AtomicDesignSection } from "../sections/AtomicDesignSection";
import { ShadcnOfficialComparison } from "../sections/ShadcnOfficialComparison";

interface PageRendererProps {
  pageId: PageId;
}

export function PageRenderer({ pageId }: PageRendererProps) {
  // Map individual pages to their components
  
  switch (pageId) {
    // ===== HOME =====
    case "home":
      return <HomePage />;
      
    // ===== ACTIONS =====
    case "button":
    case "button-new":
      return <ButtonPage />;
    case "toggle":
      return <TogglePage />;
    case "toggle-group":
      return <ToggleGroupPage />;

    // ===== FORMS =====
    case "input":
    case "input-new":
      return <InputPage />;
    case "input-file":
      return <InputFilePage />;
    case "textarea":
    case "textarea-new":
      return <TextareaPage />;
    case "textarea-autoresize":
      return <TextareaAutoresizePage />;
    case "select":
    case "select-new":
      return <SelectPage />;
    case "checkbox":
    case "checkbox-new":
      return <CheckboxPage />;
    case "radio-group":
    case "radio-group-new":
      return <RadioGroupPage />;
    case "switch":
    case "switch-new":
      return <SwitchPage />;
    case "slider":
    case "slider-new":
      return <SliderPage />;
    case "calendar":
    case "calendar-new":
      return <CalendarPage />;
    case "label":
      return <LabelPage />;
    case "date-picker":
    case "date-picker-new":
      return <DatePickerPage />;
    case "date-range-picker":
      return <DateRangePickerPage />;
    case "combobox":
    case "combobox-new":
      return <ComboboxPage />;
    case "multi-select":
      return <MultiSelectPage />;
    case "form":
    case "form-new":
      return <FormPage />;
    case "input-otp":
    case "input-otp-new":
      return <InputOTPPage />;

    // ===== NAVIGATION =====
    case "tabs":
    case "tabs-new":
      return <TabsPage />;
    case "breadcrumb":
      return <BreadcrumbPage />;
    case "command":
      return <CommandPage />;
    case "dropdown-menu":
      return <DropdownMenuPage />;
    case "pagination":
      return <PaginationPage />;
    case "menubar":
      return <MenubarPage />;
    case "navigation-menu":
      return <NavigationMenuPage />;
    case "context-menu":
      return <ContextMenuPage />;

    // ===== DATA DISPLAY =====
    case "card":
    case "card-new":
      return <CardPage />;
    case "badge":
    case "badge-new":
      return <BadgePage />;
    case "table":
    case "table-new":
      return <TablePage />;
    case "avatar":
      return <AvatarPage />;
    case "separator":
      return <SeparatorPage />;
    case "hover-card":
      return <HoverCardPage />;

    // ===== FEEDBACK =====
    case "alert":
    case "alert-new":
      return <AlertPage />;
    case "dialog":
    case "dialog-new":
      return <DialogPage />;
    case "tooltip":
      return <TooltipPage />;
    case "progress":
      return <ProgressPage />;
    case "skeleton":
      return <SkeletonPage />;
    case "popover":
      return <PopoverPage />;
    case "sheet":
      return <SheetPage />;
    case "alert-dialog":
      return <AlertDialogPage />;
    case "toast":
      return <ToastPage />;
    case "drawer":
      return <DrawerPage />;

    // ===== LAYOUT =====
    case "sidebar-showcase":
      return <SidebarShowcasePage />;
    case "accordion":
      return <AccordionPage />;
    case "carousel":
      return <CarouselPage />;
    case "collapsible":
      return <CollapsiblePage />;
    case "scroll-area":
      return <ScrollAreaPage />;
    case "resizable":
      return <ResizablePage />;
    case "grid-showcase":
      return <GridShowcasePage />;

    // ===== PATTERNS =====
    case "invoice-generator":
      return <InvoiceGeneratorPage />;
    case "invoice-upload":
      return <InvoiceUploadPage />;
    case "payment-form":
      return <PaymentForm />;
    case "editable-table":
      return <EditableTable />;
    case "stats-dashboard":
    case "quick-action":
    case "data-table-advanced":
    case "advanced-filter":
    case "approval-timeline":
      return <ComposedPatternsSection />;
    case "multi-step-wizard":
      return <MultiStepWizardPage />;
    case "multi-step-form":
      return <MultiStepFormPage />;
    case "multi-step-form-vertical":
      return <MultiStepFormVerticalPage />;
    case "multi-step-wizard-vertical":
      return <MultiStepWizardVerticalPage />;

    // ===== ATOMIC DESIGN =====
    case "atomic-atoms":
      return <AtomicDesignSection key="atoms" defaultTab="atoms" />;
    case "atomic-molecules":
      return <AtomicDesignSection key="molecules" defaultTab="molecules" />;
    case "atomic-organisms":
      return <AtomicDesignSection key="organisms" defaultTab="organisms" />;
    case "atomic-templates":
      return <AtomicDesignSection key="templates" defaultTab="templates" />;
    case "atomic-pages":
      return <AtomicDesignSection key="pages" defaultTab="pages" />;

    // ===== ADVANCED =====
    case "charts":
      return <ChartsPage />;
    case "color-picker":
      return <ColorPickerPage />;
    case "rating":
      return <RatingPage />;
    case "date-range-advanced":
      return <DateRangePickerPage />;
    case "file-uploader":
      return <FileUploaderPage />;
    case "rich-text-editor":
      return <RichTextEditorPage />;
    case "timeline":
      return <TimelinePage />;
    case "data-table":
      return <DataTablePage />;
    case "tree-table":
      return <TreeTablePage />;
    case "pivot-table":
      return <PivotTablePage />;
    case "export-data":
      return <ExportDataPage />;

    // ===== BUSINESS COMPONENTS (HIGH PRIORITY) =====
    case "business-components":
      return <BusinessComponentsPage />;

    // ===== DATA VISUALIZATION (MEDIUM PRIORITY) =====
    case "data-visualization":
      return <DataVisualizationPage />;

    // ===== ADVANCED FORMS (MEDIUM PRIORITY) =====
    case "advanced-forms":
      return <AdvancedFormsPage />;

    // ===== SPECIAL PAGES =====
    case "official":
      return <ShadcnOfficialComparison />;
    case "accessibility":
      return <AccessibilityPage />;
    case "brand-layout":
      return <BrandLayoutPage />;
    case "elevation":
      return <ElevationPage />;
    case "theme-customizer":
      return <ThemeCustomizerPage />;
    case "help-system-demo":
      return <HelpSystemDemoPage />;
    case "animations":
      return <AnimationsPage />;
    case "icon-gallery":
      return <IconGalleryPage />;
    case "changelog":
      return <ChangelogPage />;
    case "kpi-showcase":
      return <KPIShowcasePage />;

    // ===== ADVANCED COMPONENTS (NEW) =====
    case "virtualized-list":
      return <VirtualizedListPage />;
    case "infinite-scroll":
      return <InfiniteScrollPage />;
    case "split-button":
      return <SplitButtonPage />;
    case "floating-action-button":
      return <FloatingActionButtonPage />;
    case "bottom-sheet":
      return <BottomSheetPage />;
    case "masonry-grid":
      return <MasonryGridPage />;
    case "transfer-list":
      return <TransferListPage />;
    case "radar-chart":
      return <RadarChartPage />;
    case "area-chart":
      return <AreaChartPage />;
    case "org-chart":
      return <OrgChartPage />;

    // ===== BUSINESS COMPONENTS (NEW) =====
    case "invoice-card":
      return <InvoiceCardPage />;
    case "payor-card":
      return <PayorCardPage />;
    case "risk-indicator":
      return <RiskIndicatorPage />;
    case "cash-flow-projection":
      return <CashFlowProjectionPage />;
    case "liquidity-meter":
      return <LiquidityMeterPage />;
    case "factoring-rate-display":
      return <FactoringRateDisplayPage />;
    case "document-verification":
      return <DocumentVerificationPage />;
    case "collection-timeline":
      return <CollectionTimelinePage />;

    // ===== PATTERNS (NEW) =====
    case "empty-state":
      return <EmptyStatePage />;
    case "error-boundary":
      return <ErrorBoundaryPage />;

    default:
      return <HomePage />;
  }
}